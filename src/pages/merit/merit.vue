<template>
    <!-- 值得买外包含快 -->
    <div class="meritWrap">
        <!-- 头部导航栏 -->
        <div class="headerMerit">
            <!-- 头部内芯 -->
            <div class="header_Main">
                <div class="iconfont icon-zhuye"></div>
                <div class="middle">值得买</div>
                <div class="right">
                    <div class="iconfont icon-Group-"></div>
                    <div class="iconfont icon-cart-full"></div>
                </div>
            </div>
        </div>

        <!-- 滑屏区域 -->
        <div class="scrollWrap" ref="scrollWrap">
            <div class="scrollContainer">
                <!-- 顶部带背景 -->
                <div class="scrollHeader">
                    <img class="titleImg" src="@/common/images/valueBuyTitle.png" alt="">
                    <span>严选好物，用心生活</span>
                    <img class="headerBg" src="@/common/images/valueBuyBg.png" alt="">
                </div>
                <!-- swiper区域*****组件 -->
                <div class="swiperVant">
                    <v-valueSwiper :valueBuyNavObj="valueBuyNavObj"></v-valueSwiper>
                </div>
                <!-- 瀑布流数据 ***组件-->
                <v-waterfall class="waterfall"></v-waterfall>
                
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll"
import valueSwiper from "@/components/valueBuySwiper/valueBuySwiper.vue"
import waterfall from "@/components/waterfall/waterfall.vue"
// NAV请求
import {mapActions,mapState} from "vuex"
import {VALUEBUYNAVDATA} from "@/store/mutation_types";
    export default {
        name:"merit",
        components:{
            "v-valueSwiper":valueSwiper,
            "v-waterfall":waterfall
        },
        methods:{
            ...mapActions([VALUEBUYNAVDATA])
        }   
        ,
        async mounted(){
            // 滑屏
            new BScroll(this.$refs.scrollWrap,{
                scrollY:true,
                bounce:false
            })
            //nav导航栏数据
            await this[VALUEBUYNAVDATA]()
        },
        computed:{
            ...mapState(["valueBuyNavObj"])
        }
    }
</script>

<style lang="stylus" scoped>
    .meritWrap
        width 100%
        height calc(100vh - 100px)
        background orange
        .headerMerit
            width 100%
            height 97px
            background #fafafa
            border-bottom 3px solid #999
            .header_Main
                width 95%
                height 100%
                margin 0 auto
                display flex
                justify-content space-between
                align-items center
                .iconfont
                    color #717171
                    font-size 50px
                .middle
                    font-size 40px
                    color black
                .right
                    width 120px
                    height 100%
                    display flex
                    justify-content space-between
                    align-items center
        .scrollWrap
            width 100%
            height calc(100vh - 200px)
            overflow hidden
            .scrollContainer
                width 100%
                .scrollHeader
                    width 100%
                    height 500px
                    background orange
                    position relative
                    z-index -1
                    .headerBg
                        width 100%
                        height 100%
                        display block
                    .titleImg
                        position absolute
                        top 65px
                        left 10px
                        width 130px
                        height 70px
                    span 
                        position absolute
                        top 85px
                        left 150px
                        font-size 30px
                        color white
                .swiperVant
                    width 95%
                    height 540px
                    background white
                    margin -350px auto 0
                .waterfall
                    width 95%
                    height 2000px
                    background #eee
                    margin 30px auto 0
</style>