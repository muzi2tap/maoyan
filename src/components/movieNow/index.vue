<template>
<Alley-scroll ref="scroll">
  <div class="movie_body" >
    <div class="movie_item" v-for="(item,index) in movieList" :key="index">
      <div class="movie_item_pic">
        <img :src="item.img | toImg('128.180')" />
      </div>
      <div class="movie_item_info">
        <h2>{{item.nm}}</h2>
        <p>
          观众评:
          <span class="grade">{{item.sc}}</span>
        </p>
        <p>
          主演:
          <span>{{item.star}}</span>
        </p>
        <p>
          <span>{{item.showInfo}}</span>
        </p>
      </div>
      <div
        class="movie_item_btn"
        :class="item.globalReleased?'asale':'ticket'"
      >{{item.globalReleased?'购票':'预售'}}</div>
    </div>
  </div>
</Alley-scroll>
</template>

<script>
import { movienowApi } from "@api/movie";
export default {
  name: "MovieNow",
  data() {
    return {
      movieList: []
    };
  },
  created() {
    this.handleGetMovieList(1);
  },
  methods:{
    async handleGetMovieList(cityId){
      cityId=cityId?cityId:10
      let data = await movienowApi(cityId);
      this.movieList = data.data.movieList;
    }
  },
  watch:{
    movieList(){
      this.$refs.scroll.handleRefreshDown();
    }
  },
  mounted(){
    this.$refs.scroll.handleScroll();
    this.$refs.scroll.hanlepullingDown(()=>{
      var arr=[10,20,42,50,56,60];
      let index=parseInt(Math.random()*6);
      this.handleGetMovieList(arr[index]);
    });
    this.$refs.scroll.handlepullingUp(()=>{
      console.log(111);
    })
  }
};
</script>

<style>
/*movie_body*/
#content .movie_body {
  padding-bottom: 1rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  overflow-x: hidden;
}
#content .movie_body .movie_item {
  padding: 0.2rem 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fff;
}
#content .movie_body .movie_item .movie_item_pic {
  width: 1.28rem;
  height: 1.8rem;
}
#content .movie_body .movie_item .movie_item_pic img {
  width: 100%;
  height: 100%;
}
#content .movie_body .movie_item .movie_item_info {
  margin-left: 0.2rem;
  flex: 1;
  height: 100%;
}
#content .movie_body .movie_item .movie_item_info h2 {
  font-size: 0.34rem;
  line-height: 0.5rem;
  width: 3rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#content .movie_body .movie_item .movie_item_info p {
  font-size: 0.26rem;
  line-height: 0.45rem;
  color: #666;
  width: 4rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#content .movie_body .movie_item .movie_item_info p .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 0.3rem;
}

#content .movie_body .movie_item .movie_item_btn {
  width: 1rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  color: #fff;
  border-radius: 4px;
  font-size: 0.26rem;
  cursor: pointer;
}
#content .movie_body .movie_item .asale {
  background-color: #f03d37;
}
#content .movie_body .movie_item .ticket {
  background-color: #3c9fe6;
}
</style>