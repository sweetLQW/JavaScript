// function SelfVue (data, el, propName) {
//     this.data = data;
//     observer(data);
//     el.innerHTML = this.data[propName];  // 初始化模板数据的值
//     new Watcher(this, propName, function (value) {
//         el.innerHTML = value;
//     });
//     return this;
// }
function SelfVue(data, el, propName) {
    console.log('形参', data, el, propName);
    var self = this;
    self.data = data;
    // 设置this.data里面的值直接可以从this取 当设置或获取this下的值的时候实际上是设置或获取的this.data的值
    Object.keys(data).forEach(prop => {
        self.proxyKeys(prop);
    });
    observe(data);
    el.innerHTML = self.data[propName];  // 初始化模板数据的值
    new Watcher(self, propName, function (value) {
        el.innerHTML = value;
    });
    return self;
}
SelfVue.prototype = {
    proxyKeys: function (key) {
        var self = this;
        Object.defineProperty(self, key, {
            enumerable: false,
            configurable: true,
            get: function proxyGetter() {
                return self.data[key];
            },
            set: function proxySetter(newVal) {
                self.data[key] = newVal;
            }
        });
    }
}