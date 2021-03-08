(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{133:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(7),a=(r(0),r(157)),o={title:"Working with API"},c={unversionedId:"tutorials/working-with-api",id:"tutorials/working-with-api",isDocsHomePage:!1,title:"Working with API",description:"This functionality requires an experimental server plugin. Read More",source:"@site/../docs/tutorials/working-with-api.md",slug:"/tutorials/working-with-api",permalink:"/docs/tutorials/working-with-api",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/working-with-api.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1615205019,sidebar:"tutorials",previous:{title:"Working with CLI",permalink:"/docs/tutorials/working-with-cli"},next:{title:"Buffer Tutorial",permalink:"/docs/tutorials/schemes/buffer-tutorial"}},s=[{value:"Running API Server",id:"running-api-server",children:[]}],l={toc:s};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This functionality requires an experimental ",Object(a.b)("inlineCode",{parentName:"p"},"server")," plugin. ",Object(a.b)("a",{parentName:"p",href:"/docs/references/plugins-reference"},"Read More"))),Object(a.b)("p",null,"It's possible to start Frictionless API as a standalone server. This capability is highly experimental at the moment and ",Object(a.b)("strong",{parentName:"p"},"it's not tested to be secure"),". Please don't use the server in production environment."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"!pip install frictionless[server]\n")),Object(a.b)("h2",{id:"running-api-server"},"Running API Server"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ frictionless api\n")))}u.isMDXComponent=!0},157:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,d=p["".concat(o,".").concat(f)]||p[f]||b[f]||a;return r?i.a.createElement(d,c(c({ref:t},l),{},{components:r})):i.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);