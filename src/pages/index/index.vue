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
            <div class="header-top" @click="gotoSearch('/search')">
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
                        <li class="scrollItem" :class="{active:navId === 0}" @click="handleCheck(0,0)">推荐</li>
                            <li class="scrollItem" 
                                @click="handleCheck(kingKongItem.L1Id,index+1)"
                                :class="{active: kingKongItem.L1Id === navId}"
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
                    <div class="maskMain" v-if="indexData.kingKongModule && indexData.kingKongModule.kingKongList">
                        <div class="maskItem active">
                            <div class="maskOption">推荐</div>
                        </div>
                        <div class="maskItem"  v-for="(kingKongItem, index) in indexData.kingKongModule.kingKongList" :key="index">
                             <div class="maskOption">{{kingKongItem.text}}</div>
                        </div>
                         <div class="maskItem last">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 首页推荐导航 -->
        <v-recommend :navId="navId" ></v-recommend>
        <router-view></router-view>
    </div>
</template>

<script>
// import axios from "@/utils/http.js"
// 引入滑屏插件
import BScroll from 'better-scroll'
import {GETINDEX} from "@/store/mutation_types";
import recommend from "@/components/recommend/recommend.vue"

import {mapActions,mapState} from "vuex";
    export default {
        name:"index",
        components:{
            "v-recommend":recommend
        },
        data(){
            return {
                showAdvertisement:true,
                showMask:false,
                navId:0,
                navIndex:0
            }
        },
        async mounted(){
            //测试axios请求
            await this[GETINDEX]()
             this.$nextTick(()=>{
                    // 头部NAV滑屏
                    new BScroll(this.$refs.scrollWrap,{
                        scrollX:true,
                         click:true
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
            // 展示蒙板
            isShowMask(){
                this.showMask = !this.showMask
                console.log(!this.showMask);
                
            },
            // nav点击切换active
            handleCheck(id,index){
                this.navId = id
                this.navIndex = index
                this.$router.replace(`/index/categoryItem/${index}`)
            },
            //跳转至搜索页
            gotoSearch(path){
                this.$router.push(path)
            }
        },
        computed:{
            ...mapState(["indexData"])
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
            margin 20px 0
            padding 0
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
                                background  red
                                bottom -10px
                                left 0px
                .headerMenu
                    width 100px
                    height 100%
                    background white
                    position absolute
                    box-shadow -30px 5px 20px rgba(255,255,255,.9)
                    right 0px
                    top 20px
                    z-index 3
                    text-align center
                    line-height 75px
                    .iconfont
                        font-size 35px
                        color black
                .MenuMask
                    width 100%
                    height 400px
                    background white
                    position absolute
                    left 0
                    top 0
                    z-index 2
                    .maskTitle
                        font-size 32px
                        margin-top 30px
                        margin-left 30px
                    .maskMain
                        width 95%
                        height 320px
                        margin 10px auto 0
                        display flex
                        flex-wrap wrap
                        justify-content space-between
                        align-items center
                        .maskItem
                            width 24%
                            height 50px
                            box-sizing border-box
                            border 1px solid #ccc
                            text-align center
                            line-height 50px
                            font-size 28px
                            &.active
                                border 1px solid red
                                color red
                            &.last
                                border none
    .greassssss
        color white
</style>