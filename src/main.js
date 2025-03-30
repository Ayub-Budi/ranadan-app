import './assets/main.css'
import 'remixicon/fonts/remixicon.css';
import 'vue3-toastify/dist/index.css';
import 'sweetalert2/dist/sweetalert2.min.css';

import moment from 'moment';
import VueSweetalert2 from 'vue-sweetalert2';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const app = createApp(App)

app.use(VueSweetalert2, {
  confirmButtonColor: '#5fa5f9',
  cancelButtonColor: '#ACACAC',
});
app.use(createPinia())
app.use(router)

app.config.globalProperties.$initial = (name) => {
  const words = name?.split(' ');

  const initials = words?.length > 1 && words[1] != '' ? words?.slice(0, 2).map(word => word[0].toUpperCase()).join('') : name?.slice(0, 2).toUpperCase();
  return initials
}

app.config.globalProperties.$dateFormat = (value, format) => {
    return moment(value).format(format);
}

app.mount('#app')
