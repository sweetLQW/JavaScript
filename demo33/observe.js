function observe(data) {
    // console.log(data);
    let dep = new Dep();
    Object.keys(data).forEach(prop => {
        if (Object.prototype.toString.call(data[prop]) === '[object Object]') {
            observe(data[prop]);
        } else {
            let value = data[prop];
            Object.defineProperty(data, prop, {
                set: function (val) {
                    if (value === val) {
                        return;
                    }
                    value = val;
                    dep.notify();
                },
                get: function () {
                    if (Dep.target) {
                        dep.addSub(Dep.target);
                    }
                    return value + '√';
                }
            })
        }
    });
}
Dep.target = null;

// 消息订阅器
function Dep() {
    this.subs = [];
}
Dep.prototype = {
    addSub: function (val) {
        this.subs.push(val);
    },
    notify: function () {
        // console.log('subs', this.subs);
        this.subs.forEach(element => {
            element.update();
        })
    }
}
// var person = {
//     name: 'lily',
//     school: {
//         middle: 'tq',
//         university: 'tj university'
//     }
// };
// observe(person);
// console.log(person);
