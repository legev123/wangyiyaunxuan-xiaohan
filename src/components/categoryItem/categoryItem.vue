<template>
    <!-- index的 子路由页面 categoryItem -->
    <div class="categorScroll" ref="categorScroll">
        <div class="categoryWrap">
            <!-- swiper轮播图 -->
            <div class="swiper-container" ref="swiperContainer">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/5fb76a0e4e6ba8fd21d9936ef1b25072.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></div>
                    <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/5fb76a0e4e6ba8fd21d9936ef1b25072.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></div>
                    <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/5fb76a0e4e6ba8fd21d9936ef1b25072.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
                <!-- 如果需要滚动条 -->
                <div class="swiper-scrollbar"></div>
            </div>
            <!-- 口碑好物 -->
            <div class="categoryMain"  v-if="indeCateListObj">
                <!-- 头部样式 -->
                <div class="categoryHeader">
                    <!-- 口碑好物-->
                    <div class="headerTtile">{{indeCateListObj.category.name}}</div>
                    <div class="headerDesc">{{indeCateListObj.category.frontName}}</div>
                </div>

                <!-- flex 货架-->
                <div class="goodsGrid">
                    <ul class="goodList">
                        <li class="goodItem" v-for="(item,index) in indeCateListObj.itemList" :key="index">
                            <!-- img -->
                            <img :src="item.listPicUrl" class="itemImg" alt="">
                            <!-- 活动标题栏 -->
                            <div class="activity">
                                <div class="activityTitle">
                                    <!-- 标题选择性 -->
                                     <p class="">{{item.promTag}}</p>    
                                     <p class="">￥{{item.retailPrice}}</p>    
                                </div>
                                <span class="activityTime">{{item.simpleDesc}}</span>
                            </div>
                            <div class="itemName">{{item.name}}</div>
                            <div class="price">
                                <!-- 特价选择性 -->
                                <span class="currentPrice" v-show="item.retailPrice">￥{{item.retailPrice}}</span>
                                <span class="originaPrice" v-show="item.counterPrice">￥{{item.counterPrice}}</span>
                            </div>
                            <!-- 选择性 -->
                            <span class="specialPrice">特价</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 引入swiper
import Swiper from "swiper"
//引入滑动
import BScroll from 'better-scroll'
//请求数据
import {GETINDEXCATELIST} from "@/store/mutation_types.js"
import {mapState,mapActions} from "vuex"

    export default {
        name:"categoryItem",
        props:{
            id:String
        },
        data(){
           return{
                // cateList:[]
           } 
        },
        async mounted(){
            await this[GETINDEXCATELIST](),
            //竖向滑屏
            new BScroll(this.$refs.categorScroll,{
                        scrollY:true,
                        bounce: false,
            })
            // 轮播图
            new Swiper (this.$refs.swiperContainer, {
                // 如果需要分页器
                pagination: {
                el: '.swiper-pagination',
                },
                // 如果需要滚动条
                scrollbar: {
                el: '.swiper-scrollbar',
                }
            }) 
            console.log(this.id);
                   
        },
        methods:{
            ...mapActions([GETINDEXCATELIST]),
            
        },
         computed:{
            ...mapState(["cateList"]),
            indeCateListObj(){
                return this.cateList[this.id - 1]
            }
        }

    }
</script>

<style lang="stylus" scoped>

.categorScroll
    width 100%
    height 100vh
    overflow hidden
    .categoryWrap
        width 100%
        .swiper-container
            height 320px
            border-bottom 10px solid #ccc
            .swiper-wrapper
                .swiper-slide
                    img 
                        width 100%
                        height 100%
    .categoryMain
        width 100%
        padding-bottom 280px
        .categoryHeader
            height 120px
            display flex
            flex-direction column
            align-items center
            justify-content center
            .headerTtile
                font-size 35px
            .headerDesc
                font-size 25px
                color #999
        .goodsGrid
            width 95%
            margin 20px auto 0
            .goodList
                width 100%
                display flex
                flex-wrap wrap
                justify-content space-around
                list-style none
                padding 0
                &:after
                    content:""
                    width 48%
                    height 0
                .goodItem
                    width 48%
                    height 550px
                    background white
                    margin-bottom 10px
                    .itemImg
                        width 100%
                        height 58%
                        display block
                    .activity
                        width 100%
                        height 60px
                        background #FF8C00
                        position relative
                        .activityTitle
                            width 80px
                            height 65px
                            background 	#FF7F50
                            font-size 10px
                            text-align center
                            color white
                            line-height 20px
                            font-weight 700
                            margin 0
                            padding 5px 10px 0
                            border-radius 10px
                            position absolute
                            bottom 0
                            left 0
                            
                        .activityTime
                            padding-left 120px
                            line-height 60px
                            font-size 20px
                    .itemName
                        margin 7px 0
                        font-size 28px
                    .price
                        font-size 28px
                        color red
                        margin-bottom 3px
                        .originaPrice
                            color 	#A9A9A9
                            text-decoration line-through
                    .specialPrice
                        border 1px solid red
                        padding 0 10px
                        border-radius 5px    


</style>