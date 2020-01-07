<template>
    <div id="footer">
        <ul>
            <router-link
                tag="li"
                v-for="item in tabbars"
                :key="item.id"
                :to="item.path"
            >
            <i class="iconfont" v-html="item.icon"></i>
            <span>{{item.text}}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
   name:"TabBar",
   data(){
       return {
           tabbars:[
               {
                   id:0,
                   text:"电影",
                   icon:"&#xe717;",
                   path:"/movie"
               },
                {
                   id:1,
                   text:"影院",
                   icon:"&#xe8c0;",
                   path:"/cinema"
               },
                {
                   id:2,
                   text:"我的",
                   icon:"&#xe63a;",
                   path:"/mine"
               }
           ]
       }
   }
};
</script>

<style>
    #footer{
        width: 100%;
        height: 1rem;
        position: fixed;
        left: 0;
        bottom: 0;
        border-top: 1px solid #ccc;
        background: #fff;
    }
    #footer ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #footer ul li{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #footer ul li span {
        font-size: 0.3rem;
    }
    #footer ul li i {
        font-size: 0.4rem;
    }
    #footer ul .router-link-active{
        color: #c33;
    }
</style>
