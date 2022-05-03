// Vue插件一定暴露一个对象
let myPlugins = {}

myPlugins.install = function(Vue, options) {
    Vue.directive(options.name, (element, params) => {
        console.log(params);
    })
}

export default myPlugins