import Vue from "vue"
Vue.filter("toImg",(url,offset)=>{
    return url.replace(/w\.h/,offset)
})
