import http from "@/http"
import {
     // 4001服务器数据
     GETINDEX,GETINDEXCATELIST,GETASSORTCATELIST,
 
     // 网易值得买---接口真实数据
     VALUEBUYNAVDATA,VALUEBUYFIRSTSCREEN,VALUEBUYBOTTOMLOADING,
 
     //网易搜索相关真实数据
     SEARCHVIEWINIT,SEARCHKEYWORD
 } from "./mutation_types"

export default {
     //4001服务器
    async [GETINDEX]({commit}){
       let data  = await http.wrap.getIndexData();
            commit(GETINDEX,data)
    },
    async [GETINDEXCATELIST]({commit}){
        let data  = await http.wrap.getCateList();
             commit(GETINDEXCATELIST,data)
     },
     async [GETASSORTCATELIST]({commit}){
          let data  = await http.wrap.getAssortCateList();
               commit(GETASSORTCATELIST,data)
       },
    // 值得买--NAV导航
    async [VALUEBUYNAVDATA]({commit}){
     let data  = await http.valueBuy.getValueBuyNavData();
          commit(VALUEBUYNAVDATA,data)
     },
    //值得买--瀑布流首屏
    async [VALUEBUYFIRSTSCREEN]({commit}){
     let data  = await http.valueBuy.getValueBuyFirstScreen();
          commit(VALUEBUYFIRSTSCREEN,data)
     },
//     值得买--触底加载,需要具体的页码,备用
    async [VALUEBUYBOTTOMLOADING]({commit}){
     let data  = await http.valueBuy.getValueBuyBottomloading();
          commit(VALUEBUYBOTTOMLOADING,data)
     },
    //搜索--页面初始化显示
    async [SEARCHVIEWINIT]({commit}){
     let data  = await http.search.getSearchViewInit();
          commit(SEARCHVIEWINIT,data)
     },
    //搜索相关数据``关键字搜索,传参 备用
    async [SEARCHKEYWORD]({commit}){
     let data  = await http.search.getSearchKeyWord();
          commit(SEARCHKEYWORD,data)
     },
}