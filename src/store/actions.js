import http from "@/http"
import {GETINDEX,GETINDEXCATELIST,GETASSORTCATELIST} from "./mutation_types"
export default {
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
       }
}