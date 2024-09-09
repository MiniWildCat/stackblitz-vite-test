import { createRouter, createWebHistory } from "vue-router"

// // 动态路由（只支持第N级路由，不支持动态获取所有层级下的路由）
// const getDynamicRoutes = () => {
//     // 异步引入
//     const files = import.meta.glob("../views/*.vue")
//     return Object.entries(files).map(([file, module]) => {
//         const name = file.match(/views[/](.+)[.]vue/)?.[1]?.toLocaleLowerCase()
//         console.log(file, module,name)
//         return {
//             path: "/" + name,
//             component: module
//         }
//     })
// }

// 路由规则
const staticRouteArr = [
    {
        name: "test1",
        path: '/test1',
    },
    {
        name: "test2",
        path: '/test2',
    },
	{
		name: "test3",
		path: '/test3/index',
	},
    {
        name: "category",
        path: '/category',
        children: [
            {
                name: "index",
                path: '/index',
            },
            {
                name: "test3",
                path: '/test3',
            },
            {
                name: "test4",
                path: '/test4',
            }
        ]
    }
]
// 将路由规则转换成vue-router使用的路由表
const transformStaticRoute = (objArr, path) => {
    const result = []
    if (!path) path = ''
    objArr.forEach(item=>{
        let redirectPath = path + item.path
        if (item.children) {
            result.push({
                path: redirectPath,
                children: transformStaticRoute(item.children, redirectPath)
            })
        } else {
            result.push({
                path: redirectPath,
                component: () => import('../views' + redirectPath+".vue")
            })
        }
    })
    return result
}
// 静态路由
const getStaticRoutes = () => {
    return transformStaticRoute(staticRouteArr);
}

const routes = [...getStaticRoutes()]
console.log("所有的路由是",routes)

export default createRouter({
  history: createWebHistory(),
  routes
})