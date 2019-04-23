(window.webpackJsonp = window.webpackJsonp || []).push([[57], { 153: function (e, t, a) { 'use strict'; a.r(t); var r = a(0), s = Object(r.a)({}, function () { this.$createElement; this._self._c; return this._m(0) }, [function () { var e = this, t = e.$createElement, a = e._self._c || t; return a('div', { staticClass: 'content' }, [a('h1', { attrs: { id: 'redux中间件' }}, [a('a', { staticClass: 'header-anchor', attrs: { href: '#redux中间件', 'aria-hidden': 'true' }}, [e._v('#')]), e._v(' Redux中间件')]), e._v(' '), a('h5', { attrs: { id: '_1、applymiddleware' }}, [a('a', { staticClass: 'header-anchor', attrs: { href: '#_1、applymiddleware', 'aria-hidden': 'true' }}, [e._v('#')]), e._v(' 1、applyMiddleware')]), e._v(' '), a('ul', [a('li', [e._v('方便调试，实时触发，线下使用')])]), e._v(' '), a('div', { staticClass: 'language- extra-class' }, [a('pre', { pre: !0, attrs: { class: 'language-text' }}, [a('code', [e._v("import {createStore，applyMiddleware} from 'redux';\nimport reducers from './reducers';\nimport Logger from 'redux-logger';\n\nexport default createStore(reducers, applyMiddleware(Logger))\n")])])]), a('h5', { attrs: { id: '_2、redux-thunk' }}, [a('a', { staticClass: 'header-anchor', attrs: { href: '#_2、redux-thunk', 'aria-hidden': 'true' }}, [e._v('#')]), e._v(' 2、redux-thunk')]), e._v(' '), a('ul', [a('li', [e._v('目的：异步解决方案')]), e._v(' '), a('li', [e._v('支持action的写法有对象变为函数')]), e._v(' '), a('li', [e._v('可以发送多个dispatch')]), e._v(' '), a('li', [e._v('改变action')]), e._v(' '), a('li', [e._v('同时会帮我们注入两个参数dispatch和getState')]), e._v(' '), a('li', [e._v('在异步操作完成之后再触发dispatch操作')])]), e._v(' '), a('div', { staticClass: 'language- extra-class' }, [a('pre', { pre: !0, attrs: { class: 'language-text' }}, [a('code', [e._v('dispatch((dispatch, getState)=>{\n    // getState可以获取全局的state\n    dispatch({\n        type:"START"\n    })\n    fetch(\'/data.json\')\n    .then(res=>res.json())\n    .then(success=>{\n        if(success){\n            dispatch({\n                type:"FETCH_LIST",\n                payLoad:success.arr\n            })\n        }else{\n            dispatch({\n                type:"FETCH_TAIL"\n            })\n        }\n    })\n})\n')])])]), a('h5', { attrs: { id: '_3、redux-saga' }}, [a('a', { staticClass: 'header-anchor', attrs: { href: '#_3、redux-saga', 'aria-hidden': 'true' }}, [e._v('#')]), e._v(' 3、redux-saga')]), e._v(' '), a('ul', [a('li', [e._v('拦截请求')]), e._v(' '), a('li', [e._v('解决异步')]), e._v(' '), a('li', [e._v('不会改变action')]), e._v(' '), a('li', [e._v('take 拦截')]), e._v(' '), a('li', [e._v('takeEvery 每次都拦截')])]), e._v(' '), a('h5', { attrs: { id: '_4、redux-thunk' }}, [a('a', { staticClass: 'header-anchor', attrs: { href: '#_4、redux-thunk', 'aria-hidden': 'true' }}, [e._v('#')]), e._v(' 4、redux-thunk')]), e._v(' '), a('ul', [a('li', [e._v('改写action')])])]) }], !1, null, null, null); s.options.__file = 'redux中间件.md'; t.default = s.exports } }])
