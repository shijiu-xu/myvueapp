<template>
  <div id="footer">
    <ul>
      <router-link tag="li" v-for="(item, index) in tabbar" :key="index" :to="item.path">
        <span> {{ item.title }}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "fooTer",
  data() {
    return {
      tabbar: [
        {
          title: "首页",
          path: "/movie",
        },
        {
          title: "订单",
          path: "/cinema",
        },
        {
          title: "我的",
          path: "/mine",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
$color:cadetblue;

#footer{
    width: 100%;
    height: 1rem;
    position:fixed;
    background: #ccc;
    left:0;
    bottom: 0;
    border-top:1px solid black;
    ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-content: center;
        li{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction:  column;
            color: #333;
            font-size:.3rem;
        }
    }
}

#footer>ul>.router-link-active{
    color: $color;
}

#footer>ul>li>span{
    display: block;
    
}
 
</style>
