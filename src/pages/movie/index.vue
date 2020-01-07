<template>
  <div class="page">
    <Header title="猫眼电影" />
    <div id="content">
      <div class="movie_menu">
        <router-link class="movie_menu_city" tag="div" to="/city">
          <span>北京</span>
          <i class="iconfont">&#xe642;</i>
        </router-link>
        <ul class="movie_menu_switch">
          <router-link to="/movie/movienow" tag="li">正在热映</router-link>
          <router-link tag="li" to="/movie/moviecomming">即将上映</router-link>
        </ul>
        <router-link class="movie_menu_search" to="/search" tag="div">
          <i class="iconfont">&#xe613;</i>
        </router-link>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Movie"
};
</script>

<style>
#content {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding-top: 0.88rem;
  padding-bottom: 1rem;
}

/*movie_menu*/
#content .movie_menu {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 0.9rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.4rem;
  border: 1px solid #e6e6e6;
}
#content .movie_menu .movie_menu_city span {
  font-size: 0.3rem;
}

#content .movie_menu .movie_menu_city i {
  font-size: 0.3rem;
}
#content .movie_menu .movie_meun_search i {
  font-size: 0.4rem;
  font-weight: 900;
  color: #e54847;
}
#content .movie_menu .movie_menu_switch {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#content .movie_menu .movie_menu_switch li {
  height: 100%;
  line-height: 0.9rem;
  padding: 0 0.2rem;
  font-size: 0.3rem;
}

#content .movie_menu .movie_menu_switch .router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
</style>