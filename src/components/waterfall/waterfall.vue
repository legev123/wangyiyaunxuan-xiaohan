<template>
<div id="content">
    <!-- <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData"></vue-waterfall-easy> -->
</div>
</template>

<script>
// import vueWaterfallEasy from  "vue-waterfall-easy"
     export default {
      name:"valueBuySwiper",
       components: {
        // vueWaterfallEasy
      },
       data() {
    return {
      imgsArr: [],
      group: 0, // 当前加载的加载图片的次数
    }
  },
  methods: {
    // getData() {
    //   this.$http.post('http://119.23.71.203:8080/edu/image/eduschoolimageinfo/queryPageList', { 'companyKey': "1" }).then(res => {
    //       this.group++;
    //       if (this.group === 10) {
    //         // 模拟已经无新数据，显示 slot="waterfall-over"
    //         this.$refs.waterfall.waterfallOver()
    //         return
    //       }
    //       var dataList = res.data.data.dataList;
    //       console.log(dataList);
    //       console.log(Array.isArray(dataList));
    //       for (let v of dataList) {
    //         var picObj = {
    //           "src": "./..",
    //           "href": "",
    //           "info": ""
    //         }
    //         picObj["src"] += v.imageUrl;
    //         picObj["href"] = v.imageKey;
    //         picObj["info"] = v.imageName;
    //         this.imgsArr = this.imgsArr.concat(picObj);
    //       }
    //     }).catch((res) => {
    //       console.log(res);
    //     });
    //   }
  },
  created() {
    // this.getData();
    // 删除某个卡片
    // setTimeout(()=>{
    //   this.imgsArr.splice(1,1)
    // },2000)
  },

    }
</script>

<style lang="stylus" scoped>
  // #content
  //     position absolute  
  //     top 32px
  //     bottom 0px
  //     width 100%
</style>