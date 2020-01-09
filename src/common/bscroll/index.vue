<template>
  <div class="scroll_container">
    <div class="scroll_loading" v-if="flag">
      <i class="fa fa-spinner fa-pulse"></i>
    </div>
    <div class="wrapper" ref="wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "Alley-scroll",
  data() {
    return {
      flag: false,
    };
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      // 滚动优化
      probeType: 1,
      // 下拉刷新
      pullDownRefresh:{
        // 距离顶部的距离
        threshold:50,
        stop:20
      },
      // 上拉加载更多
      pullUpLoad:true,
    });
  },
  methods: {
    // 下拉出现loading
    handleScroll() {
      this.scroll.on("scroll", pro => {
        if (pro.y > 50) {
          this.flag = true;
        }
      });
    },
    
    // 下拉刷新获取数据
    hanlepullingDown(callback){
      this.scroll.on("pullingDown",()=>{
        callback();
      })
    },
    // 当数据请求成功后需要执行的方法
    handleRefreshDown(){
      // 重新计算better-scroll
      this.scroll.refresh();
      // 防止用户多次频繁下拉刷新做的防抖
      this.scroll.finishPullDown();
      setTimeout(()=>{
        this.flag=false;
      },1000)
    },

    // 上拉加载更多
    handlepullingUp(callback){
      this.scroll.on("pullingUp",()=>{
        callback();
      })
    },
    //当上拉加载更多请求数据完毕后
    handlefinishPullUp(){
      // 当上拉加载更多数据获取到以后通知better-scroll可以进行下一次加载
      this.scroll.finishPullUp();
      // 重新计算better-scroll
      this.scroll.refresh();
    }
  }
};
</script>

<style>
.wrapper,
.scroll_container {
  height: 100%;
}
.scroll_loading{
    display: flex;
    justify-content: center;
    align-items: center;
    height: .5rem;
}
.scroll_loading i{
    font-size: .4rem;
}
</style>
