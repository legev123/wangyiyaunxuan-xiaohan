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
      url:'/category',
      method:'get',
      corsUrl:'/4001'
    },
  }
}