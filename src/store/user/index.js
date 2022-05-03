import {
    reqGetCode,
    reqUserInfo,
    reqUserLogin,
    reqUserRegister,
    reqLogout
} from "@/api"
import {
    getToken,
    setToken,
    removeToken
} from "@/utils/token"

const state = {
    code: '',
    token: getToken(),
    userInfo: {}
}

const actions = {
    // 获取验证码
    async getCode({
        commit
    }, phone) {
        let result = await reqGetCode(phone)
        if (result.code == 200) {
            commit('GETCODE', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 用户注册
    async userRegister({
        commit
    }, user) {
        let result = await reqUserRegister(user)
        console.log(result);
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 登录业务
    async userLogin({
        commit
    }, data) {
        let result = await reqUserLogin(data)
            // 服务器下发token，用户唯一标识符
            // 将来经常通过带token找服务器要用户信息进行展示
        if (result.code == 200) {
            // 用户已经登录成功且获取到token
            commit('USERLOGIN', result.data.token)
                // 持久化存储token
            setToken(result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 获取用户信息
    async getUserInfo({
        commit
    }) {
        let result = await reqUserInfo()
        if (result.code == 200) {
            commit('GETUSERINFO', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 退出登录
    async userLogout({
        commit
    }) {
        let result = await reqLogout()
        if (result.code == 200) {
            commit('CLEAR')
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    }
}

const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    CLEAR(state) {
        state.token = '',
            state.userInfo = {},
            removeToken()
    }
}

const getters = {

}

export default {
    state,
    actions,
    mutations,
    getters
}