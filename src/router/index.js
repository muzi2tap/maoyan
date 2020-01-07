import Vue from "vue"
import VueRouter from "vue-router"
import movie from "./movie"
import cinema from "./cinema"
import search from "./search"
import city from "./city"
Vue.use(VueRouter);


const router=new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/movie"
        },
        movie,
        cinema,
        search,
        city,
        {
            path:"/mine",
            name:"mine",
            component:_=>import("@pages/mine"),
            meta:{
                flag:true,
                requireAuth:true
            }
        },
        {
            path:"/login",
            name:"login",
            component:_=>import("@pages/login")
        }
    ]
})

router.beforeEach((to, from, next) => {
    if(to.path!="/login"&&to.meta.requireAuth){
        if(localStorage.getItem("token")){
            next()
        }else{
            next({name:"login",params:{to:to.path}})
        }
    }else{
        next();
    }
})

export default router;
