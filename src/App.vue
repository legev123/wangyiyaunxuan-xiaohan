<template>
  <div id="app">
        <router-view></router-view>
        <v-footer></v-footer>
  </div>
</template>

<script>
  import footer from "@/components/indexFooter/indexFooter.vue"
export default {
  name: 'App',
  components: {
       "v-footer":footer
  }
  
}
</script>

<style  lang="stylus">
body,#app{
  width 100%
  height 100%
  margin 0
  padding 0
  overflow hidden
}
 
</style>
