export default [{
        path: '/home',
        // 路由懒加载
        component: () =>
            import ('@/pages/Home'),
        meta: {
            show: true
        }
    },
    {
        path: '/login',
        component: () =>
            import ('@/pages/Login'),
        meta: {
            show: false
        }
    },
    {
        path: '/register',
        component: () =>
            import ('@/pages/Register'),
        meta: {
            show: false
        }
    },
    {
        path: '/search/:keyword',
        component: () =>
            import ('@/pages/Search'),
        meta: {
            show: true
        },
        name: 'search'
    },
    {
        path: '/detail/:skuId',
        component: () =>
            import ('@/pages/Detail'),
        meta: {
            show: true
        },
        name: 'detail'
    },
    {
        path: '/addcartsuccess',
        component: () =>
            import ('@/pages/AddCartSuccess'),
        meta: {
            show: true
        },
        name: 'addcartsuccess'
    },
    {
        path: '/shopcart',
        component: () =>
            import ('@/pages/ShopCart'),
        meta: {
            show: true
        },
    },
    {
        path: '/trade',
        component: () =>
            import ('@/pages/Trade'),
        meta: {
            show: true
        },
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            // 去交易页面，必须从购物车而来
            if (from.path == '/shopcart') {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        path: '/pay',
        component: () =>
            import ('@/pages/Pay'),
        meta: {
            show: true
        },
        beforeEnter: (to, from, next) => {
            if (from.path == '/trade') {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        path: '/paysuccess',
        component: () =>
            import ('@/pages/PaySuccess'),
        meta: {
            show: true
        }
    },
    {
        path: '/center',
        component: () =>
            import ('@/pages/Center'),
        meta: {
            show: true
        },
        children: [{
                path: 'myorder',
                component: () =>
                    import ('@/pages/Center/myOrder'),
            },
            {
                path: 'grouporder',
                component: () =>
                    import ('@/pages/Center/groupOrder'),
            },
            {
                path: '/center',
                redirect: '/center/myorder'
            }
        ]
    },
    // 重定向，在项目跑起来的时候，访问/，立马让他定向到首页
    {
        path: '*',
        redirect: '/home'
    }
]