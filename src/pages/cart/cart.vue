<template>
    <div class="cartWrap">
        <!-- 购物车头部 -->
        <div class="cartHeader">
            <div class="name">购物车</div>
            <div class="iconfont icon-coupons"></div>
        </div>
        <!-- 三个推销 -->
        <div class="cartNav">
            <div class="navItem">
                <div class="iconfont icon-lights">30天无忧退货</div>
            </div>
            <div class="navItem">
                <div class="iconfont icon-lights">48小时快速退款</div>
            </div>
            <div class="navItem">
                <div class="iconfont icon-lights">满99元免邮费</div>
            </div>
        </div>

        <!-- 正中心logo,未登录 -->
        <!-- <div class="Login">
            <img src="../../common/images/carts/emptyCart.gif" alt="">
            <div class="loginBtn">登录</div>
        </div> -->
        <div class="Login">
            <img src="../../common/images/tabBar/tab-cart.png" alt="">
            <div class="toAdd">去添加点什么吧~~</div>
        </div>

    </div>
</template>

<script>
    export default {
        name:"cart"
    }
</script>

<style lang="stylus" scoped>
    .cartWrap
        width 100%
        height calc(100vh - 100px)
        background #f4f4f4
        .cartHeader
            box-sizing: border-box
            width 100%
            height 90px
            padding 0 40px
            background white
            display inline-flex
            justify-content space-between
            align-items center
            .name
                font-size 30px
            .iconfont
                font-size 70px
                position relative
                background orange
                height 50px
                color orange    
                &:after
                    content:"领券"
                    color white
                    position absolute
                    font-size 25px
                    font-weight 700
                    top 15px 
                    left 10px
        .cartNav    
            width 100%
            height 70px
            background #ccc
            display flex
            justify-content space-around
            align-items center
            .iconfont
                color #666
                font-size 24px
        .Login
            width 100%
            height 100%
            background white
            position relative
            img
                width 300px
                height 300px
                display block
                position absolute
                top 0
                left 0
                right 0
                bottom 200px
                margin auto
            .loginBtn
                width 500px
                height 100px
                background #DD1A21
                color white
                font-weight 700
                font-size 30px
                text-align center
                line-height 100px
                position absolute
                top 250px
                left 0
                right 0
                bottom 0px
                margin auto
            .toAdd
                width 500px
                height 100px
                color #666
                font-size 30px
                text-align center
                line-height 100px
                position absolute
                top 250px
                left 0
                right 0
                bottom 0px
                margin auto
</style>