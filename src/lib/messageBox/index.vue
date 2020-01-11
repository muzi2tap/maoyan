<template>
    <div class="messageboxContainer">
        <div class="messageBox_title">
            <div>{{title}}</div>
            <v-touch tag="div" @tap="handleClose()" class="close">关闭</v-touch>
        </div>
        <div class="messageBox_content">
            {{content}}
        </div>
        <div class="messageBox_btn">
            <v-touch tag="div" @tap="handleOk()">确认</v-touch>
        </div>
    </div>
</template>

<script>
export default {

};
</script>

<style>
    .messageboxContainer{
        width: 5.12rem;
        height: 3.18rem;
        box-shadow: 1px 1px 50px rgba(0,0,0,.3);
        border-radius: 2px;
        position: absolute;
        left: 0;
        top:0;
        bottom: 0;
        right: 0;
        margin: auto;
        z-index: 20;
        background: #fff;
    }
    .messageBox_title{
        width: 100%;
        height: .86rem;
        background: #f8f8f8;
        padding: 0 .3rem;
        line-height: .86rem;
        display: flex;
        justify-content: space-between;
    }
    .messageBox_content{
        padding:.4rem .2rem;
        text-align: center
    }
    .messageBox_btn{
        height: 1.14rem;
        width: 100%;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
