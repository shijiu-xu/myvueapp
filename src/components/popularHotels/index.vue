<template>
  <div class="popularHotels movieTop">
    <div class="popularItem" :key="index" v-for="(item, index) in movieList">
      <div class="populaimgs">
        <img :src="item.coverImageUrl" alt="" />
      </div>
      <div class="hotelDetails">
        <div class="hotelInfo">
          <h2>
            {{ item.name }}<span> | {{ item.districtName }}</span>
          </h2>
          <em>立减</em>
          <p>{{ item.businessZoneName }}</p>
          <p class="address">{{ item.address }}</p>
        </div>
        <div :class="item.roomFree ? 'hotelBtn' : 'alreadyBtn'">
          <span>{{ item.roomFree ? "预定" : "已满" }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  computed: {
    ...Vuex.mapState({
      movieList: (state) => state.movie.nowMovieList,
    }),
  },
};
</script>
<style lang="scss">
$color: #e54847;
.popularHotels {
  background: #fff;
}
.popularItem {
  padding-left: 0.2rem;
  width: 7.16rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.populaimgs {
  width: 2.88rem;
  height: 2.8rem;
}
.populaimgs img {
  width: 100%;
  height: 100%;
}
.hotelDetails {
  margin-left: 0.2rem;
  height: 100%;
  width: 100%;
  padding: 0.24rem 0;
  display: flex;
  justify-content: space-between;
  h2 {
    margin-bottom: 0.14rem;
    font-size: 0.32rem;
    padding-top: 0.08rem;
    padding-bottom: 0.6rem;
    span {
      font-size: 0.23rem;
      color: aqua;
    }
  }
  p {
    font-size: 0.26rem;
    line-height: 0.4rem;
  }
  em {
    font-style: normal;
    background: red;
  }
}
.hotelBtn {
  width: 0.94rem;
  height: 0.54rem;
  span {
    text-align: center;
    font-size: 0.4rem;
    color: blue;
    line-height: 3.5rem;
  }
}
.address {
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.alreadyBtn {
  width: 0.94rem;
  height: 0.54rem;
  span {
    text-align: center;
    font-size: 0.4rem;
    color: red;
    line-height: 3.5rem;
  }
}
</style>
