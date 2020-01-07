<template>
    <div id="header">
        <v-touch 
        class="left_icon" 
        v-if="icon"
        @tap="handleBack()"
        >
            <i class="iconfont">&#xe621;</i>
        </v-touch>
        <h2>{{title}}</h2>
    </div>
</template>

<script>
export default {
    name:"Header",
    props:{
        title:{
            type:String,
            default:"猫眼电影"
        },
        icon:{
            type:Boolean,
        }
    },
    methods: {
        handleBack(){
            this.$router.back();
        }
    },
};
</script>

<style>
    #header{
        position: relative;
        width: 100%;
        height: .88rem;
        background: #c33;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        z-index: 10
    }
    .left_icon{
        position: absolute;
        left: .2rem;
        font-size: .4rem;
    }
</style>
