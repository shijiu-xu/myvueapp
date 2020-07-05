<template>
  <div class="city">
    <div class="hot_city">
      <div class="hot_title">热门城市</div>
      <div class="hot_city_list">
        <div class="hot_city_item" :key="index" v-for="(item,index) in hotList">{{item.nm}}</div>
      </div>
    </div>
    <div class="city_list">
      <div class="city_list_item" :key="index" v-for="(item,index) in cityList">
        <div class="city_item-title">{{item.index}}</div>
        <div class="city_item_list">
          <div class="city_item_index" :key="idx" v-for="(data,idx) in item.list">{{data}}</div>
        </div>
      </div>
    </div>
    <div class="city_list">
      <div class="city_list_item">
        <div class="city_item-title">A</div>
        <div class="city_item_list">
          <div class="city_item_index">北京</div>
          <div class="city_item_index">北京</div>
          <div class="city_item_index">北京</div>
          <div class="city_item_index">北京</div>
          <div class="city_item_index">北京</div>
          <div class="city_item_index">北京</div>
          <div class="city_item_index">北京</div>
          <div class="city_item_index">北京</div>
          <div class="city_item_index">北京</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  created() {
    this.getCityList();
  },
  computed: {
      ...Vuex.mapState({
          cityList:state=>state.city.cityList,
          hotList:state=>state.city.hot_list
      })
  },
  methods: {
    ...Vuex.mapActions({
      getCityList: "city/getActionCityList",
    }),
  },
};
</script>
<style lang="scss">
.city_item-title,
.hot_title {
  line-height: 0.6rem;
  padding-left: 0.26rem;
  font-size: 0.28rem;
}
.city {
  height: 100%;
  background: #ebebeb;
}
.hot_city_list,
.city_item_list {
  width: 7.16rem;
  padding-bottom: 0.16rem;
  padding-right: 0.6rem;
  background: #f5f5f5;
  display: flex;
  flex-wrap: wrap;
  .hot_city_item {
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
}
.city_list div {
  width: 100%;
}
.city_item_index {
  line-height: 0.9rem;
  margin-left: 0.26rem;
  width: 100%;
  border-bottom: 2px solid #e6e6e6;
  font-size: 0.28rem;
}
</style>
