// 先引入mockjs模块
import Mock from 'mockjs'
// 把json格式数据引入(json格式数据根本没有对外暴露，但是可以引入)
// webpack默认对外暴露的：图片，json格式数据
import banner from './banner.json'
import floor from './floor.json'
import list from './list.json'

// mock数据(第一个参数：请求地址 第二个参数：请求数据)
Mock.mock('/mock/banner', {
        code: 200,
        data: banner
    }) // 模拟首页大的轮播图的数据

Mock.mock('/mock/floor', {
    code: 200,
    data: floor
})

Mock.mock('/mock/list', {
    code: 200,
    data: list
})