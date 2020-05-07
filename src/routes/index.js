//引入路由组件
import index from "@/pages/index/index.vue"  //首页
import assort from "@/pages/assort/assort.vue" // 分类
import merit from "@/pages/merit/merit.vue" //值得买
import cart from "@/pages/cart/cart.vue"  //购物车
import personal from "@/pages/personal/personal.vue" //个人中心


export default [
    {path:"/index",component:index},
    {path:"/assort",component:assort},
    {path:"/merit",component:merit},
    {path:"/cart",component:cart},
    {path:"/personal",component:personal},
    {path:'/',redirect: "/index"}
]