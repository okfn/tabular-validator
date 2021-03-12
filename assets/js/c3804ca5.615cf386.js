(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{140:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return d}));var n=t(3),o=t(8),i=(t(0),t(159)),a={title:"Error Guide"},c={unversionedId:"guides/extension/error-guide",id:"guides/extension/error-guide",isDocsHomePage:!1,title:"Error Guide",description:"The Error class is a metadata with no behavior. It's used to describe an error that happened during Framework work or during the validation.",source:"@site/../docs/guides/extension/error-guide.md",slug:"/guides/extension/error-guide",permalink:"/docs/guides/extension/error-guide",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/guides/extension/error-guide.md",version:"current",lastUpdatedBy:"Andr\xe9 Amorim",lastUpdatedAt:1615582166,formattedLastUpdatedAt:"3/12/2021",sidebar:"guides",previous:{title:"Type Guide",permalink:"/docs/guides/extension/type-guide"},next:{title:"Server Guide",permalink:"/docs/guides/extension/server-guide"}},u=[{value:"Error Example",id:"error-example",children:[]}],s={toc:u};function d(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Error class is a metadata with no behavior. It's used to describe an error that happened during Framework work or during the validation."),Object(i.b)("h2",{id:"error-example"},"Error Example"),Object(i.b)("p",null,"To create a custom error you basically just need to fill the required class fields:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},'class DuplicateRowError(RowError):\n    code = "duplicate-row"\n    name = "Duplicate Row"\n    tags = ["#table", "#row"]\n    template = "Row at position {rowPosition} is duplicated: {note}"\n    description = "The row is duplicated."\n')))}d.isMDXComponent=!0},159:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),d=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=d(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=d(t),m=n,f=l["".concat(a,".").concat(m)]||l[m]||p[m]||i;return t?o.a.createElement(f,c(c({ref:r},s),{},{components:t})):o.a.createElement(f,c({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);