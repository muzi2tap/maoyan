import Vue from "vue"
import Header from "./header"
import BScroll from "../bscroll"
let componentMap=[
    Header,
    BScroll
]

componentMap.forEach((item)=>{
    Vue.component(item.name,item)
})