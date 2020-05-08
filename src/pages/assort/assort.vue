<template>
    <!-- assort页面 -->
    <div class="assortWrap">
        <div class="assortMain">
            <!-- 头部假搜索 -->
            <div class="headerSearch">
                <span class="iconfont icon-Group-"></span>
                <span class="searchName">搜索商品, 共25499款好物</span>
            </div>
                <!-- 真正搜索,组件 v-show判断显示 -->
            <!-- <div class="trueSearch">
                <div class="trueSearch-box">
                    <div class="iconfont icon-Group-"></div>
                    <input type="text" class="inputSearch" placeholder="免费试用">
                </div>
                <div class="cancle">取消</div>
            </div> -->

            <!--下半部分-->
            <!-- assort-cateContainer -->
            <div class="cateContainer">
                <!-- 左侧bs滚动条 -->
                <div class="listBscroll" ref="bsWrapper">
                        <ul class="leftContent">
                            <li    class="leftItem" 
                                    :class="{active:leftItemId === assortObj.id}"
                                    v-for="(assortObj,index) in assortCateList" 
                                    :key="index"
                                    @click="handleChangeList(assortObj.id,index)"
                            >
                                {{assortObj.name}}
                            </li>
                        </ul>
                </div>
                <!-- 右侧bs滚动条 -->
                <v-rightdetail
                            v-if="this.assortCateList"
                            class="detailBscroll" 
                            :leftItemId="leftItemId" 
                            :leftIndex="leftIndex"
                            :categoryObj="categoryObj"
                ></v-rightdetail>
            </div>
             <router-view></router-view>
        </div>
        
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import rightdetail from "@/components/rightDetail/rightDetail.vue"
import {mapActions,mapState} from "vuex"
import {GETASSORTCATELIST} from "@/store/mutation_types";
    export default {
        name:"assort",
        components:{
            "v-rightdetail":rightdetail
        },
        data(){
            return{
                leftItemId:0,
                leftIndex:0
            }
        },
        async mounted(){
            await this[GETASSORTCATELIST]()
             this.$nextTick(()=>{
                    // 左半部分滑屏
                    new BScroll(this.$refs.bsWrapper,{
                        scrollY:true,
                         click:true,
                         bounce:true
                    })
            })
            
        },
        methods:{
            ...mapActions([GETASSORTCATELIST]),
            // 点击切换ID
            handleChangeList(id,index){
                console.log(id,index);
                // 修改ID
                this.leftItemId = id
                this.leftIndex = index
                //修改动态路由
                this.$router.replace(`/assort/rightDetail/${id}`)
            }
        },
        computed:{
            ...mapState(["assortCateList"]),
            //传递给rightDetail的数据
            categoryObj(){
                return this.assortCateList&& this.assortCateList[this.leftIndex]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .assortWrap
        width 100%
        height 100%
        background white
        padding-top 10px
        .assortMain
            width 93%
            margin 0 auto
            height 100%
            .headerSearch
                margin 5px 0
                width 100%
                height 60px
                background #ededed
                line-height 60px
                text-align center
                color #666
                border-radius 10px
                font-size 27.5px
                .iconfont
                    font-size 27.5px
                    margin-right 10px
            .trueSearch
                width 100%
                height 60px
                display flex
                justify-content space-around
                align-items center
                .trueSearch-box
                    display flex
                    align-items center
                    width 88%
                    height 100%
                    background #ededed 
                    .iconfont
                        font-size 27.5px
                        background #ededed
                        margin-right 10px
                        margin-left 20px
                    .inputSearch
                        border none
                        width 550px
                        height 50px
                        background #ededed
                        outline:none
                .cancle
                    font-size 30px
            
            .cateContainer
                width 100%
                height 100%
                margin-top 50px
                display flex
                justify-content space-between
                .listBscroll
                    width 25%
                    height 100vh
                    padding-right 10px
                    border-right 1px solid #ccc
                    .leftContent
                        width 100%
                        list-style none
                        padding 0
                        .leftItem
                            position relative
                            width 90%
                            height 80px
                            margin 10px auto
                            line-height 80px
                            text-align center
                            border-bottom 1px solid #999
                            &.active:after
                                content ""
                                width 6px
                                height 70%
                                position absolute
                                left -35px
                                top 16px
                                margin-top 0
                                background red
                .detailBscroll
                    width 70%
                    height 100vh
</style>    