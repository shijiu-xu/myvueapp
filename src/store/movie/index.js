import {getNowMovie
} from "@/api/api.js"
export default {
    state:{
       nowMovieList:[]
    },
    mutations:{
        getMutationNowMovie(state,params){
            state.nowMovieList = params
        }
    },
    actions:{
     async  getActionNowMovie({commit},params){
            let data = await getNowMovie(params);
            commit("getMutationNowMovie",data)

                 console.log(data)
        }
    },

    namespaced:true
}