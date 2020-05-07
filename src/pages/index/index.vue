<template>
<!-- 主页Wrap -->
    <div class="indexWrap">
        <div :class="{Mask:showMask=== true}"></div>
        <!-- 广告栏 -->
        <div class="guanggao" v-show="showAdvertisement && showAdvertisement === true">
            <div class="iconfont icon-close" @click="closeAdvertisement()"></div>
            <img class="guanggaoLogo" src="https://yanxuan.nosdn.127.net/3137220cc522a8fbb0b7520637a61469.png?type=webp&imageView&thumbnail=750x0&quality=75" alt="">
        </div>
        <!-- 顶部header -->
        <div class="indexHeader">
            <!-- 上部分搜索栏 -->
            <div class="header-top">
                <img class="logo" src="../../common/images/logo.png" alt="">
                <div class="textInput">
                    <div class="iconfont icon-sousuo"></div>
                    <input class="Input" type="text" placeholder="搜索商品">
                </div>
                
                <div class="btnHeader">登录</div>
            </div>
            <!-- 下部分scroll -->
            <div class="header-bottom">
                <!-- 滑屏总长 -->
                <div class="scrollWrap" ref="scrollWrap" v-show="!showMask">
                    <ul class="scrollContent" v-if="indexData.kingKongModule && indexData.kingKongModule.kingKongList">
                        <li class="scrollItem active">推荐</li>
                        <li class="scrollItem" 
                             v-for="(kingKongItem, index) in indexData.kingKongModule.kingKongList" 
                            :key="index"
                        >
                            {{kingKongItem.text}}
                        </li>
                    </ul>
                </div>
                <!-- 右侧下拉菜单 -->
                <div class="headerMenu" @click="isShowMask">
                    <!-- 半透明 -->
                    <div class="semitransparent"></div>
                    <div class="iconfont icon-jiantou9"></div>
                </div>
                <!-- 点击看遮罩内容 -->
                <div class="MenuMask" v-show="showMask">
                    <!-- 全部频道 -->
                    <div class="maskTitle">全部频道</div>
                    <div class="maskItem">
                        推荐
                    </div>
                    <div class="maskItem">
                        居家生活
                    </div>
                    <div class="maskItem">
                        居家生活
                    </div>
                    <div class="maskItem">
                        居家生活
                    </div>
                    <div class="maskItem">
                        居家生活
                    </div>
                    <div class="maskItem">
                        居家生活
                    </div>
                </div>
            </div>
        </div>
        <!-- 内容区 -->
        <div class="indexContent" ref="indexContent" @touchmove="gotomove()">
            <div class="indexScroll">
                <!-- 轮播图 -->
                <div class="lunbo">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/a12c510b428bbcc4fdf1eb4bdfd86ae4.png?type=webp&imageView&quality=75&thumbnail=750x0"/></div>
                            <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/31b0c2a0424fe7b152950fa0ed53f8b6.jpg?type=webp&imageView&quality=75&thumbnail=750x0"/></div>
                            <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/84d82137e854e58bf26791db3ba203b8.jpg?type=webp&imageView&quality=75&thumbnail=750x0"/></div>
                            <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/efe5bb71fd6787d9c5f5b051eb607666.jpg?type=webp&imageView&quality=75&thumbnail=750x0"/></div>
                            <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/b7f94a107096c60038eba24f542d62c5.jpg?type=webp&imageView&quality=75&thumbnail=750x0"/></div>
                            <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/a16ac18c02bb26755dbcac1911631aa0.jpg?type=webp&imageView&quality=75&thumbnail=750x0"/></div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
                <!--网易自营品牌3牌子billboard -->
                <div class="billboard">
                    <div class="boardItem">
                        <p class="iconfont icon-feed-logo"></p>
                        <p class="text">网易自营品牌</p>
                    </div>
                    <div class="boardItem">
                        <p class="iconfont icon-security"></p>
                        <p class="text">30天无忧品牌</p>
                    </div>
                    <div class="boardItem">
                        <p class="iconfont icon-rmb1"></p>
                        <p class="text">48小时推荐品牌</p>
                    </div>
                </div>
                <!--商品分类kingkong -->
                <div class="cateList" v-if="indexData.kingKongModule && indexData.kingKongModule.kingKongList" >
                    <div class="cateItem" 
                            v-for="(kingKongItem, index) in indexData.kingKongModule.kingKongList" 
                            :key="index"
                            >
                        <img :src="kingKongItem.picUrl" alt="">
                        <div class="cateTitle">{{kingKongItem.text}}</div>
                    </div>
                </div>
                <!-- 广告大logo--advertisement -->
                <div class="advertisement">
                    <img src="https://yanxuan.nosdn.127.net/7db5ad89be165b82b6a3e261029d0122.gif" alt="">
                </div>
                <!-- 新人专享 -->
                <div class="newComer">
                    <!-- 头部样式 -->
                    <div class="newTitle">--新人专享礼--</div>
                    <!-- 下三块 -->
                    <div class="newContent">
                        <div class="newLeft" >
                            <p>新人专享礼包</p>
                            <img src="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="">
                        </div>
                        <div class="newRight">
                            <div class="newTop">
                                <h3>福利社</h3>
                                <p>今日特价</p>
                            </div>
                            <div class="newBottom">
                                <h3>新人拼团</h3>
                                <i class="yuan">1元起包邮</i>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 类目热销榜 -->
                <div class="hotList">
                    <!-- TITLE标题-->
                    <div class="hotTitle">类目热销榜</div>
                    <!--  大内容区-->
                    <div class="hotMain" v-if="indexData">
                        <!-- flex布局顶部2个-->
                        <div class="hotContent popular" v-for="(item1, index) in categoryListFirst" :key="index">
                            <div class="contentTtile1">{{item1.categoryName}}</div>
                            <img class="bgImg" :src="item1.showPicUrl" alt="">
                        </div>
                        <!-- 其余8个 -->
                        <div class="hotContent" v-for="(item2, index) in categoryListElse" :key="'item2'+index">
                            <div class="contentTtile2">{{item2.categoryName}}</div>
                            <img :src="item2.showPicUrl" alt="">
                        </div>
                    </div>
                </div>
                <!-- 省略一堆XXXXXXXXXXXXXX -->
                <!-- 底部区域 -->
                <div class="footBlack">
                    <div class="downLoad">
                        <div class="downApp">下载APP</div>
                        <div class="downPc">电脑版</div>
                    </div>
                    <div class="copy">
                        <p>网易公司版权所有 © 1997-</p>
                        <p>食品经营许可证：JY13301080111719</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from "@/utils/http.js"
// 引入滑屏插件
import BScroll from 'better-scroll'
// 引入轮播图
import Swiper from 'swiper';
//引入lodash
// import _ from "lodash";

import {GETINDEX} from "@/store/mutation_types";
import {mapActions,mapState} from "vuex";
    export default {
        name:"index",
        data(){
            return {
                showAdvertisement:true,
                showMask:false
            }
        },
        async mounted(){
            //测试axios请求
            await this[GETINDEX]()
             this.$nextTick(()=>{
                    // 头部NAV滑屏
                    new BScroll(this.$refs.scrollWrap,{
                        scrollX:true
                    })
                     // indexMain内容区滑动
                    new BScroll(this.$refs.indexContent,{
                        scrollY:true,
                        bounce: false
                    })
                    //轮播图滑动
                    new Swiper ('.swiper-container', {

                        // 如果需要分页器        
                        pagination: '.swiper-pagination',        
                        // 如果需要前进后退按钮        
                        nextButton: '.swiper-button-next',
                        prevButton: '.swiper-button-prev',       
                        // 如果需要滚动条        
                        scrollbar: '.swiper-scrollbar',
                    })
            })
        },
        methods:{
            ...mapActions([GETINDEX]),
            // 判断页面滑动
            gotomove(){
                this.showAdvertisement = false
            },
            // 点击关闭广告
            closeAdvertisement(){
                this.showAdvertisement = false
            },
            isShowMask(){
                this.showMask = !this.showMask
                console.log(!this.showMask);
                
            }
        },
        computed:{
            ...mapState(["indexData"]),
            // 截取的数组
            categoryListFirst(){
                    return this.indexData.categoryHotSellModule&& this.indexData.categoryHotSellModule.categoryList.slice(0,2)
            },
            categoryListElse(){
                    return  this.indexData.categoryHotSellModule&& this.indexData.categoryHotSellModule.categoryList.slice(2,10)
            }
        }

    }
</script>

<style lang="stylus" scoped>
    .indexWrap
        width 100%
        // 全局遮罩
        .Mask
            width 100%
            height 100vh
            background rgba(0,0,0,0.5)
            position fixed
            top 200px
            left 0 
            bottom 0 
            right 0
            overflow auto
            z-index 2
        .guanggao
            width 100%
            height 100px
            background rgba(0,0,0,.7)
            position relative
            .iconfont
                top 0
                left 0
                position absolute
                font-size 30px
                color white
            .guanggaoLogo
                width 100%
                height 100%
                float right

        // 头部header
        .indexHeader
            width 100%
            height 100px
            margin-bottom 20px
            .header-top
                display flex
                width 100%
                height 50px
                justify-content space-around
                align-items center
                background white
                .logo
                    width 140px
                    height 100%
                .textInput
                    width 470px
                    height 100%
                    border-radius 10px
                    background #eee
                    display flex
                    justify-content center
                    align-items center
                    .iconfont
                        font-size 30px
                        margin-right 10px
                        margin-left 70px
                    .Input
                        background #eee
                        border none
                        font-size 30px
                .btnHeader
                    width 80px
                    height 50px
                    box-sizing border-box
                    border 1px solid red
                    line-height 50px 
                    border-radius 5px
                    font-size 30px
                    color red
                    text-align center
            .header-bottom
                width 100%
                height 50px
                position relative
                .scrollWrap
                    width 100%
                    height 100%
                    .scrollContent
                        height 50px
                        white-space nowrap
                        background white
                        display: inline-block;
                        padding 0
                        overflow hidden
                        font-size 27px
                        .scrollItem
                            display: inline-block;
                            height 30px
                            list-style none
                            margin 0 20px
                            position relative
                            &.active::after
                                content ""
                                width 100%
                                height 2px
                                position absolute
                                background  black
                                bottom -10px
                                left 0px
                .headerMenu
                    width 100px
                    height 100%
                    background white
                    position absolute
                    box-shadow -30px 5px 20px rgba(255,255,255,.9)
                    right 0px
                    top 10px
                    z-index 3
                    text-align center
                    line-height 75px
                    .iconfont
                        font-size 35px
                        color black
                .MenuMask
                    width 100%
                    height 300px
                    background white
                    position absolute
                    left 0
                    top 0
                    z-index 2
        // 内容区 
        .indexContent
            width 100%
            height 100vh
            overflow hidden
            .indexScroll
                width 100%
                //轮播图
                .lunbo
                    height 300px
                    margin-top 20px
                    margin-bottom 20px
                    .swiper-container
                        .swiper-wrapper
                            height 300px
                            .swiper-slide 
                                img 
                                    max-width 100%
                //三个广告栏                    
                .billboard
                    width 100%
                    height 40px
                    display flex
                    justify-content space-around
                    align-items center
                    margin-bottom 10px
                    .boardItem
                        display flex
                        align-items center
                    .iconfont
                        color red
                        font-size 30px
                    .text
                        font-size 26px
                // 10个商品
                .cateList
                    width 100%
                    display flex
                    flex-wrap wrap
                    .cateItem
                        width 20%
                        height 150px
                        margin-bottom 20px
                        display flex
                        flex-direction column
                        justify-content center
                        align-items center
                        img
                            width 80%
                            height 80%
                        .cateTitle
                            font-size 25px
                //广告大图
                .advertisement
                    width 100%
                    height 240px
                    margin-top 30px
                    border-bottom 15px solid #eee
                    img
                        width 100%
                        height 100%
                //新人专享
                .newComer
                    width 95%
                    overflow hidden
                    margin 0 auto
                    .newTitle
                        width 100%
                        height 90px
                        text-align center
                        line-height 90px
                        font-size 32px
                    .newContent
                        width 100%
                        height 440px
                        display flex
                        justify-content space-around
                        background white
                        padding-bottom 20px
                        border-bottom 15px solid #eee
                        .newLeft
                            width 48%
                            height 100%
                            background #F9E9CF
                            position relative
                            p
                                margin-left 20px
                                font-size 30px
                            img
                                position absolute
                                top 70px
                                left 0 
                                bottom 0
                                right 0
                                margin auto
                                width 70%
                                height 70%
                        .newRight
                            width 50%
                            height 100%
                            display flex
                            background white
                            flex-direction column
                            justify-content space-between
                            .newTop
                                width 100%
                                height 49%
                                background #FBE2D3
                                background-repeat no-repeat
                                background-position-x 100px
                                background-image url("../../common/images/personal/vip-card-bg.png") 
                                padding-left 30px
                            .newBottom
                                width 100%
                                height 49%
                                background #FFECC2
                                padding-left 30px
                                background-repeat no-repeat
                                background-position-x 100px
                                background-image url("../../common/images/personal/vip-card-bg.png")
                                .yuan
                                    color white
                                    padding 4px
                                    background-color rgba(0,0,0,.4)
                // 类目热销榜
                .hotList
                    width 95%
                    height 550px
                    margin 20px auto
                    display flex
                    flex-direction column
                    justify-content space-around
                    padding-bottom 10px
                    border-bottom 15px solid #eee
                    .hotTitle
                        font-size 32px
                    .hotMain
                        width 100%
                        height 80%
                        display flex
                        flex-wrap wrap
                        justify-content space-between
                        .hotContent
                            width 24%
                            height 30%
                            background #F5F5F5
                            box-sizing border-box
                            margin 5px 0
                            display flex
                            flex-direction column
                            align-items center
                            .contentTtile1
                                font-size 32px
                            img 
                                width 55%
                                height 80%
                            &.popular
                                width 49%
                                height 40%
                                background #EBEFF6
                                margin 0
                                flex-direction row
                                justify-content space-around
                                align-items center
                                .bgImg
                                    width 55%
                                    height 100%
                
                //     background black
                //     .down
                //         width 100%
                //         height 500px
                // .textHieght
                //     width 100%
        .footBlack
            width 100%    
            height 500px
            background #414141
            display flex
            flex-direction column
            .downLoad
                width 50%
                height 50px
                margin 100px auto 0
                display flex
                align-items center
                justify-content space-around
                color white
                font-size 25px
                .downApp
                    padding 10px 
                    border 1px solid white
                .downPc
                    padding 10px
                    border 1px solid white
            .copy
                text-align center
                color #eee
                font-size 20px
    .greassssss
        color white
</style>