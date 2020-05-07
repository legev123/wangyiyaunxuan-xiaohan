import http from "@/http"
import {GETINDEX} from "./mutation_types"
export default {
    async [GETINDEX]({commit}){
       let data  = await http.wrap.getIndexData();
            commit(GETINDEX,data)
    }
}