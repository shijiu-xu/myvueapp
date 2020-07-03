import Vue from "vue";
import VueRouter from "vue-router";
import movie from "./movie";
import cinema from "./cinema";
import mine from "./mine";

Vue.use(VueRouter);

 export default new VueRouter({
   routes:[
     {
       path:"/",
       redirect:"/movie"
     },
     movie,
     cinema,
     mine,
     {
      path:"**",
      redirect:"/movie"
     }
   ]
 })
