<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <TabBar v-if="$route.meta.flag"/>
  </div>
</template>

<script>
import TabBar from "@common/components/tabBar"
export default {
  name:"App",
  components:{
    TabBar
  }
}
</script>
<style>
  .page{
    position: absolute;
    left: 0;
    top:0;
    bottom: 0;
    right: 0;
    padding-bottom: 1rem;
  }
</style>
