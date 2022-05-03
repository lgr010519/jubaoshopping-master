// 配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用插件
Vue.use(VueRouter)
    // 引入store
import store from '@/store'

import routes from './routes'

// 先把VueRouter原型对象的push，先保存一份
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
    // 重写push|replace
VueRouter.prototype.push = function(location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => {}, () => {})
    }
}
VueRouter.prototype.replace = function(location, resolve, reject) {
        if (resolve && reject) {
            originReplace.call(this, location, resolve, reject)
        } else {
            originReplace.call(this, location, () => {}, () => {})
        }
    }
    // 配置路由
let router = new VueRouter({
    routes,
    // 滚动行为
    scrollBehavior(to, from, savedPosition) {
        // 滚动条在最上方
        return {
            y: 0
        }
    }
})

// 全局守卫：前置守卫（在路由跳转之前进行判断）
router.beforeEach(async(to, from, next) => {
    let name = store.state.user.userInfo.name
        // next放行函数
        // next(path)放行到指定路由
        // next(false)
        // 用户登录才会有token
    if (store.state.user.token) {
        if (to.path == '/login') {
            next('/home')
        } else {
            if (name) {
                next()
            } else {
                try {
                    // 获取用户信息在首页展示
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    // token失效
                    // 清除token
                    await store.dispatch('userLogout')
                    next('/login')
                }
            }
        }
    } else {
        // 未登录，不能去交易相关，支付相关，个人中心
        if (to.path.indexOf('/trade') != -1 || to.path.indexOf('/pay') != -1 || to.path.indexOf('/center') != -1) {
            // 把未登录的时候想去而没有去成的信息，存储于地址栏中（路由）
            next('/login?redirect=' + to.path)
        } else {
            next()
        }
    }
})

export default router