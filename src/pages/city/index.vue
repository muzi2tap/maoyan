<template>
  <div class="city_container">
    <div class="city_body">
      <div class="hot_city">热门城市</div>
      <div class="hot_city_list">
        <div class="hot_city_name" v-for="(item,index) in hotCity" :key="index">{{item.nm}}</div>
      </div>
      <!-- 城市列表 -->
      <div class="city_list">
        <div class="city_list_item" v-for="(item) in cityList" :key="item.id">
          <div class="city_title_letter">{{item.index}}</div>
          <div class="city_list_name">
            <div class="city_list_name_item" v-for="(child) in item.List" :key="child.id">{{child.nm}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="city_list_index">
      <div class="index_item" v-for="item in cityList" :key="item.id">{{item.index}}</div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  name:"City",
  created(){
    if(!(sessionStorage.getItem("cityList") && sessionStorage.getItem("hotCity"))){
      this.$store.dispatch("city/handleGetCityList")
    }
  },
  computed:{
    ...mapState({
      hotCity:state=>state.city.hotCity,
      cityList:state=>state.city.cityList
    })
  },
};
</script>
 
<style>
.city_container {
  height: 100%;
  overflow: auto;
}
.city_body {
  background: #ebebeb;
}

/*热门城市*/
.hot_title,
.city_title_letter {
  line-height: 0.6rem;
  padding-left: 0.26rem;
  font-size: 0.28rem;
}

.hot_city_list,
.city_list_name {
  width: 96%;
  background: #f5f5f5;
  padding-bottom: 0.16rem;
  padding-right: 0.6rem;
  display: flex;
  flex-wrap: wrap;
}
.hot_city_name {
  margin-top: 0.3rem;
  margin-left: 0.26rem;
  width: 1.9rem;
  height: 0.66rem;
  background: #fff;
  text-align: center;
  line-height: 0.66rem;
  font-size: 0.28rem;
  border: 2px solid #e6e6e6;
}

.city_list > div {
  width: 100%;
}
.city_list_name_item {
  line-height: 0.9rem;
  margin-left: 0.26rem;
  width: 100%;
  border-bottom: 2px solid #e6e6e6;
  font-size: 0.28rem;
}

/*城市列表下标*/
.city_list_index {
  position: fixed;
  right: 0;
  top: 1rem;
}
.city_list_index > div {
  padding: 0.1rem 0.05rem;
  font-size: 0.25rem;
}
</style>