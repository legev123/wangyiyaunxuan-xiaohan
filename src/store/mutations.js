import {
    // 4001服务器数据
    GETINDEX,GETINDEXCATELIST,GETASSORTCATELIST,

    // 网易值得买---接口真实数据
    VALUEBUYNAVDATA,VALUEBUYFIRSTSCREEN,VALUEBUYBOTTOMLOADING,

    //网易搜索相关真实数据
    SEARCHVIEWINIT,SEARCHKEYWORD
} from "./mutation_types"
export default {
    [GETINDEX](state,indexData){
        state.indexData = indexData
    },
    [GETINDEXCATELIST](state,catelistData){
        state.cateList = catelistData
    },
    [GETASSORTCATELIST](state,assortCateList){
        state.assortCateList = assortCateList
    },

    // 值得买--NAV导航
    [VALUEBUYNAVDATA](state,valueBuyNavData){
        state.valueBuyNavObj = valueBuyNavData
    },
    //值得买--瀑布流首屏
    [VALUEBUYFIRSTSCREEN](state,valueBuyFirstScreen){
        state.valueBuyFirstScreenData = valueBuyFirstScreen
    },
    //值得买--触底加载
    [VALUEBUYBOTTOMLOADING](state,valueBuyBottomloading){
        state.valueBuyBottomloadingData = valueBuyBottomloading
    },

    //搜索--页面初始化显示
    [SEARCHVIEWINIT](state,searchViewInit){
        state.searchViewInitData = searchViewInit
    },
    //搜索相关数据``关键字搜索
    [SEARCHKEYWORD](state,searchKeyWord){
        state.searchKeyWordData = searchKeyWord
    },
}