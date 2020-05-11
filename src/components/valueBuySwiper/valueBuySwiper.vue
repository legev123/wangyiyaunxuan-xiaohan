<template>
    <div v-if="valueBuyNavObj && valueBuyNavObj.data.navList">
        <van-swipe class="vant-Wrap" :loop="false" :width="90" indicator-color="#FF0000" > 
                <van-swipe-item class="vant-Item" v-for="(navItem,index) in navListArr" :key="index" >
                    <div class="itemTop" v-for="(item, index) in navItem" :key="index">
                        <img class="bgImg" :src="item.picUrl" alt="">
                        <div class="name">{{item.mainTitle}}</div>
                        <div class="desc">{{item.viceTitle}}</div>
                    </div>
                </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>

import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

import _ from "lodash"
Vue.use(Swipe)
Vue.use(SwipeItem)
    export default {
        name:"valueBuySwiper",
        data(){
            return{
                
            }
        },
        created(){
            console.log(this.navListArr,"111111");
        },
        props:{
            valueBuyNavObj:Object 
        },

        computed:{
            navListArr(){
                let result = []
                if(this.valueBuyNavObj && this.valueBuyNavObj.data.navList){
                    result = _.chunk( this.valueBuyNavObj.data.navList,2)
                }
                return result
        }
    }
    }
</script>

<style lang="stylus" scoped>
.vant-Wrap
    height 550px
    background white
    .vant-Item
        width 100%
        height 90%
        box-sizing border-box
        .itemTop
            width 100%
            height 50%
            box-sizing border-box
            display flex
            justify-content space-around
            align-items center
            flex-direction column
            .bgImg
                width 120px
                height 120px
                border-radius 50%
                margin-top 20px
            .name
                font-size 28px
                font-weight 700
            .desc
                font-size 20px
                color #ccc
</style>