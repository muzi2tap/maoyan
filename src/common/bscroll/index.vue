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
      flag: false
    };
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      probeType: 1,
      pullDownRefresh:true
    });
  },
  methods: {
    handleScroll() {
      this.scroll.on("scroll", pro => {
        if (pro.y > 30) {
          this.flag = true;
        }
      });
    },
    hanlepullingDown(callback){
      this.scroll.on("pullingDown",()=>{
        callback();
      })
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
