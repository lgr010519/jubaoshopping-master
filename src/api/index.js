// API进行统一管理
import requests from './axios'
import mockRequests from './mockAjax'

// 三级联动接口
// /api/product/getBaseCategoryList  get  无参数

export const reqCategoryList = () =>
    // 发请求:返回结果是promise对象
    requests({
        url: '/api/product/getBaseCategoryList',
        method: 'get'
    })

// 获取banner（ Home首页轮播图接口）
export const reqGetBannerList = () => mockRequests.get('/banner')

// 获取floor数据
export const reqFloorList = () => mockRequests.get('/floor')

// 获取search模块数据 地址：/api/list  请求方式：post  参数：需要带参数

// 当前这个接口给服务器传递一个默认参数，至少是一个空对象
export const reqGetSearchInfo = (params) =>
    requests({
        url: '/api/list',
        method: 'post',
        data: params
    })

export const reqGoodsInfo = (skuId) => requests({
    url: `/api/item/${skuId}`,
    method: 'get',
    data: skuId
})

// 获取验证码
export const reqGetCode = (phone) => requests({
    url: `/api/user/passport/sendCode/${phone}`,
    method: 'get',
    data: phone
})

// 将产品添加到购物车中（获取更新某一个产品的个数）
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({
    url: `/api/cart/addToCart/${ skuId }/${ skuNum }`,
    method: 'post'
})

// 获取购物车列表数据的接口
export const reqCartList = () => requests({
    url: '/api/cart/cartList',
    method: 'get'
})

// 注册
export const reqUserRegister = (data) => requests({
    url: '/api/user/passport/register',
    method: 'post',
    data
})

// 登录
export const reqUserLogin = (data) => requests({
    url: '/api/user/passport/login',
    method: 'post',
    data
})

// 获取用户信息（需要带着用户的token向服务器要用户信息）
export const reqUserInfo = () => requests({
    url: '/api/user/passport/auth/getUserInfo',
    method: 'get'
})

// 退出登录
export const reqLogout = () => requests({
    url: '/api/user/passport/logout',
    method: 'get'
})

// 获取用户地址信息
export const reqAddressInfo = () => requests({
    url: '/api/user/userAddress/auth/findUserAddressList',
    method: 'get'
})

// 获取商品清单
export const reqOrderInfo = () => requests({
    url: '/api/order/auth/trade',
    method: 'get'
})

// 提交订单接口
export const reqSubmitOrder = (tradeNo, data) => requests({
    url: `/api/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method: 'post',
    data
})

// 获取订单支付信息
export const reqPayInfo = (orderId) => requests({
    url: `/api/payment/weixin/createNative/${orderId}`,
    method: 'get'
})

// 获取支付订单状态
export const reqPayStatus = (orderId) => requests({
    url: `/api/payment/weixin/queryPayStatus/${orderId}`,
    method: 'get'
})

// 获取个人中心的数据
export const reqMyOrderList = (page, limit) => requests({
    url: `/api/order/auth/${page}/${limit}`,
    method: 'get'
})