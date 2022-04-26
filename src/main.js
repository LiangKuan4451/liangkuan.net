import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import axios from "axios";
import VueAxios from 'vue-axios'
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import * as ElIcons from '@element-plus/icons-vue'
const app = createApp(App)
for (const name in ElIcons) {
    app.component(name, ElIcons[name])
}
app.use(ElementPlus)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
