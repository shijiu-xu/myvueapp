<template>
  <div id="app">
    <router-view />
    <FooTer/>
  </div>
</template>

<script>
import FooTer from "@/common/tabbar"
export default {
  name:"app",
  components:{
    FooTer
  }
}
</script>

<style lang="scss"></style>
