import Vue from "vue";
import VueRouter from "vue-router";
import movie from "./movie";
import cinema from "./cinema";
import mine from "./mine";
import city from "./city";
import search from "./search";

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
     city,
     search,
     {
      path:"**",
      redirect:"/movie"
     }
   ]
 })
