<template>
  <div class="cinema">
    <Header title="订单" />
  </div>
</template>

<script>
import axios from 'axios';
// import { getNowMovie } from "@/api/api";

export default {
  name: "cinema",
  components: {},
  // async created (){
  //   let data = await getNowMovie();
  //   console.log(data)
  // }
  // created() {
  //   axios.get("http://localhost:3000/data")
  //     .then(function(response) {
  //       console.log(response);
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // },
};
</script>
