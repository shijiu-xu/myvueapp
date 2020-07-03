<template>
  <div class="cinema">
    <Header title="影院" />
  </div>
</template>

<script>
 import { getNowMovie } from "@/api/api";

export default {
  name: "cinema",
  components: {},
  async created (){
       let data = await getNowMovie();
       console.log(data)
  }
};
</script>
