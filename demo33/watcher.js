/*  Watcher 构造函数 
    作用：监听数据变化更新视图
    参数：selfVue的this 属性名称 回调函数 */
function Watcher(vm, propName, callback) {
    this.callback = callback;
    this.vm = vm;
    this.propName = propName;
    this.value = this.get();  // 将自己添加到订阅器的操作
}
Watcher.prototype = {
    update: function () {
        this.run();
    },
    run: function () {
        var value = this.vm.data[this.propName];
        var oldVal = this.value;
        if (value !== oldVal) {
            this.value = value;
            this.callback.call(this.vm, value, oldVal);
        }
    },
    get: function () {
        Dep.target = this; // 缓存自己
        var value = this.vm.data[this.propName]; // 强制执行监听器里的get函数 把自己添加到消息订阅器中
        Dep.target = null; // 释放自己
        return value;
    }
};