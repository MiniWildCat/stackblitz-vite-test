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


import * as singleSpa from 'single-spa';

// const list = [
// 	{
// 		name: "app1",
// 		app: ()=>import("./app.js"),
// 		activeWhen: "/app1"
// 	}
// ]
// singleSpa.registerApplication(list[0]);

const name = 'app1';
import app from './app.ts'
/* loading 是一个返回 promise 的函数，用于 加载/解析 应用代码。
 * 它的目的是为延迟加载提供便利 —— single-spa 只有在需要时才会下载应用程序的代码。
 * 在这个示例中，在 webpack 中支持 import ()并返回 Promise，但是 single-spa 可以使用任何返回 Promise 的加载函数。
 */
// const app = () => import('./app1/app1.js');
/* Single-spa 配置顶级路由，以确定哪个应用程序对于指定 url 是活动的。
 * 您可以以任何您喜欢的方式实现此路由。
 * 一种有用的约定是在url前面加上活动应用程序的名称，以使顶层路由保持简单。
 */
const activeWhen = '/app1';
singleSpa.registerApplication({ name, app, activeWhen });

singleSpa.start();
console.log("已经启动")