<template>
    <div class="page">
        <Header :title="nm" icon/>
        <div class="container">
            <div class="poster-bg" :style="{'background-image':'url('+(detail.img?detail.img.replace(/w\.h/,'71.100')+')':'')}">
            </div>
            <div class="content">   
                 <div class="movie_img">
                    <img :src="detail.img | toImg('148.208')" alt="">
                </div>
                <div>
                    <div class="word">{{detail.nm}}</div>
                    <div class="word">{{detail.enm}}</div>
                    <div class="word">{{detail.sc}}</div>
                    <div class="word">{{detail.pubDesc}}</div>
                    <div class="word">{{detail.star}}</div>
                </div>
            </div>
            <div class="des">
                {{detail.dra}}
            </div>
        </div>
    </div>
</template>

<script>
import {movieDetailApi} from "@api/movie"
export default {
    name:"Detail",
    props:["id","nm"],
    data(){
       return {
            detail:""
       }
    },
    async created(){
        let data=await movieDetailApi(this.id);
        this.detail=data.detailMovie
    }
};
</script>

<style>
    .poster-bg{
        width: 100%;
        height: 3.76rem;
        background-repeat:no-repeat;
        background-size: 100% 100%; 
        filter: blur(0.1rem);
        opacity: .55;
        overflow: hidden;
        position: absolute;
    }
    .content{
        position: relative;
        z-index: 10;
        display: flex;
        padding: .38rem .6rem .38rem .3rem;
        color:#fff;
        font-size: .3rem;
    }
    .content .movie_img{
        width: 2.2rem;
        height: 3rem;
        margin-right: .24rem;
    }
    .movie_img img{
        width: 100%;
        height: 100%;
    }
    .content .word{
        padding:.08rem 0;
        font-weight: 600
    }
    .des{
        padding:.2rem;
        font-size: .26rem;
    }
</style>
