<template>
    <div class="header">

          <slot></slot>
          <h2>{{title}}</h2>
    </div>
</template>
<script>
export default {
    props:{
         title:{
            type:String,
            default:"猫眼电影"
         }
    }
}
</script>

<style lang="scss">

$color:#e54847;
.header{
    width: 100%;
    height: 1rem;
    background: $color;
    display:flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top:0;
    color:#fff;
    h2{
        font-size: .4rem;
    }
    i{
        position: absolute;
        left: .4rem;
        font-size:.4rem
    }
}
</style>