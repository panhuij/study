---
title: 三年前端
sidebar: auto
sidebarDepth: 2
---


## css

## 1、css 实现背景图片覆盖

```css
background-attachment: fixed;
```

## 2、css 中哪些属性会脱离文档流

（1）浮动 float: right;

（2）绝对定位 position: absolute;

（3）固定定位 position: fixed;  
元素脱离文档流会导致父元素高度塌陷，要修复高度塌陷问题，可以将子元素与父元素放在同一个 BFC 中

## 3、盒模型

##### 在标准模式下，一个块的总宽度= width + margin(左右) + padding(左右) + border

##### 一个块的总宽度= width + margin(左右)（即 width 已经包含了 padding 和 border 值）

IE 盒模型或怪异盒模型显而易见的区别就是，width 和 height 除了 content 区域外，还包含 padding 和 border。

```css
box-sizing: border-box;
```

## 4、垂直居中方法

1、绝对定位方法：不确定当前 div 的宽度和高度，采用 transform: translate(-50%,-50%); 当前 div 的父级添加相对定位（position: relative;）

```css
div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
```

2、flex 布局方法

```css
.box {
    display: flex;
    align-items: center;
    justify-content: center;
}
```

3、table-cell 实现水平垂直居中: table-cell middle center 组合使用

```css
.table-cell {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
```

4、借助外边距的负值,负元素宽高的一半

```css
.parent {
    position: relative;
}
.child {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -100px;
    margin-top: -100px;
}
```

5、absolute+margin auto

```css
.parent {
    position: relative;
}
.child {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
```

6、css 新出的网格布局 grid

```css
.parent {
    display: grid;
}
.child {
    align-self: center;
    justify-self: center;
}
```

## 5、选择器权重计算方式

!important 权最高 > 内联样式（1000）> ID 选择器（#100）> class 类选择器/属性/伪类 （:hover,:focus 10）> 标签选择器 /伪元素 (1) > 子选择器、相邻选择器、通配符选择器("\*")

伪元素选择器只包含以下几种:

::after  
::before  
::first-letter  
::first-line  
::selecton

## 6、清除浮动的方法

[文章推荐](https://www.cnblogs.com/nxl0908/p/7245460.html)  
1、父级 div 定义伪类：after 和 zoom

```css
/*清除浮动代码*/
.clearfloat:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
}
.clearfloat {
    zoom: 1;
}
```

2.在结尾处添加空 div 标签或加 br 标签 clear:both  
3.父级 div 定义 overflow:hidden  
4.父级 div 定义 overflow:auto  
5.父级 div 也一起浮动  
6.父级 div 定义 display:table

## 7、什么是 BFC、可以解决哪些问题

[浅谈对 BFC 的认识，以及用 bfc 解决浮动问题](https://www.cnblogs.com/yongG/p/11099894.html)

[BFC 的布局规则以及触发条件](https://www.cnblogs.com/CafeMing/p/6252286.html)

#### 8、position 属性

static 默认值。没有定位

fixed 生成固定定位的元素，相对于浏览器窗口进行定位，是固定的，不会跟屏幕一起滚动。

inherit 规定应该从父元素继承 position 属性的值。

relative 相对定位，是相对于其原本的位置来定位的。

absolute 绝对定位，是相对于最近的且不是 static 定位的父元素来定位

sticky 粘性定位

重绘和重排（回流），脱离文档流来减少重排（relative，absolute）。

## 9、如何用 css 实现一个三角形

```css
:after {
    content: "";
    width: 0;
    height: 0;
    display: block;
    border: 1px solid transparent;
    border-top-color: #f00;
    position: absolute;
    top: 50%;
    right: 10px;
}
```

---

## 手写题

## 1、防抖(Debouncing)和节流(Throttling)

[参考文章](https://www.cnblogs.com/wuconghui/p/10998106.html)

---

### 防抖函数

典型的例子：限制鼠标的连击触发

当一次事件触发后，事件处理器要等一定阈值的时间，如果这段时间过去后，再也没有事件发生，就处理最后一次发生的事件。

假设还差 0.01 秒就到达指定时间，这时又来了一个事件，那么之前的等待作废，需要重新再等待指定的时间

```js
function debounce(fun, dealy = 150) {
    let start = +new Date(),
        timer = 0;
    return function() {
        let cur = +new Date();
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fun();
        }, delay);
        start = cur;
    };
}
```

### 节流函数

可以理解为事件在一个管道中传输，加上这个节流阀以后，事件的流速就会减慢。

实际上这个函数的作用就是如此，它可以将一个函数的调用频率限制在一定阈值内，例如 1s，那么 1s 内这个函数一定不会被调用两次

```js
function throttle(func, dalay = 150) {
    let start = +new Date(),
        timer = 0;
    return function() {
        let cur = +new Date();
        if (cur - start > dalay) {
            timer = setTimeout(() => {
                func();
            }, dalay);
        }
    };
}
```

## 2、

## 3、深拷贝

1、js 里所有的深拷贝都是最外层深拷贝，内层还是浅拷贝。 比如：object.assign, ..., slice, concat
2、JSON.stringfy 和 JSON.parse 会忽略正则、日期对象、函数、正则等 js 内置对象。  
3、深拷贝的原理就是依赖递归逐层拷贝

```js
//hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。
function deepCopy(obj) {
    var result = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === "object" && obj[key] !== null) {
                result[key] = deepCopy(obj[key]); //递归复制
            } else {
                result[key] = obj[key];
            }
        }
    }
    return result;
}
```

```js
function isObject(obj) {
    return (
        Object.prototype.toString.call(obj) === "[object Object]" ||
        Object.prototype.toString.call(obj) === "[object Array]"
    );
}

function deepCopy(source, hash = new WeakMap()) {
    // 判断如果参数不是一个对象，返回改参数
    if (!isObject(source)) return source;
    if (hash.has(source)) return hash.get(source); // 如何拷贝过该对象，则直接返回该对象
    // 判断参数是对象还是数组来初始化返回值
    let res = Array.isArray(source) ? [] : {};
    hash.set(source, res); // 哈希表添加新对象
    // 循环参数对象的key
    for (let key in source) {
        // 如果该key属于参数对象本身
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            // 如果该key的value值是对象，递归调用深拷贝方法进行拷贝
            if (isObject(source[key])) {
                res[key] = deepCopy(source[key], hash);
            } else {
                // 如果该key的value值不是对象，则把参数对象key的value值赋给返回值的key
                res[key] = source[key];
            }
        }
    }
    // 返回返回值
    return res;
}

// 测试
let obj1 = {
    name: "obj.name",
    un: undefined,
    nu: null,
    arr: [1, 2, 3],
    sy: Symbol(123),
    say: function() {
        console.log(this.name);
    },
    reg: /\d{6}/g,
    date: new Date(),
    child: {
        name: "child.name"
    }
};

obj1.child.child = obj1.child;
let obj2 = deepCopy(obj1);
console.log(obj1);
console.log(obj2);
console.log(obj2.sy === obj1.sy);
console.log(obj2.arr === obj1.arr);
obj2.name = "obj2.name";
obj2.say();
```

还可以借用 JQ 的 extend 方法。

```js
$.extend( [deep ], target, object1 [, objectN ] )
```

deep 表示是否深拷贝，为 true 为深拷贝，为 false，则为浅拷贝

target Object 类型 目标对象，其他对象的成员属性将被附加到该对象上。

object1 objectN 可选。 Object 类型 第一个以及第 N 个被合并的对象。

## 4、数组去重、数组乱序

```js
var arr = [1, 1, 34, 5, 7, 24, 5, 62];
function muddled() {
    arr.sort(function() {
        return Math.random() - 0.5;
    });
}
```

[数组去重](https://www.cnblogs.com/wisewrong/p/9642264.html)

```js
// 数组去重
1. [...new Set(arr)]
2. indexOf+遍历
3. 有序数组，不引用第三方变量，遍历+判断相邻元素是否相等+splice

function distinct(a, b) {
    let arr = a.concat(b)
    arr = arr.sort()
    let result = [arr[0]]

    for (let i=1, len=arr.length; i<len; i++) {
        arr[i] !== arr[i-1] && result.push(arr[i])
    }
    return result
}
```

## 5、手写 call、apply、bind
apply和call的区别就是传的参数形式不一样。call是一个一个的传，apply可以将参数以数组的形式传进去。而bind是传入第二个和后面的参数，且绑定this，返回一个转化后的函数。

考虑两点

第一个参数为undefined或null的时候，那么会转变为window
改变了this执行，让新的对象可以执行该函数。
```js
Object.prototype.MyCall = function(context) {
    // 判断是否是undefined和null
    if (typeof context === "undefined" || context === null) {
        context = window;
    }
    context.fn = this;
    let args = [...arguments].slice(1);
    let result = context.fn(...args);
    delete context.fn;
    return result;
};

Object.prototype.MyApply = function(context) {
    if (typeof context === "undefined" || context === null) {
        context = window;
    }
    context.fn = this;
    let args = arguments[1];
    let result;
    if (args) {
        result = context.fn(...args);
    } else {
        result = context.fn();
    }
    delete context.fn;
    return result;
};

Object.prototype.MyBind = function() {
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }
    let _this = this;
    let args = [...arguments].slice(1);
    return function F() {
        // 判断是否被当做构造函数使用
        if (this instanceof F) {
            return _this.apply(this, args.concat([...arguments]));
        }
        return _this.apply(context, args.concat([...arguments]));
    };
};
```

## 6、继承（ES5/ES6）

[文章推荐](https://www.cnblogs.com/annika/p/9073572.html)

## 7、sleep 函数
sleep函数的作用就是延迟指定时间后再执行接下来的函数。用promise很好实现。
```js
function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time)
    }, time)
  })
}
 
sleep(5000).then(
  (time) => { 
    console.log(`你睡了${time / 1000}s，然后做你的事情`) 
  }
```
## 8、实现 promise
```js
function promise () {
  this.status = 'pending' // 2.1
  this.msg = '' // 存储value与reason
  let process = arguments[0],
       that = this
  process (function () {
    that.status = 'resolve'
    that.msg = argument[0]
  }, function () {
    that.status = 'reject'
    that.msg = argument[0]
  })
  return this
}

promise.prototype.then = function () {
  if (this.status === 'resolve') {
    arguments[0](this.msg)
  } else if (this.status === 'reject' && arguments[1]) {
    arguments[1](this.msg)
  }
}
```
## 9、实现 promise.all
```js
function PromiseAll (arr) {
	//PromiseAll的返回值为一个promise对象
	return new Promise((resolve, reject) => {
		//PromiseAll的入参必须是函数
		if (!Array.isArray(arr)) {
			return reject(new TypeError('arr must be an array.'));
		}

		let resArr = [];

		for (let i in arr) {
			(function(i) {
				Promise.resolve(arr[i]).then(res => {
					resArr.push(res);
					//只有所有的都成功了，才会返回resolve
					if (i == arr.length - 1) {
						return resolve(resArr);
					}
				}, err => {
					return reject(err)
				}).catch(err => {
					console.log(err)
				})
			})(i)
		}
	})
}
```
## 10、实现 promise.retry

## 11、将一个同步 callback 包装成 promise 形式
[参考文章](https://www.jianshu.com/p/8fd80c368570)
## 12、写一个函数，可以控制最大并发数
[文章推荐](https://blog.csdn.net/qq_33081841/article/details/88583735)
## 13、jsonp 的实现
```js
复制代码
//用于拼接src路径
//<script src="http://www.bbb.com/index.php?name="aaa"&age="12"callback=getData"></script>
function string(params) {
    let str = "";
    for (var key in params) {
        str += `${key}=${params[key]}&`;
    }
    str += "callback=jsonCallback";
    return str;
}
//设置默认回调函数的名字
const defalutConfig = {
    callbackname: "jsonCallback"
};

const jsonp = (url, params, option = defalutConfig) => {
    // 返回一个可以链式调用的promise对象
    return new Promise((resolve, reject) => {
        //将前端传递querystring查询字符串的参数，拼接到地址栏
        url =
            url.indexOf("?") === -1
                ? url + "?" + string(params)
                : string(params);
        //动态创建script标记
        const script = document.createElement("script");
        //设置接口的请求地址
        script.setAttribute("src", url);
        //设置请求jsonp接口的回调函数
        window[option.callbackname] = res => {
            //请求jsonp接口成功后，删除该函数 - 不污染window
            delete window[option.callbackname];
            //从页面中删除请求接口动态创建的script标记
            document.body.removeChild(script);
            //判断接口的数据返回
            if (res) {
                resolve(res);
            } else {
                reject("服务器没有返回数据");
            }
        };

        //动态创建script标记，错误的监听
        script.addEventListener("error", () => {
            delete window["jsonpCallback"];
            document.body.removeChild(script);
            reject("服务器加载失败！");
        });
        document.body.appendChild(script);
    });
};
```
## 14、eventEmitter(emit,on,off,once)

## 15、实现 instanceof
```
function instanceof(left, right) {
    // 获得类型的原型
    let prototype = right.prototype
    // 获得对象的原型
    left = left.__proto__
    // 判断对象的类型是否等于类型的原型
    while (true) {
        if (left === null)
            return false
        if (prototype === left)
            return true
        left = left.__proto__
    }
}
```

## 16、实现 new

## 17、实现数组 flat、filter 等方法
[大神文章](https://juejin.im/post/5b72f0caf265da282809f3b5#heading-14)
```js
//flat数组扁平化
// 递归版本的反嵌套
1、arr.prototype.flat = function() {
    this.toString().split(',').map(item=> +item )
}

2、Array.prototype.flat = function() {
    var arr = [];
    this.forEach((item,idx) => {
        if(Array.isArray(item)) {
            arr = arr.concat(item.flat()); //递归去处理数组元素
        } else {
            arr.push(item)   //非数组直接push进去
        }
    })
    return arr;   //递归出口
}
```

## 18、lazyMan

## 19、函数 currying
```js
简单来说 Currying 技术是一种通过把多个参数填充到函数体中，实现将函数转换为一个新的经过简化的（使之接受的参数更少）函数的技术。当发现正在调用同一个函数时，并且传递的参数绝大多数都是相同的，那么用一个Curry化的函数是一个很好的选择。
function add(x, y){
    if(x && y) return x + y;
    if(!x && !y) throw Error("Cannot calculate");
    return function(newx){
        return x + newx;
    };
}
add(3)(4); //7
add(3, 4); //7
var newAdd = add(5);
newAdd(8); //13
var add2000 = add(2000);
add2000(100); //2100
```
## 20、generator函数自执行器
```
function run(generat) {
    const iterator = generat();
    function autoRun(iteration) {
        if(iteration.done) {return iteration.value}  //出口
        const anotherPromise = iteration.value;
        anoterPromise.then(x => {
            return autoRun(iterator.next(x))  //递归条件
        })
    }
    return autoRun(iterator.next()) 
}
```