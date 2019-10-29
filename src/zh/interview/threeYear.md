### css

#### 1、css实现背景图片覆盖  
background-attachment: fixed 
#### 2、css中哪些属性会脱离文档流   
（1）浮动  float: right;

（2）绝对定位  position: absolute;

（3）固定定位   position: fixed;  
元素脱离文档流会导致父元素高度塌陷，要修复高度塌陷问题，可以将子元素与父元素放在同一个BFC中  
#### 3、盒模型  
##### 在标准模式下，一个块的总宽度= width + margin(左右) + padding(左右) + border
##### 一个块的总宽度= width + margin(左右)（即width已经包含了padding和border值）

IE盒模型或怪异盒模型显而易见的区别就是，width和height除了content区域外，还包含padding和border。

```
 box-sizing: border-box;
```
#### 4、垂直居中方法
1、绝对定位方法：不确定当前div的宽度和高度，采用 transform: translate(-50%,-50%); 当前div的父级添加相对定位（position: relative;）
```
div{
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
}
```
2、flex布局方法
```
.box{
    display:flex;
    align-items:center;
    justify-content:center;
}
```
3、table-cell实现水平垂直居中: table-cell middle center组合使用
```
.table-cell {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
```
4、借助外边距的负值,负元素宽高的一半
```
.parent{
    position: relative;
}
.child{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -100px;
    margin-top: -100px;
}
```
5、absolute+margin auto
```
.parent{
    position: relative;
}
.child{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
```
6、css新出的网格布局grid
```
.parent{
    display: grid;
}
.child{
    align-self: center;
    justify-self: center;
}
```
#### 5、选择器权重计算方式
!important 权最高 > 内联样式（1000）> ID选择器（#100）> class 类选择器/属性/伪类 （:hover,:focus 10）> 标签选择器 /伪元素 (1) > 子选择器、相邻选择器、通配符选择器("*")


伪元素选择器只包含以下几种:

::after  
::before   
::first-letter  
::first-line  
::selecton  

#### 6、清除浮动的方法
[文章推荐](https://www.cnblogs.com/nxl0908/p/7245460.html)  
1、父级div定义伪类：after和zoom
```
 /*清除浮动代码*/
   .clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}
   .clearfloat{zoom:1}
```
2.在结尾处添加空div标签或加br标签clear:both  
3.父级div定义overflow:hidden  
4.父级div定义overflow:auto  
5.父级div也一起浮动  
6.父级div定义display:table

#### 7、什么是BFC、可以解决哪些问题  

[浅谈对BFC的认识，以及用bfc解决浮动问题](https://www.cnblogs.com/yongG/p/11099894.html)  

[BFC的布局规则以及触发条件](https://www.cnblogs.com/CafeMing/p/6252286.html)

#### 8、position属性
static  默认值。没有定位 

fixed   生成固定定位的元素，相对于浏览器窗口进行定位，是固定的，不会跟屏幕一起滚动。  

inherit  规定应该从父元素继承 position 属性的值。 

relative  相对定位，是相对于其原本的位置来定位的。  

absolute  绝对定位，是相对于最近的且不是static定位的父元素来定位

sticky   粘性定位 

重绘和重排（回流），脱离文档流来减少重排（relative，absolute）。

#### 9、如何用css实现一个三角形
```
:after{
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

### 手写题
##### 1、防抖(Debouncing)和节流(Throttling)
[参考文章](https://www.cnblogs.com/wuconghui/p/10998106.html)

---

###### 防抖函数
典型的例子：限制鼠标的连击触发

　　当一次事件触发后，事件处理器要等一定阈值的时间，如果这段时间过去后，再也没有事件发生，就处理最后一次发生的事件。

　　假设还差0.01秒就到达指定时间，这时又来了一个事件，那么之前的等待作废，需要重新再等待指定的时间
```
function debounce(fn,wait=50,immediate){
    let timer 
    return function(){
        if(immediate){
            fn.apply(this,arguments)
        }
        if(timer) clearTimeout(timer)
        timer=setTimeout(()=>{
            fn.apply(this,arguements)  
        },wait)
    }
}


function debounce(fun,dealy=150,cur){
    let start=+new Date(),
        timer=0;
    return function(){
        if(timer) clearTimeout(timer)
        timer=setTimeout(()=>{
            fn.apply(this,arguements)  
        },delay)
        start=cur;
    }
}
```
###### 节流函数
可以理解为事件在一个管道中传输，加上这个节流阀以后，事件的流速就会减慢。

　　实际上这个函数的作用就是如此，它可以将一个函数的调用频率限制在一定阈值内，例如 1s，那么 1s 内这个函数一定不会被调用两次
```
function throttle(fn,wait){
    let prev=new Date();
    return function(){
        const args=arguments;
        const now=new Date()
        if(now-prev>wait){
           fn.apply(this,args);
            prev=new Date()
        }
    }
}
```
##### 2、
##### 3、深拷贝
1、js里所有的深拷贝都是最外层深拷贝，内层是浅拷贝。   
2、JSON.stringfy和JSON.parse会忽略正则、日期对象、函数、正则。  
3、深拷贝的原理就是依赖递归逐层拷贝
```
//hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。
function deepCopy(obj) {
      var result = Array.isArray(obj) ? [] : {};
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (typeof obj[key] === 'object' && obj[key]!==null) {
            result[key] = deepCopy(obj[key]);   //递归复制
          } else {
            result[key] = obj[key];
          }
        }
      }
      return result;
    }
```
还可以借用JQ的extend方法。

```
$.extend( [deep ], target, object1 [, objectN ] )
```

deep表示是否深拷贝，为true为深拷贝，为false，则为浅拷贝

target Object类型 目标对象，其他对象的成员属性将被附加到该对象上。

object1  objectN可选。 Object类型 第一个以及第N个被合并的对象。 
##### 4、数组去重、数组乱序
```
var arr = [1,1,34,5,7,24,5,62,];
function muddled(){
    arr.sort(function(){
        return (0.5-Math.random())
    })
}
```

[数组去重](https://www.cnblogs.com/wisewrong/p/9642264.html)
```
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
##### 5、手写call、apply、bind
##### 6、继承（ES5/ES6）
##### 7、sleep函数
##### 8、实现promise
##### 9、实现promise.all
##### 10、实现promise.retry
##### 11、将一个同步callback包装成promise形式
##### 12、写一个函数，可以控制最大并发数
##### 13、jsonp的实现
##### 14、eventEmitter(emit,on,off,once)
##### 15、实现instanceof
##### 16、实现new
##### 17、实现数组flat、filter等方法
##### 18、lazyMan
##### 19、函数currying