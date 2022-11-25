<template>
  <div class="flex flex-col gap-4 p-4">
    <div class="flex justify-between gap-4 box p-2">
      <div class="flex items-center ml-4 gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" preserveAspectRatio="xMidYMid meet"
             viewBox="0 0 24 24">
          <path fill="gray"
                d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"/>
        </svg>
        <span class="font-semibold">Usuarios</span>
      </div>
      <Button label="Crear" @click="openModal()" class="p-button-success"/>
    </div>
    <div class="box p-4">
      <DataTable :value="rows" responsiveLayout="scroll" class="text-sm">
        <template #empty>
          No hay registros para mostrar
        </template>
        <Column field="uid" header="UID"></Column>
        <Column field="nombreCompleto" header="Nombre Completo"></Column>
        <Column field="correo" header="Correo"></Column>
        <Column field="rol" header="Rol">
          <template #body="{ data }">
            <span v-if="data.rol === 1">Gerente</span>
            <span v-if="data.rol === 2">Gerente Comercial</span>
            <span v-if="data.rol === 3">Administrador</span>
          </template>
        </Column>
        <Column header="Acciones" v-if="user.rol === 1 || user.rol === 2">
          <template #body="{ data }">
            <div class="flex gap-2">
              <Button icon="pi pi-pencil" class="p-button-rounded p-button-warning" @click="openModalUpdate(data)" v-if="user.rol === 1 || user.rol === 2"/>
              <Button icon="pi pi-trash" class="p-button-rounded p-button-danger" @click="deleteUserAction(data)" v-if="user.rol === 1"/>
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>

  <Dialog header="Crear Usuario" v-model:visible="displayModal" :breakpoints="{'960px': '75vw', '640px': '90vw'}"
          :style="{width: '50vw'}" :modal="true">
    <div class="flex flex-col p-4 gap-2">
      <div class="flex flex-col">
        <span>Nombre Completo</span>
        <InputText type="text" v-model="model.nombreCompleto" />
        <span class="text-xs text-red-500">{{ errors.nombreCompleto }}</span>
      </div>
      <div class="flex flex-col">
        <span>Correo</span>
        <InputText type="text" v-model="model.correo" />
        <span class="text-xs text-red-500">{{ errors.correo }}</span>
      </div>
      <div class="flex flex-col">
        <span>Contraseña</span>
        <InputText type="password" v-model="model.pass" />
        <span class="text-xs text-red-500">{{ errors.pass }}</span>
      </div>
      <div class="flex flex-col">
        <span>Correo</span>
        <Dropdown v-model="model.rol" :options="roles" optionLabel="name" optionValue="code" placeholder="Seleccione un rol" />
        <span class="text-xs text-red-500">{{ errors.rol }}</span>
      </div>
    </div>
    <template #footer>
      <Button label="Cancelar" icon="pi pi-times" @click="closeModal()" class="p-button-text"/>
      <Button label="Guardar" icon="pi pi-check" @click="saveUser()" autofocus/>
    </template>
  </Dialog>

  <Dialog header="Actualizar Usuario" v-model:visible="displayModalUpdate" :breakpoints="{'960px': '75vw', '640px': '90vw'}"
          :style="{width: '50vw'}" :modal="true">
    <div class="flex flex-col p-4 gap-2">
      <div class="flex flex-col">
        <span>Nombre Completo</span>
        <InputText type="text" v-model="modelUpdate.nombreCompleto" />
        <span class="text-xs text-red-500">{{ errorsUpdate.nombreCompleto }}</span>
      </div>
      <div class="flex flex-col">
        <span>Correo</span>
        <InputText type="text" v-model="modelUpdate.correo" />
        <span class="text-xs text-red-500">{{ errorsUpdate.correo }}</span>
      </div>
      <div class="flex flex-col">
        <span>Contraseña</span>
        <InputText type="password" v-model="modelUpdate.pass" />
        <span class="text-xs text-red-500">{{ errorsUpdate.pass }}</span>
      </div>
      <div class="flex flex-col">
        <span>Correo</span>
        <Dropdown v-model="modelUpdate.rol" :options="roles" optionLabel="name" optionValue="code" placeholder="Seleccione un rol" />
        <span class="text-xs text-red-500">{{ errorsUpdate.rol }}</span>
      </div>
    </div>
    <template #footer>
      <Button label="Cancelar" icon="pi pi-times" @click="openModalUpdate()" class="p-button-text"/>
      <Button label="Actualizar" icon="pi pi-check" @click="updateUser()" autofocus/>
    </template>
  </Dialog>

  <ProgressSpinner class="cargando" v-show="cargando"/>

</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'
import { useAuth } from "@/stores/auth.store";
import Swal from 'sweetalert2'

export default {
  name: "uploadDataMain",
  setup() {
    const useAuthStore = useAuth();
    const auth = getAuth();
    const rows = computed(() => useAuthStore.getUsers)
    const user = computed(() => useAuthStore.getUser)
    const displayModal = ref(false)
    const displayModalUpdate = ref(false)
    const cargando = ref(false)
    const roles = ref([
      { name: 'Gerente', code: 1 },
      { name: 'Gerente Comercial', code: 2 },
      { name: 'Administrador', code: 3 },
    ])

    const schema = yup.object({
      rol: yup.number().nullable().required('El campo es requerido').label(''),
      nombreCompleto: yup.string().nullable().required('El campo es requerido').label(''),
      pass: yup.string().nullable().required('El campo es requerido').label(''),
      correo: yup.string().email('Email inválido').nullable().required('El campo es requerido').label(''),
    })

    const { errors, values: model, handleSubmit, handleReset } = useForm({
      validationSchema: schema
    })

    const schemaUpdate = yup.object({
      rol: yup.number().nullable().required('El campo es requerido').label(''),
      nombreCompleto: yup.string().nullable().required('El campo es requerido').label(''),
      id: yup.string().nullable(),
      correo: yup.string().email('Email inválido').nullable().required('El campo es requerido').label(''),
      pass: yup.string().label('')
          .when('isBig', {
            is: (val) => typeof val !== 'undefined',
            then: (schema) => schema.nullable().required('El campo es requerido')
          })
    })

    const { errors: errorsUpdate, values: modelUpdate, handleSubmit: handleSubmitUpdate, handleReset: handleResetUpdate } = useForm({
      validationSchema: schemaUpdate
    })

    useField('nombreCompleto')
    useField('correo')
    useField('rol')
    useField('id')
    useField('pass')

    const saveUser = handleSubmit((values) => {
      cargando.value = true
      createUserWithEmailAndPassword(auth, values.correo, values.pass)
          .then((userCredential) => {
            values.uid = userCredential.user.uid
            useAuthStore.saveUser([{
              correo: values.correo,
              uid: values.uid,
              nombreCompleto: values.nombreCompleto,
              rol: values.rol
            }]).then((response) => {
              useAuthStore.actionGetUsers()
              displayModal.value = false
              cargando.value = false
              handleReset()
            })
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    })

    const updateUser = handleSubmitUpdate((values) => {
      cargando.value = true
      const { id } = values
      delete values.id
      useAuthStore.actionUpdateUser(id, values).then((response) => {
        console.log(response, 'response')
        useAuthStore.actionGetUsers()
        displayModalUpdate.value = false
        cargando.value = false
        handleResetUpdate()
      })
    })

    const openModal = () => {
      displayModal.value = true
    }

    const closeModal = () => {
      displayModal.value = false
    }

    const openModalUpdate = (data = null) => {
      displayModalUpdate.value = !displayModalUpdate.value
      if (data) {
        modelUpdate.nombreCompleto = data.nombreCompleto
        modelUpdate.correo = data.correo
        modelUpdate.rol = data.rol
        modelUpdate.id = data.id
      }
    }

    const deleteUserAction = ({ id }) => {
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
          useAuthStore.actionDeleteUser(id).then(() => {
            cargando.value = false
            useAuthStore.actionGetUsers()
            Swal.fire(
                'Eliminado!',
                'El usuario ha sido eliminado.',
                'success'
            )
          }).catch((error) => {
            console.log('Error deleting user:', error);
          });
        }
      })
    }

    onMounted(() => {
      Promise.all([
        useAuthStore.actionGetUsers()
      ]).then(() => {
        cargando.value = false
      })
    })

    return {
      rows,
      displayModal,
      errors,
      model,
      errorsUpdate,
      modelUpdate,
      saveUser,
      roles,
      cargando,
      displayModalUpdate,
      openModal,
      closeModal,
      deleteUserAction,
      openModalUpdate,
      updateUser,
      user
    }
  }
}
</script>

<style>

</style>