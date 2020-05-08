import {GETINDEX,GETINDEXCATELIST,GETASSORTCATELIST} from "./mutation_types"
export default {
    [GETINDEX](state,indexData){
        state.indexData = indexData
    },
    [GETINDEXCATELIST](state,catelistData){
        state.cateList = catelistData
    },
    [GETASSORTCATELIST](state,assortCateList){
        state.assortCateList = assortCateList
    }
}