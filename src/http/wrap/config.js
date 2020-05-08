// import local from '../../utils/local'
export default {
  name:'wrap',
  api:{
    getIndexData:{
      url:'/index',
      method:'get',
      corsUrl:'/4001'
    },
    getCateList:{
      url:'/indexCateList',
      method:'get',
      corsUrl:'/4001'
    },
    getCategoryData:{
      url:'/category',
      method:'get',
      corsUrl:'/4001'
    },
    getAssortCateList:{
      url:'/cateLists',
      method:'get',
      corsUrl:'/4001'
    }
  }
}