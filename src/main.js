import { createApp } from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
createApp(App).use(BootstrapVue)

export const vue_obj = createApp(App).use(BootstrapVue)
vue_obj.mount('#app')