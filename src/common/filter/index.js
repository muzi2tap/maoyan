import Vue from "vue"
Vue.filter("toImg",(url,offset)=>{
    url=url?url:"";
    return url.replace(/w\.h/,offset)
})
