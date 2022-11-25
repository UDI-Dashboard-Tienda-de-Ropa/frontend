<template>
  <div class="flex flex-col gap-4 p-4">

    <div class="flex justify-between gap-4 box p-2">
      <div class="flex items-center ml-4 gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" preserveAspectRatio="xMidYMid meet"
             viewBox="0 0 32 32">
          <path fill="gray" d="M26 21h-3v-3h-2v3h-3v2h3v3h2v-3h3z"/>
          <path fill="gray"
                d="M22 30c-4.4 0-8-3.6-8-8s3.6-8 8-8s8 3.6 8 8s-3.6 8-8 8zm0-14c-3.3 0-6 2.7-6 6s2.7 6 6 6s6-2.7 6-6s-2.7-6-6-6z"/>
          <path fill="gray"
                d="M28 6c0-1.1-.9-2-2-2h-4V2h-2v2h-8V2h-2v2H6c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h6v-2H6V6h4v2h2V6h8v2h2V6h4v6h2V6z"/>
        </svg>
        <span class="font-semibold">Cargar Datos</span>
      </div>
      <div class="flex gap-2">
        <Button label="Descargar Plantilla" @click="downloadFile()" class="p-button-warning"/>
        <Button label="Cargar Plantilla" @click="uploadFile()"/>
      </div>
    </div>
    <div class="box p-4">
      <DataTable :value="rows" responsiveLayout="scroll" class="text-sm">
        <template #empty>
          No hay registros para mostrar
        </template>
        <Column field="numeroFactura" header="# Factura"></Column>
        <Column field="idProducto" header="# Producto"></Column>
        <Column field="descripcionProducto" header="Descripcion"></Column>
        <Column field="cantidad" header="Cantidad"></Column>
        <Column field="fecha" header="Fecha"></Column>
        <Column field="precio" header="Precio U.">
          <template #body="{data}">
            <span>{{ currency(data.precio, {separator: '.', precision: 0}).format() }}</span>
          </template>
        </Column>
        <Column field="total" header="Total">
          <template #body="{data}">
            <span>{{ currency(data.total, {separator: '.', precision: 0}).format() }}</span>
          </template>
        </Column>
        <Column field="tipo" header="Tipo Movimiento">
          <template #body="{ data }">
            <span v-if="data.tipo === 1">Venta</span>
            <span v-else>Compra</span>
          </template>
        </Column>
        <Column header="Acciones">
          <template #body="{ data }">
            <div class="flex gap-2">
              <Button icon="pi pi-pencil" class="p-button-rounded p-button-warning" @click="openModalUpdate(data)"/>
              <Button icon="pi pi-trash" class="p-button-rounded p-button-danger" @click="deleteAction(data)"/>
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>

  <input type="file"
         ref="cargarPlantilla"
         id="cargarPlantilla"
         accept=".xlsx,.csv"
         @change="onUpload($event.target)"
         class="hidden"/>

  <Dialog header="Actualizar Factura" v-model:visible="displayModalUpdate"
          :breakpoints="{'960px': '75vw', '640px': '90vw'}"
          :style="{width: '50vw'}" :modal="true">
    <div class="flex flex-col p-4 gap-2">
      <div class="flex flex-col">
        <span># Factura</span>
        <InputText type="text" v-model="modelUpdate.numeroFactura"/>
        <span class="text-xs text-red-500">{{ errorsUpdate.numeroFactura }}</span>
      </div>
      <div class="flex flex-col">
        <span>idProducto</span>
        <InputText type="text" v-model="modelUpdate.idProducto"/>
        <span class="text-xs text-red-500">{{ errorsUpdate.idProducto }}</span>
      </div>
      <div class="flex flex-col">
        <span>Descripcion</span>
        <InputText type="text" v-model="modelUpdate.descripcionProducto"/>
        <span class="text-xs text-red-500">{{ errorsUpdate.descripcionProducto }}</span>
      </div>
      <div class="flex flex-col">
        <span>Cantidad</span>
        <InputText type="text" v-model="modelUpdate.cantidad"/>
        <span class="text-xs text-red-500">{{ errorsUpdate.cantidad }}</span>
      </div>
      <div class="flex flex-col">
        <span>Fecha</span>
        <Calendar inputId="basic" v-model="modelUpdate.fecha" autocomplete="off" dateFormat="yy-mm-dd" />
        <span class="text-xs text-red-500">{{ errorsUpdate.fecha }}</span>
      </div>
      <div class="flex flex-col">
        <span>Precio U.</span>
        <InputText type="text" v-model="modelUpdate.precio"/>
        <span class="text-xs text-red-500">{{ errorsUpdate.precio }}</span>
      </div>
      <div class="flex flex-col">
        <span>Tipo Movimiento</span>
        <Dropdown v-model="modelUpdate.tipo" :options="tipoMovimientos" optionLabel="name" optionValue="code" placeholder="Seleccione un tipo" />
        <span class="text-xs text-red-500">{{ errorsUpdate.tipo }}</span>
      </div>
    </div>
    <template #footer>
      <Button label="Cancelar" icon="pi pi-times" @click="openModalUpdate()" class="p-button-text"/>
      <Button label="Actualizar" icon="pi pi-check" @click="updateFactura()" autofocus/>
    </template>
  </Dialog>

  <ProgressSpinner class="cargando" v-show="cargando"/>
</template>

<script>
import {ref, onMounted} from 'vue'
import {read, utils, writeFileXLSX} from 'xlsx';
import FacturasService from "./services/Facturas.service";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'
import {Timestamp} from "firebase/firestore";
import currency from "currency.js";
import Swal from "sweetalert2";
import * as yup from "yup";
import {useField, useForm} from "vee-validate";

export default {
  name: "uploadDataMain",
  setup() {
    const _FacturasService = new FacturasService()
    const cargarPlantilla = ref()
    const rows = ref([])
    const cargando = ref(false)
    const displayModalUpdate = ref(false)
    const tipoMovimientos = ref([
      {
        code: 1,
        name: 'Venta'
      }, {
        code: 2,
        name: 'Compra'
      }
    ])
    dayjs.extend(utc)

    const plantilla = [
      {
        numeroFactura: 0,
        idProducto: "Id del producto",
        descripcionProducto: "Descripcion del producto",
        cantidad: 0,
        fecha: "0000-00-00",
        precio: 0,
        tipo: "1 -> Venta, 2 -> Compra",
      }
    ]

    const uploadFile = () => {
      cargarPlantilla.value.click()
    }

    const onUpload = async (event) => {
      cargando.value = true
      const plantilla = await event.files[0].arrayBuffer();

      /* parse workbook */
      const wb = read(plantilla);

      /* update data */
      const data = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], {
        raw: false,
      });
      _FacturasService.post(data).then((res) => {
        document.getElementById('cargarPlantilla').value = ''
        getData()
      })
    }

    const downloadFile = () => {
      const ws = utils.json_to_sheet(plantilla);
      const wb = utils.book_new();
      utils.book_append_sheet(wb, ws, "Plantilla");
      writeFileXLSX(wb, "Plantilla.xlsx");
    }

    const getData = () => {
      cargando.value = true
      _FacturasService.get().then(({data}) => {
        rows.value = data.map((item) => {
          item.fecha = dayjs(item.fecha._seconds * 1000).format('YYYY-MM-DD')
          return item
        })
        cargando.value = false
      })
    }

    const deleteAction = ({id}) => {
      Swal.fire({
        title: 'Estas segur@?',
        text: "No podrás revertir esta acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
          cargando.value = true
          _FacturasService.delete(id).then(() => {
            getData()
            Swal.fire(
                'Eliminado!',
                'El registro ha sido eliminado.',
                'success'
            )
          })
        }
      })
    }

    const schemaUpdate = yup.object({
      id: yup.string().required(),
      numeroFactura: yup.number().nullable().required('El campo es requerido').label(''),
      cantidad: yup.string().nullable().required('El campo es requerido').label(''),
      descripcionProducto: yup.string().nullable().required('El campo es requerido').label(''),
      fecha: yup.string().nullable().required('El campo es requerido').label(''),
      precio: yup.string().nullable().required('El campo es requerido').label(''),
      tipo: yup.number().nullable().required('El campo es requerido').label(''),
      idProducto: yup.string().nullable().required('El campo es requerido').label(''),
    })

    const {
      errors: errorsUpdate,
      values: modelUpdate,
      handleSubmit: handleSubmitUpdate,
      handleReset: handleResetUpdate
    } = useForm({
      validationSchema: schemaUpdate
    })

    useField('numeroFactura')
    useField('cantidad')
    useField('descripcionProducto')
    useField('fecha')
    useField('precio')
    useField('tipo')
    useField('idProducto')

    const openModalUpdate = (data = null) => {
      displayModalUpdate.value = !displayModalUpdate.value
      console.log(data)
      if (data) {
        modelUpdate.numeroFactura = data.numeroFactura
        modelUpdate.cantidad = data.cantidad
        modelUpdate.descripcionProducto = data.descripcionProducto
        modelUpdate.fecha = data.fecha
        modelUpdate.precio = data.precio
        modelUpdate.tipo = data.tipo
        modelUpdate.idProducto = data.idProducto
        modelUpdate.id = data.id
      }
    }

    const updateFactura = handleSubmitUpdate((values) => {
      cargando.value = true
      console.log(values)
      const {id} = values
      delete values.id
      _FacturasService.put(id, values).then(() => {
        getData()
        displayModalUpdate.value = false
        cargando.value = false
        handleResetUpdate()
      })
    })

    onMounted(() => {
      getData()
    })

    return {
      cargarPlantilla,
      rows,
      cargando,
      uploadFile,
      downloadFile,
      onUpload,
      currency,
      deleteAction,
      openModalUpdate,
      displayModalUpdate,
      errorsUpdate,
      modelUpdate,
      updateFactura,
      tipoMovimientos
    }
  }
}
</script>

<style scoped>

</style>