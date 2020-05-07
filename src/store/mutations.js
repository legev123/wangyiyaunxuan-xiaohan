import {GETINDEX} from "./mutation_types"
export default {
    [GETINDEX](state,indexData){
        state.indexData = indexData
    }
}