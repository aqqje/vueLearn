(function(window){
  const MyPlugin = {}
    MyPlugin.install = function (Vue, options) {
        Vue.myGlobalMethod = function () {
          console.log('myGlobalMethod')
        }

        // 2. 添加全局资源
        Vue.directive('my-directive', function(el, binding){
            el.textContent = binding.value.toUpperCase()
        })

        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
          console.log('vm $myMethod')
        }
    }
    window.MyPlugin = MyPlugin
})(window)