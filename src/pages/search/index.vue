<template>
  <div class="page">
    <Header icon/>
    <div class="search_movie_body">
      <div class="search_movie_input">
        <input type="text" v-model="value"/>
      </div>
      <h2>电影/电视剧/综艺</h2>
      <router-link tag="div" :to="'/detail/'+item.id+'/'+item.nm" class="movie_item" v-for="(item,index) in list" :key="index">
        <div class="movie_item_pic">
          <img
            :src="item.img|toImg('128.180')"
            alt
          />
        </div>
        <div class="movie_item_info">
          <h2>{{item.nm}}</h2>
          <p>
            <span>{{item.wish}}</span>人想看
          </p>
          <p>
            主演:
            <span>{{item.star}}</span>
          </p>
          <p>
            <span>{{item.pubDesc}}</span>上映
          </p>
        </div>
        <div class="movie_item_btn person">想看</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import {movieSearch} from "@api/movie"
import {throttle} from "@utils/alley"
import { async } from 'q'
export default {
  name:"Search",
  data(){
    return {
      value:"",
      list:[]
    }
  },
  watch:{
    value(newVal){
      throttle(async ()=>{
        let data=await movieSearch(this.$store.state.city.cityId,newVal);
        this.list=data.movies?data.movies.list:[];
        if(this.value==""){
          this.list=[];
        }
      })
    }
  }
};
</script>

<style>
/*movie_body*/
 .search_movie_body {
  height: 100%;
  padding-bottom: 1rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  overflow-x: hidden;
}

 .search_movie_body .search_movie_input {
  padding: 0.16rem 0.2rem;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
}
 .search_movie_body .search_movie_input > input {
  border: none;
  font-size: 0.3rem;
  color: #333;
  padding: 0.1rem 0;
  outline: none;
  margin-left: 5px;
  width: 100%;
}
 .search_movie_body > h2 {
  font-size: 0.3rem;
  color: #999;
  padding: 0.18rem 0;
  border-bottom: 1px solid #e6e6e6;
}
 .search_movie_body .movie_item {
  padding: 0.2rem 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
 .search_movie_body .movie_item .movie_item_pic {
  width: 1.28rem;
  height: 1.8rem;
}
 .search_movie_body .movie_item .movie_item_pic img {
  width: 100%;
  height: 100%;
}
 .search_movie_body .movie_item .movie_item_info {
  margin-left: 0.2rem;
  flex: 1;
  height: 100%;
}
 .search_movie_body .movie_item .movie_item_info h2 {
  font-size: 0.34rem;
  line-height: 0.5rem;
  width: 3rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
 .search_movie_body .movie_item .movie_item_info p {
  font-size: 0.26rem;
  line-height: 0.45rem;
  color: #666;
  width: 4rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
 .search_movie_body .movie_item .movie_item_info p .person {
  font-weight: 700;
  color: #faaf00;
  font-size: 0.3rem;
}

 .search_movie_body .movie_item .movie_item_btn {
  width: 1rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  color: #fff;
  border-radius: 4px;
  font-size: 0.26rem;
  cursor: pointer;
}
 .search_movie_body .movie_item > .person {
  background-color: #faaf00;
}
</style>
