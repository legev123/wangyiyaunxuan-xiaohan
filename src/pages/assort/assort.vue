<template>
    <!-- assort页面 -->
    <div class="assortWrap">
        <div class="assortMain">
            <!-- 头部假搜索 -->
            <div class="headerSearch" @click="gotoSearch('/search')">
                <span class="iconfont icon-Group-"></span>
                <span class="searchName">搜索商品, 共25499款好物</span>
            </div>
               

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
                            v-if="categoryObj"
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
                leftItemId:11,
                leftIndex:0
            }
        },
        async mounted(){
            await this[GETASSORTCATELIST]()
            // let data2 = await this.$http({
            //     url:"https://m.you.163.com/xhr/search/init.json",
            //     method:"get"
            //     })
            // console.log(data2);
            
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
            },
            //跳转至搜索页
            gotoSearch(path){
                this.$router.push(path)
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
                        margin 0
                        .leftItem
                            position relative
                            width 90%
                            height 80px
                            margin 10px auto
                            line-height 80px
                            text-align center
                            border-bottom 1px solid #999
                            &.active
                                color red
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