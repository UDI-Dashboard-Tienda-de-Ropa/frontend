<template>
  <div class="flex flex-col gap-4 p-4">
    <div class="flex justify-end gap-4">
      <Button label="Descargar Plantilla" @click="downloadFile()" class="p-button-warning"/>
      <Button label="Cargar Plantilla" @click="uploadFile()"/>
    </div>
    <div class="box p-4">
      <DataTable :value="rows" responsiveLayout="scroll" class="text-sm">
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
      </DataTable>
    </div>
  </div>

  <input type="file"
         ref="cargarPlantilla"
         id="cargarPlantilla"
         accept=".xlsx,.csv"
         @change="onUpload($event.target)"
         class="hidden"/>
</template>

<script>
import { ref } from 'vue'
import { read, utils, writeFileXLSX } from 'xlsx';

export default {
  name: "uploadDataMain",
  setup() {
    const cargarPlantilla = ref()
    const rows = ref([])

    const products = [
      {
        code: "1000",
        name: "Product 1",
        category: "Category 1",
        quantity: 10,
      },
      {
        code: "1001",
        name: "Product 2",
        category: "Category 1",
        quantity: 20,
      }
    ]

    const uploadFile = () => {
      cargarPlantilla.value.click()
    }

    const onUpload = async (event) => {
      const plantilla = await event.files[0].arrayBuffer();

      /* parse workbook */
      const wb = read(plantilla);

      /* update data */
      rows.value = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
      console.log(rows.value)
      document.getElementById('cargarPlantilla').value = ''
    }

    const downloadFile = () => {
      const ws = utils.json_to_sheet(products);
      const wb = utils.book_new();
      utils.book_append_sheet(wb, ws, "Plantilla");
      writeFileXLSX(wb, "Plantilla.xlsx");
    }

    return {
      products,
      cargarPlantilla,
      rows,
      uploadFile,
      downloadFile,
      onUpload
    }
  }
}
</script>

<style scoped>

</style>