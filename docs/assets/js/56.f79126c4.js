(window.webpackJsonp = window.webpackJsonp || []).push([[56], { 154: function (t, e, r) { 'use strict'; r.r(e); var a = r(0), s = Object(a.a)({}, function () { this.$createElement; this._self._c; return this._m(0) }, [function () { var t = this, e = t.$createElement, r = t._self._c || e; return r('div', { staticClass: 'content' }, [r('h1', { attrs: { id: 'redux' }}, [r('a', { staticClass: 'header-anchor', attrs: { href: '#redux', 'aria-hidden': 'true' }}, [t._v('#')]), t._v(' Redux')]), t._v(' '), r('h5', { attrs: { id: '_1、redux是什么？' }}, [r('a', { staticClass: 'header-anchor', attrs: { href: '#_1、redux是什么？', 'aria-hidden': 'true' }}, [t._v('#')]), t._v(' 1、redux是什么？')]), t._v(' '), r('ul', [r('li', [t._v('是一个框架')]), t._v(' '), r('li', [t._v('跨组件通信')])]), t._v(' '), r('h4', { attrs: { id: '分四块内容' }}, [r('a', { staticClass: 'header-anchor', attrs: { href: '#分四块内容', 'aria-hidden': 'true' }}, [t._v('#')]), t._v(' 分四块内容')]), t._v(' '), r('ol', [r('li', [t._v('actionTypes')]), t._v(' '), r('li', [t._v('actions => {type, payload}')]), t._v(' '), r('li', [t._v('reducer')]), t._v(' '), r('li', [t._v('store')])]), t._v(' '), r('h4', { attrs: { id: 'redux三大原则' }}, [r('a', { staticClass: 'header-anchor', attrs: { href: '#redux三大原则', 'aria-hidden': 'true' }}, [t._v('#')]), t._v(' redux三大原则')]), t._v(' '), r('ol', [r('li', [t._v('单一数据源')]), t._v(' '), r('li', [t._v('State 是只读的')]), t._v(' '), r('li', [t._v('使用纯函数来执行修改')])]), t._v(' '), r('h5', { attrs: { id: '_2、provider' }}, [r('a', { staticClass: 'header-anchor', attrs: { href: '#_2、provider', 'aria-hidden': 'true' }}, [t._v('#')]), t._v(' 2、provider')]), t._v(' '), r('ul', [r('li', [t._v('只有一个属性，是store')]), t._v(' '), r('li', [t._v('顶层容器')])]), t._v(' '), r('h5', { attrs: { id: '_3、connect' }}, [r('a', { staticClass: 'header-anchor', attrs: { href: '#_3、connect', 'aria-hidden': 'true' }}, [t._v('#')]), t._v(' 3、connect')]), t._v(' '), r('ul', [r('li', [t._v('伪高阶函数')]), t._v(' '), r('li', [t._v('4个参数')])]), t._v(' '), r('div', { staticClass: 'language- extra-class' }, [r('pre', { pre: !0, attrs: { class: 'language-text' }}, [r('code', [t._v("1、把redux中state映射成的props传递到组件中去   // 获取state数据\nconst mapStatetoProps = (state,ownProps)=>{\n    // state  redux存储的数据\n    // ownProps   组件调用时传过来的props\n    // 返回一个对象\n}\n\n2、把dispatch操作封装在当前函数里，传递到组件中   // 封装方法\nconst mapDispatchtoProps = (dispatch, ownProps)=>{\n    // 返回一个对象\n    return {\n        fetchList:()=>{\n            axios.get('路径')\n            .then(res=>{\n                // 触发dispatch\n                dispatch({\n                    type:'FETCH_LIST',\n                    payload:res.data\n                })\n            })\n        }\n    }\n    \n}\n\n3、合并props\nconst mergeProps = (stateProps, dispatchProps, ownProps)=>{\n    // stateProps 是mapStateToProps的返回值\n    // dispatchProps 是mapDispatchtoProps的返回值\n    // ownProps 是调用时传入的props\n    return {...stateProps, ...dispatchProps, ...ownProps}\n    \n}\n\n4、可选配置项\nconst options = {\n    pure:true\n    // pure：表示state需要深拷贝才会响应\n    // true 深拷贝(默认true 深拷贝)\n    // false 浅拷贝深拷贝都可以\n}\n")])])]), r('h5', { attrs: { id: '_4、reducer' }}, [r('a', { staticClass: 'header-anchor', attrs: { href: '#_4、reducer', 'aria-hidden': 'true' }}, [t._v('#')]), t._v(' 4、reducer')]), t._v(' '), r('ul', [r('li', [t._v('有两个参数：state action')]), t._v(' '), r('li', [t._v('接收先前的 state 和 action，并返回新的 state')])]), t._v(' '), r('h5', { attrs: { id: '_5、深拷贝和浅拷贝' }}, [r('a', { staticClass: 'header-anchor', attrs: { href: '#_5、深拷贝和浅拷贝', 'aria-hidden': 'true' }}, [t._v('#')]), t._v(' 5、深拷贝和浅拷贝')]), t._v(' '), r('ul', [r('li', [t._v('深拷贝 ...')]), t._v(' '), r('li', [t._v('浅拷贝 Object.assign()')])]), t._v(' '), r('h5', { attrs: { id: '_5、store' }}, [r('a', { staticClass: 'header-anchor', attrs: { href: '#_5、store', 'aria-hidden': 'true' }}, [t._v('#')]), t._v(' 5、store')]), t._v(' '), r('ul', [r('li', [t._v('createStore接收两个参数')])]), t._v(' '), r('blockquote', [r('p', [t._v('reducers 存储数据和修改数据')])]), t._v(' '), r('blockquote', [r('p', [t._v('applyMiddleware 应用的中间件')])]), t._v(' '), r('h5', { attrs: { id: '_6、combinereducers-合并' }}, [r('a', { staticClass: 'header-anchor', attrs: { href: '#_6、combinereducers-合并', 'aria-hidden': 'true' }}, [t._v('#')]), t._v(' 6、combineReducers // 合并')]), t._v(' '), r('div', { staticClass: 'language- extra-class' }, [r('pre', { pre: !0, attrs: { class: 'language-text' }}, [r('code', [t._v("import {combineReducers} from 'redux';\nimport cart from './cart';\nimport my from './my';\n\nexport default combineReducers({\n    cart,\n    my\n})\n")])])])]) }], !1, null, null, null); s.options.__file = 'redux.md'; e.default = s.exports } }])
