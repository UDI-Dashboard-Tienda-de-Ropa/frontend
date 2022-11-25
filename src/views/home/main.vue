<template>
  <div class="flex w-full h-screen">
    <section class="w-1/6 bg-[#313443] flex flex-col justify-between text-white">
      <div class="h-full">
        <div class="flex flex-col items-center p-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" preserveAspectRatio="xMidYMid meet"
               viewBox="0 0 24 24">
            <path fill="currentColor"
                  d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10s10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"/>
          </svg>
          <span class="text-2xl font-bold">{{ userLogged.email }}</span>
        </div>
        <nav class="sidebar-navigation w-full">
          <ul>
            <li class="flex gap-4" :class="$route.name === 'home.dashboard' ? 'active' : ''" @click="actionMenu('home.dashboard')">
              <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" preserveAspectRatio="xMidYMid meet"
                   viewBox="0 0 1024 1024">
                <path fill="currentColor"
                      d="M924.8 385.6a446.7 446.7 0 0 0-96-142.4a446.7 446.7 0 0 0-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 0 0-142.4 96a446.7 446.7 0 0 0-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM482 232c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8h-44c-4.4 0-8-3.6-8-8v-80zM270 582c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-44c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v44zm90.7-204.5l-31.1 31.1a8.03 8.03 0 0 1-11.3 0L261.7 352a8.03 8.03 0 0 1 0-11.3l31.1-31.1c3.1-3.1 8.2-3.1 11.3 0l56.6 56.6c3.1 3.1 3.1 8.2 0 11.3zm291.1 83.6l-84.5 84.5c5 18.7.2 39.4-14.5 54.1a55.95 55.95 0 0 1-79.2 0a55.95 55.95 0 0 1 0-79.2a55.87 55.87 0 0 1 54.1-14.5l84.5-84.5c3.1-3.1 8.2-3.1 11.3 0l28.3 28.3c3.1 3.1 3.1 8.1 0 11.3zm43-52.4l-31.1-31.1a8.03 8.03 0 0 1 0-11.3l56.6-56.6c3.1-3.1 8.2-3.1 11.3 0l31.1 31.1c3.1 3.1 3.1 8.2 0 11.3l-56.6 56.6a8.03 8.03 0 0 1-11.3 0zM846 582c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-44c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v44z"/>
              </svg>
              <span>Dashboard</span>
            </li>
            <li v-if="user.rol === 3 || user.rol === 1" class="flex gap-4" :class="$route.name === 'home.uploadData' ? 'active' : ''" @click="actionMenu('home.uploadData')">
              <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" preserveAspectRatio="xMidYMid meet"
                   viewBox="0 0 32 32">
                <path fill="currentColor" d="M26 21h-3v-3h-2v3h-3v2h3v3h2v-3h3z"/>
                <path fill="currentColor"
                      d="M22 30c-4.4 0-8-3.6-8-8s3.6-8 8-8s8 3.6 8 8s-3.6 8-8 8zm0-14c-3.3 0-6 2.7-6 6s2.7 6 6 6s6-2.7 6-6s-2.7-6-6-6z"/>
                <path fill="currentColor"
                      d="M28 6c0-1.1-.9-2-2-2h-4V2h-2v2h-8V2h-2v2H6c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h6v-2H6V6h4v2h2V6h8v2h2V6h4v6h2V6z"/>
              </svg>
              <span>Cargar Datos</span>
            </li>
            <li v-if="user.rol === 1" class="flex gap-4" :class="$route.name === 'home.users' ? 'active' : ''" @click="actionMenu('home.users')">
              <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" preserveAspectRatio="xMidYMid meet"
                   viewBox="0 0 24 24">
                <path fill="white"
                      d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"/>
              </svg>
              <span>Usuarios</span>
            </li>
          </ul>
        </nav>
      </div>
      <div class="flex justify-center mb-4">
        <Button label="Cerrar Sesión" class="p-button-help" @click="logout()"/>
      </div>
    </section>
    <section class="w-5/6 overflow-auto">
<!--      <div class="flex flex-col justify-center items-center h-screen gap-4 w-full">-->
<!--        <span class="text-5xl">Hola, {{ userLogged.email }}, {{ userLogged.displayName }}</span>-->
<!--        <Button label="Cerrar Sesión" class="p-button-help" @click="logout()"/>-->
<!--      </div>-->
      <router-view />
    </section>
  </div>
</template>

<script>
import {getAuth, signOut, updateProfile} from "firebase/auth";
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import {useAuth} from "@/stores/auth.store";

export default {
  name: "HomeMain",
  setup() {
    const auth = getAuth();
    const router = useRouter()
    const useAuthStore = useAuth();

    const userLogged = computed(() => auth.currentUser)
    const user = computed(() => useAuthStore.getUser)

    const logout = () => {
      signOut(auth).then(() => {
        router.push({name: 'login'})
      }).catch((error) => {
        console.log('error', error)
      });
    }

    const actionMenu = (route) => {
      router.push({name: route})
    }

    // const prueba = () => {
    //   updateProfile(auth.currentUser, {
    //     displayName: "Daniel Suescun"
    //   }).then(() => {
    //     console.log('actualizado', auth.currentUser)
    //   }).catch((error) => {
    //     // An error occurred
    //     // ...
    //   });
    // }

    return {
      userLogged,
      logout,
      actionMenu,
      user
    };
  }
}
</script>

<style>

/** {*/
/*  margin: 0;*/
/*  padding: 0;*/
/*  list-style: none;*/
/*  font-family: "Lato", sans-serif;*/
/*  line-height: 1;*/
/*}*/

/*body {*/
/*  background-color: #f5f6f8;*/
/*  overflow: hidden;*/
/*}*/

.sidebar-navigation {
  display: inline-block;
  /*height: 100vh;*/
  /*width: 80px;*/
  background-color: #313443;
  float: left;
}
.sidebar-navigation ul {
  text-align: center;
  color: white;
}
.sidebar-navigation ul li {
  padding: 10px;
  cursor: pointer;
  transition: all ease-out 120ms;
}
.sidebar-navigation ul li i {
  display: block;
  font-size: 24px;
  transition: all ease 450ms;
}
.sidebar-navigation ul li .tooltip {
  display: inline-block;
  position: absolute;
  background-color: #313443;
  padding: 8px 15px;
  border-radius: 3px;
  margin-top: -26px;
  left: 90px;
  opacity: 0;
  visibility: hidden;
  font-size: 13px;
  letter-spacing: 0.5px;
}
.sidebar-navigation ul li .tooltip:before {
  content: "";
  display: block;
  position: absolute;
  left: -4px;
  top: 10px;
  transform: rotate(45deg);
  width: 10px;
  height: 10px;
  background-color: inherit;
}
.sidebar-navigation ul li:hover {
  background-color: #22252e;
}
.sidebar-navigation ul li:hover .tooltip {
  visibility: visible;
  opacity: 1;
}
.sidebar-navigation ul li.active {
  background-color: #22252e;
}
.sidebar-navigation ul li.active i {
  color: #98d7ec;
}

</style>