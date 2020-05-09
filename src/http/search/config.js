// import local from '../../utils/local'
export default {
  name:'search',
  api:{
    // 搜索--页面初始化显示
    getSearchViewInit:{
      url:'/init.json',
      method:"get",
      corsUrl:"/xhr/search"
    },
    // 搜索相关数据``关键字搜索,传参 备用
    // getSearchKeyWord:{
    //   url:'/searchAutoComplete.json',
    //   method:"get",
    //   corsUrl:"/xhr/search"
    // },
  }
}