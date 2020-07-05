<template>
  <div id="app">
    <router-view />
    <FooTer v-if="this.$route.meta.tabBarFlag"/>
  </div>
</template>

<script>
import FooTer from "@/common/tabbar";
export default {
  name: "app",
  components: {
    FooTer,
  },
};
</script>

<style lang="scss">
#app, .page {
  height: 100%;
}
</style>
