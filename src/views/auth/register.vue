<template>
  <div id="template">
    <section id="login" class="flex flex-col items-center justify-center h-screen">
      <Card style="width: 25rem; margin-bottom: 2em">
        <template #title>
          <div class="flex justify-center">
            Registrate
          </div>
        </template>
        <template #content>
          <div class="flex flex-col gap-4">
            <div class="flex flex-col">
              <span>Email</span>
              <InputText type="text" v-model="user.email"/>
            </div>
            <div class="flex flex-col">
              <span>Contraseña</span>
              <InputText type="password" v-model="user.password"/>
            </div>
            <div class="flex justify-between">
              <Button label="Ya tienes cuenta?" class="p-button-help" @click="$router.push({ name: 'login'})"/>
              <Button label="Registrarme" @click="register()"/>
            </div>
          </div>
        </template>
      </Card>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

export default {
  name: 'register',
  setup() {
    const auth = getAuth();
    const router = useRouter()

    const user = ref({
      email: '',
      password: ''
    })

    const register = () => {
      createUserWithEmailAndPassword(auth, user.value.email, user.value.password)
          // .then((userCredential) => {
          .then(() => {
            // const user = userCredential.user;
            router.push({ name: 'home' })
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/invalid-email' || errorCode === 'auth/internal-error') {
              Swal.fire(
                  'Error',
                  'El email o la contraseña no es valido',
                  'error'
              )
            } else {
              Swal.fire(
                  'Error',
                  errorCode,
                  'error'
              )
            }
            console.log('errorCode:', errorCode, 'errorMessage:', errorMessage)
          });
    }

    return {
      user,
      register
    }
  }
}
</script>

<style scoped>
#template {
  background: url("https://i.imgur.com/HgflTDf.jpg");
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
}

#template::before {
  content: "";
  width: 100%;
  min-height: 100vh;
  position: absolute;
  background-color: #2196F3;
  opacity: 0.5;
}

#login {
  position: relative;
}
</style>
