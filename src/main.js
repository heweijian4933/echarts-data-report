import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import * as echarts from 'echarts'

import installElementPlus from './plugins/element'
import installIcons from '@/assets/icons'

console.log("process.env=>", process.env)


const app = createApp(App)
app.config.globalProperties.$echarts = echarts

app
    .use(installElementPlus)
    .use(installIcons)
    .use(echarts)
    .use(store)
    .use(router)
    .mount("#app")
