(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{154:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(8),o=(r(0),r(159)),i={title:"Buffer Tutorial",sidebar_label:"Buffer"},c={unversionedId:"tutorials/schemes/buffer-tutorial",id:"tutorials/schemes/buffer-tutorial",isDocsHomePage:!1,title:"Buffer Tutorial",description:"Frictionless supports reading bytes loaded into from memory.",source:"@site/../docs/tutorials/schemes/buffer-tutorial.md",slug:"/tutorials/schemes/buffer-tutorial",permalink:"/docs/tutorials/schemes/buffer-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/schemes/buffer-tutorial.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1615364042,formattedLastUpdatedAt:"3/10/2021",sidebar_label:"Buffer",sidebar:"tutorials",previous:{title:"Working with API",permalink:"/docs/tutorials/working-with-api"},next:{title:"Local Tutorial",permalink:"/docs/tutorials/schemes/local-tutorial"}},u=[{value:"Reading Buffer Data",id:"reading-buffer-data",children:[]},{value:"Writing Buffer Data",id:"writing-buffer-data",children:[]},{value:"Configuring Buffer Data",id:"configuring-buffer-data",children:[]}],l={toc:u};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Frictionless supports reading bytes loaded into from memory."),Object(o.b)("h2",{id:"reading-buffer-data"},"Reading Buffer Data"),Object(o.b)("p",null,"You can read Buffer Data using ",Object(o.b)("inlineCode",{parentName:"p"},"Package/Resource")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Table")," API, for example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import Resource\n\nresource = Resource(b'id,name\\n1,english\\n2,german', format='csv')\nprint(resource.read_rows())\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[Row([('id', 1), ('name', 'english')]), Row([('id', 2), ('name', 'german')])]\n")),Object(o.b)("h2",{id:"writing-buffer-data"},"Writing Buffer Data"),Object(o.b)("p",null,"The same is actual for writing Buffer Data:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import Resource\n\nresource = Resource(data=[['id', 'name'], [1, 'english'], [2, 'german']])\nresource.write(scheme='buffer', format='csv')\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"b'id,name\\r\\n1,english\\r\\n2,german\\r\\n'\n")),Object(o.b)("h2",{id:"configuring-buffer-data"},"Configuring Buffer Data"),Object(o.b)("p",null,"There are no options available in ",Object(o.b)("inlineCode",{parentName:"p"},"BufferControl"),"."),Object(o.b)("p",null,"References:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/references/schemes-reference#buffer"},"Buffer Control"))))}s.isMDXComponent=!0},159:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(r),b=n,d=f["".concat(i,".").concat(b)]||f[b]||p[b]||o;return r?a.a.createElement(d,c(c({ref:t},l),{},{components:r})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);