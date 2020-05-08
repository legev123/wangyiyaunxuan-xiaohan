<template>
    <div class="searchWrap">
        <!-- 真正搜索,组件 判断显示 -->
        <div class="trueSearch">
            <div class="trueSearch-box">
                <div class="iconfont icon-Group-"></div>
                <input type="text" class="inputSearch" placeholder="免费试用">
            </div>
            <div class="cancle" @click="goback">取消</div>
        </div>
        <!-- 默认热门展示栏 -->
        <div class="hotSearchWrap">
            <!-- 内芯 -->
            <div class="hotSearchMain">
                <!-- 标题 -->
                <div class="title">热门搜索</div>
                <!-- 热门内容 -->
                <div class="hotContent-box">
                    <div class="hotItem">杭州学生口罩</div>
                    <div class="hotItem">穿搭</div>
                    <div class="hotItem">杭州学生口罩</div>
                    <div class="hotItem">懒人瘦身66折</div>
                    <div class="hotItem">杭州</div>
                    <div class="hotItem">杭州学生</div>
                    <div class="hotItem">杭州学生口罩</div>
                    <div class="hotItem">穿搭</div>
                    <div class="hotItem">杭州学生口罩</div>
                    <div class="hotItem">懒人瘦身66折</div>
                    <div class="hotItem">杭州</div>
                    <div class="hotItem">杭州学生</div>
                </div>
            </div>
        </div>
        <div class="colorFix"></div>
    </div>
</template>

<script>
    export default {
        name:"search",
        methods:{
            goback(){
                this.$router.back()
            }
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
                            border 1px solid red
            .colorFix
                width 100%
                height 100%
                background #eee
</style>