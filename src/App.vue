<template>
  <div id="app">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
        <v-footer v-show="$route.path !== '/search'"></v-footer>
  </div>
</template>

<script>
  import footer from "@/components/indexFooter/indexFooter.vue"
export default {
  name: 'App',
  components: {
       "v-footer":footer
  },
   mounted(){
    let result = this.$route.path
    console.log(result);
  }
  
}
</script>

<style  lang="stylus">
html,body,#app{
  width 100%
  height 100%
  margin 0
  padding 0
  overflow hidden
}
 
</style>
