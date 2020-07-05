import { getCityList } from "@/api/api.js";
export default {
  state: {
    cityList: [],
    hot_list:[]
  },
  mutations: {
    getMutationsCityList(state, params) {
      state.cityList = params.city_list;
      state.hot_list = params.hot_list;
    },
  },
  actions: {
    async getActionCityList({ commit }) {
      let data = await getCityList();
      console.log(data, "4");
      commit("getMutationsCityList", data);

      var hot_list = []; // 热门城市
      var city_list = []; // 城市列表 事件订阅

      // 热门城市
      for (var key in data) {  
        if (data[key].isHot == 1) {  // 根据isHot 判断是否为热门城市
          hot_list.push(data[key]);
        }
      }
      console.log(hot_list);

      // 城市列表
      for (var i = 0; i < data.length; i++) {
        var firstList = data[i].py.slice(0, 1).toUpperCase(); // 截取 py的第一个字母转换成大写字母
        if (toIndex(firstList)) {
          for (var j = 0; j < city_list.length; j++) {
            if (city_list[j].index == firstList) {
              city_list[j].list.push(data[i].nm);
              break;
            }
          }
        } else {
          city_list.push({ index: firstList, list: [data[i].nm] });
        }
      }

      //  判断当前首字母是否在city_list中存在，
      function toIndex(firstList) {
        for (var i = 0; i < city_list.length; i++) {
          if (firstList == city_list[i].index) {
            return true;
          }
        }
        return false;
      }

// 城市首字母排序，不可以去减，只能对比
      city_list.sort((a, b) => {  
        if (a.index > b.index) {
          return 1;
        } else {
          return -1;
        }
      });
       commit("getMutationsCityList",{city_list:city_list,hot_list:hot_list})
    },
  },

  namespaced: true,
};
