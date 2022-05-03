import Vue from 'vue'
import App from './App.vue'
// 三级联动组件
import typeNav from '@/components/TypeNav'
import myCarousel from '@/components/myCarousel'
import myPagination from '@/components/myPagination'
import {
    Button,
    MessageBox,
    Carousel,
    CarouselItem,
    Pagination
} from 'element-ui'
Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Pagination)
Vue.component(typeNav.name, typeNav)
Vue.component(myCarousel.name, myCarousel)
Vue.component(myPagination.name, myPagination)

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

// 引入路由
import router from '@/router';
// 引入仓库
import store from '@/store'
// 引入mockServe.js----mock数据
import '@/mock/mockServe'
// 引入swiper样式
import 'swiper/css/swiper.min.css'

// 统一接收api文件夹里面全部请求函数
import * as API from '@/api'

// 引入图片懒加载插件
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    // 懒加载默认图片
    loading: 'https://img2.baidu.com/it/u=2667602665,1600550074&fm=253&fmt=auto&app=138&f=GIF?w=480&h=360'
})

// 引入表单校验插件
import '@/plugins/validate'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    // 注册路由:当这里书写router的时候，组件身上都拥有$route,$router属性
    router,
    // 注册仓库:组件实例身上会多一个$store属性
    store,
    beforeCreate() {
        Vue.prototype.$bus = this
        Vue.prototype.$API = API
    }
}).$mount('#app')