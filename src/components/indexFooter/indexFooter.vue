<template>
    <div class="footWrap">
      <div class="footItem">
            <div class="iconfont icon-zhuye" :class="{active: $route.path==='/index'}" @click="goto('/index')"></div>
            <div class="text">首页</div>
      </div>
      <div class="footItem">
            <div class="iconfont icon-all" :class="{active: $route.path==='/assort'}"  @click="goto('/assort')"></div>
            <div class="text">分类</div>
      </div>
      <div class="footItem">
            <div class="iconfont icon-mobile" :class="{active: $route.path==='/merit'}" @click="goto('/merit')"></div>
            <div class="text">值得买</div>
      </div>
      <div class="footItem">
            <div class="iconfont icon-add-cart" :class="{active: $route.path==='/cart'}" @click="goto('/cart')"></div>
            <div class="text">购物车</div>
      </div>
      <div class="footItem">
            <div class="iconfont icon-account" :class="{active: $route.path==='/personal'}" @click="goto('/personal')"></div>
            <div class="text">个人</div>
      </div>
    </div>
</template>

<script>
    export default {
        name:"indexFooter",
        // 方法
        methods:{
            goto(path){
                this.$router.replace(path)
            }
        }

    }
</script>

<style lang="stylus" scoped>
.footWrap
    width 100%
    height 100px
    display flex
    position absolute
    bottom 0px
    left 0
    background white
    justify-content space-between
    //确保层级第二高
    z-index: 10
    .footItem
        width 25%
        height 100%
        background rgba(255,255,255,1)
        display flex
        flex-direction column
        justify-content center
        align-items center
        .iconfont
            font-size 43px
            &.active
                color red
        .text
            font-size 30px
</style>