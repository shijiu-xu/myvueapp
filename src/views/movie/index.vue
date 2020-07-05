<template>
  <div class="movie page">
    <Header />
    <div class="container">
      <div class="nav">
        <router-link class="city" tag="div" to="/city">北京</router-link>

        <div class="movieToggle">
          <router-link tag="div" to="/movie/popularHotels"
            >热门酒店</router-link
          >
          <router-link tag="div" to="/movie/groupTour">跟团旅游</router-link>
        </div>
        <router-link class="search" tag="div" to="/search">
          <i class="iconfont">搜素</i>
        </router-link>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import Header from "@/common/header";

export default {
  name: "movie",
  created() {
    this.getNowMovie();
  },

  components: {},
  methods: {
    ...Vuex.mapActions({
      getNowMovie: "movie/getActionNowMovie",
    }),
  },
};
</script>

<style lang="scss" scoped>
$color: #e54847;
.container {
  position: fixed;
  height: 100%;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  overflow: auto;
  .nav {
    height: 0.88rem;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top:1rem;
    background: #fff;
    width:100%;
    .city {
      position: absolute;
      left: 0.4rem;
    }
    .search {
      position: absolute;
      right: 0.4rem;
      i {
        //  font-size:.4rem;
        color: $color;
        font-weight: 900;
      }
    }
    .movieToggle {
      display: flex;
      justify-content: space-between;
      width: 3.2rem;
      .router-link-active {
        color: $color;
        border-bottom: 2px solid $color;
      }
      div {
        width: 100%;
        line-height: 0.88rem;
        font-weight: 900;
      }
    }
  }
}
.movieTop{
   padding-top:.88rem;
}
</style>
