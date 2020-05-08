<template>
    <div class="detailWrap">
        <div></div>
    </div>
</template>

<script>
import {mapState} from "vuex"
    export default {
        name:"rightDetail",
        props:{
            leftItemId:Number,
            leftIndex:Number,
            categoryObj:Object
        }, 
        computed:{
            ...mapState["categoryData"]
        },
        mounted(){
            
        }
    }
</script>

<style lang="stylus" scoped>
        .detailWrap
            width 100%
            height 100vh
            background skyblue
</style>