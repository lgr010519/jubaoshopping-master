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
    loading: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F15%2F20200215151942_iyvmq.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654336693&t=eda8c80af8e72f7652ac1fb55caa1e92'
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