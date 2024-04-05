/*! @license

The MIT License (MIT)

Copyright (c) 2023 alexbit-codemod

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
"use strict";var c=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var u=Object.prototype.hasOwnProperty;var p=(n,e)=>{for(var t in e)c(n,t,{get:e[t],enumerable:!0})},I=(n,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of d(e))!u.call(n,o)&&o!==t&&c(n,o,{get:()=>e[o],enumerable:!(s=m(e,o))||s.enumerable});return n};var h=n=>I(c({},"__esModule",{value:!0}),n);var N={};p(N,{default:()=>l});module.exports=h(N);function l(n,e,t){let s=e.jscodeshift,o=s(n.source);return o.find(s.ClassDeclaration).forEach(a=>{let r=a.value.id.name,i=!1;s(a).find(s.NewExpression).forEach(f=>{f.value.callee.name!==r&&(i=!0)}),i&&(a.value.comments=[s.commentBlock(" This class creates instances of its dependencies internally")])}),o.toSource()}
