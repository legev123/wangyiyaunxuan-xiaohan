<template>
    <div class="searchWrap" >
        <!-- 真正搜索,组件 判断显示 -->
        <div class="trueSearch"  v-if="searchViewInitData && searchViewInitData.data">
            <div class="trueSearch-box">
                <div class="iconfont icon-Group-"></div>
                <input type="text" class="inputSearch" :placeholder="searchViewInitData.data.defaultKeyword.keyword" v-model.trim="inputSearch" @input="getInputValue(inputSearch)">
                <div class="cancleKeyWord " v-show="inputSearch" @click="inputSearch=''">x</div>
            </div>
            <div class="cancle" @click="goback">取消</div>
        </div>
        <!-- 默认热门展示栏 -->
        <template  v-if="searchViewInitData && searchViewInitData.data">
            <div class="hotSearchWrap" v-if="!inputSearch">
                <!-- 内芯 -->
                <div class="hotSearchMain">
                    <!-- 标题 -->
                    <div class="title">热门搜索</div>
                    <!-- 热门内容 -->
                    <div class="hotContent-box">
                        <div class="hotItem" 
                                v-for="(item, index) in searchViewInitData.data.hotKeywordVOList" 
                                :key="index"
                                :class="{active :item.highlight === 1}"
                        >
                            {{item.keyword}}
                        </div>
                    </div>
                </div>
            </div>
            <!-- 输入时显示的窗口 -->
            <div class="searchData-box" v-else>
                <!-- 根据输入内容显示对应的关键词数据 -->
                <div class="keyMain">
                    <div class="keyWordItem" v-for="(item, index) in searchKeyWordData.data" :key="index">
                        <div class="keyWordName">{{item}}</div>
                        <div class="iconfont icon-arrow-right"></div>
                    </div>
                </div>
            </div>
        </template>
        <div class="colorFix" v-if="!inputSearch"></div>
    </div>
</template>

<script>
import {SEARCHVIEWINIT,SEARCHKEYWORD} from "@/store/mutation_types";
import {mapActions,mapState} from "vuex";
    export default {
        name:"search",
        data(){
            return{
                inputSearch:""
            }
        },
        methods:{
            ...mapActions([SEARCHVIEWINIT,SEARCHKEYWORD]),
            goback(){
                this.inputSearch= ""
                this.$router.back()
            },
            async getInputValue(value){
                if(!value){
                    return
                }
                this.inputSearch=value
                await this[SEARCHKEYWORD]({
                    keywordPrefix: value
                })
            }
        },
        async mounted(){
                await this[SEARCHVIEWINIT]()
                
        },
        
        computed:{
            ...mapState(["searchViewInitData","searchKeyWordData"]),
        }
    }
</script>

<style lang="stylus" scoped>
        .searchWrap
            width 100%
            height 100%
            background white
            .trueSearch
                width 97%
                padding-top 10px
                margin 0px auto
                height 60px
                display flex
                justify-content space-around
                align-items center
                background white
                .trueSearch-box
                    display flex
                    align-items center
                    width 88%
                    height 100%
                    position relative
                    .cancleKeyWord
                        position absolute
                        right 20px
                        top 15px
                        width 30px
                        height 30px
                        background #ccc
                        font-size 23px
                        color white
                        border-radius 50%
                        text-align center
                        line-height 30px
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
            .hotSearchWrap
                width 100%
                height 450px
                background white
                .hotSearchMain
                    width 98%
                    height 100%
                    margin 30px auto
                    .title
                        font-size 32px
                        color #999
                        margin 0 0 10px 10px
                    .hotContent-box
                        width 96%
                        margin 0 auto
                        height 100%
                        .hotItem
                            float left
                            margin 20px 15px
                            font-size 26px
                            padding 5px 13px
                            display: block
                            border 1px solid #ccc
                            &.active
                                border 1px solid red
                                color red
            .searchData-box
                width 100%
                height 100vh
                margin-top 15px
                background #eee
                .keyMain
                    width 100%
                    background white
                    .keyWordItem
                        width 95%
                        height 90px
                        margin 0 auto
                        font-size 30px
                        box-sizing border-box
                        display flex
                        justify-content space-between
                        color black
                        align-items center
                        border-bottom 1px solid #ccc
                        &:last-child
                            border-bottom none
                        .iconfont
                            color gray
                            font-size 45px
            .colorFix 
                width 100%
                height 100%
                background #eee

</style>