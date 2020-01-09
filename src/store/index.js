import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import city from "./city"

const store=new Vuex.Store({
    modules:{
        city
    }
})

export default store;