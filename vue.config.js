//适配
const px2rem = require('postcss-px2rem')
   const postcss = px2rem({
     remUnit: 75   //remUnit = 设计稿/等分数10， 网易严选首页750宽，正好相当于是设计稿宽度，所以值为750/10 = 75
   })


//
   module.exports = {
     //适配
     css: {
       loaderOptions: {
         postcss: {
           plugins: [
             postcss
           ]
         }
       }
     },
     //dev
     devServer: {
        host: 'localhost',
        port: 8080,
        proxy:{
          '/4001': {
              target: 'http://localhost:4001',
              changeOrigin: true,
              pathRewrite:{
                  "^/4001":""
              }
          },
          // 值得买接口数据
          '/topic/v1': {
            target: 'https://m.you.163.com/topic/v1',
            changeOrigin: true,
            pathRewrite:{
                "^/topic/v1":""
            }
        },
        // 搜索页数据
        '/xhr/search': {
          target: 'https://m.you.163.com/xhr/search',
          changeOrigin: true,
          pathRewrite:{
              "^/xhr/search":""
          }
        }
      }
  }
}