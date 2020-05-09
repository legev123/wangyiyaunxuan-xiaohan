// import local from '../../utils/local'
export default {
  name:'valueBuy',
  api:{
    // 值得买--NAV导航
    getValueBuyNavData:{
      url:'/know/navWap.json',
      method:"get",
      corsUrl:"/topic/v1"
    },
    //值得买--瀑布流首屏
    getValueBuyFirstScreen:{
      url:'/find/recManual.json',
      method:"get",
      corsUrl:"/topic/v1"
    },
    //值得买-- 触底加载,备用
    // getValueBuyBottomloading:{
    //   url:'find/recAuto.json?page=1&size=1',
    //   method:"get",
    //   corsUrl:"/topic/v1"
    // },
  }
}