import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import '@/assets/css/style.scss'
import naive from 'naive-ui'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import {b} from './utils/index'
// b()

createApp(App).use(router)
.use(ElementPlus)
.use(naive).mount('#app')

