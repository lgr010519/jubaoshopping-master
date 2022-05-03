// search模块的小仓库
import {
    reqGetSearchInfo
} from '@/api'
const state = {
    searchList: {}
}
const actions = {
    async getSearchList({
        commit
    }, params) {
        // 当前这个reqGetSearchInfo函数在调用获取服务器数据的时候，至少传递一个参数（空对象）
        // params参数，是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            commit('GETSEARCHLIST', result.data)
        }
    }
}
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
}
const getters = {
    goodsList(state) {
        // 假如网络不给力|没有网，state.searchList.goodsList返回undefined
        return state.searchList.goodsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList || []
    },
    attrsList(state) {
        return state.searchList.attrsList || []
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}