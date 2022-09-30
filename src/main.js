import './assets/main.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//PRIMEVUE COMPONENTS
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Password from 'primevue/password';
import Chart from 'primevue/chart';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const firebaseConfig = {
  apiKey: "AIzaSyA-_Mv6q4nDouEHeFyY_qIwp70nH6rNGoU",
  authDomain: "dashboard-udi.firebaseapp.com",
  projectId: "dashboard-udi",
  storageBucket: "dashboard-udi.appspot.com",
  messagingSenderId: "849741078840",
  appId: "1:849741078840:web:a7e39d196c602a1517a1cd",
  measurementId: "G-E9PR3N0T2W"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)
app.use(PrimeVue);
app.component('InputText', InputText);
app.component('Card', Card);
app.component('Button', Button);
app.component('Password', Password);
app.component('Chart', Chart);
app.component('Calendar', Calendar);
app.component('Dropdown', Dropdown);
app.component('DataTable', DataTable);
app.component('Column', Column);

app.use(createPinia())
app.use(router)

app.mount('#app')
