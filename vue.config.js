const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    productionSourceMap: false,
    transpileDependencies: true,
    // 关闭eslint
    lintOnSave: false,
    // 开启代理
    devServer: {
        proxy: {
            '/api': {
                target: 'http://gmall-h5-api.atguigu.cn',
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
})