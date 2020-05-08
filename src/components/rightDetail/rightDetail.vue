<template>
<!-- 右侧详情布局 -->
    <div class="detailWrap" ref="detailWrap"  >
        <!-- 内芯,scroll容器 -->
        <!-- 问题就出在v-if这里，在mounted（挂载时执行）函数执行时，由于我的keyword在挂载时为空，所以该节点就不会被渲染出来，自然就找不到节点了。
这时候可以将v-if改为v-show就行了，v-show会渲染它，但是不显示 -->
        <div class="detailMain" v-show="categoryObj &&categoryObj.id">
            <div v-if="categoryObj &&categoryObj.id">
                <!-- 顶部IMG -->
                <img class="detailImg" :src="categoryObj.titleImgUrl" alt="">
                <!-- 中间flex布局没有title小标题的 -->
                <div class="detail-flex" v-if="!isTitle">
                    <div class="detailItem" v-for="(item,index) in categoryObj.categoryList[0].cateList" :key="index">
                        <img class="itemImg" :src="item.wapBannerUrl" alt="">
                        <div class="itemName">{{item.name}}</div>
                    </div>
                </div>
                <!-- 中间有小标题的 -->
                <template v-else>
                    <div class="detail-flex2"  v-for="(hasTitleItem,index) in computedData " :key="index">
                        <div class="title">{{hasTitleItem.titleName}}</div>
                        <!-- 包块 -->
                        <div class="box">
                            <div class="detailItem2" v-for="(item,index2) in hasTitleItem.cateList" :key="'1'+index2">
                                <!-- img -->
                                <img class="itemImg2" :src="item.wapBannerUrl" alt="">
                                <div class="itemName2">{{item.name}}</div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
// 引入滑屏插件
import BScroll from 'better-scroll'
    export default {
        name:"rightDetail",
        data(){
            return{
            }
        },
        props:{
            leftItemId:Number,
            leftIndex:Number,
            categoryObj:Object,
        }, 
        computed:{
            computedData(){
                let result= []

                if(this.categoryObj && this.categoryObj.subCateList){
                    // this.isTitle = true
                    result =  this.categoryObj.subCateList
                }
                else if (this.categoryObj && !this.categoryObj.subCateList){
                    // this.isTitle=false
                    result=  this.categoryObj
                }
                return result
            },
            isTitle(){
                let result = false
                if(this.leftIndex > 3){
                    result = true
                }
                return result
            }
        },
        mounted(){
            this.$nextTick(()=>{
                    new BScroll(this.$refs.detailWrap,{
                        scrollY:true,
                    })
            })
        },


    }
</script>

<style lang="stylus" scoped>
        .detailWrap
            width 100%
            height 100vh
            overflow hidden
            .detailMain
                width 100%
                padding-bottom 200px
                .detailImg
                    width 100%
                    height 200px
                .detail-flex
                    margin-top 25px    
                    width 100%
                    display flex
                    flex-wrap wrap
                    justify-content space-between
                    position relative
                    &:after
                        content ""
                        height 0
                        width 30%
                    .detailItem
                        width 30%
                        height 180px
                        margin-bottom 30px
                        .itemImg
                            width 100% 
                            height 80%
                        .itemName
                            text-align center
                            font-size 24px
                    .detailTitle
                        position absolute
                        font-size 30px
                        top 0
                        left 0
                .detail-flex2
                    width 100%
                    .title
                        width 100%
                        height 50px
                        line-height 50px
                        padding 20px 0 10px 0
                        font-size 28px
                        font-weight bold
                        border-bottom 1px solid #eee
                    .box
                        width 100%
                        display flex    
                        flex-wrap wrap
                        justify-content space-between
                        &:after
                            content ""
                            height 0
                            width 30%
                        .detailItem2
                            width 30%
                            height 180px
                            margin-bottom 30px
                            .itemImg2
                                width 100% 
                                height 80%
                            .itemName2
                                text-align center
                                font-size 26px
</style>