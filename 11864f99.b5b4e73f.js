(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{156:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),s=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return r?n.a.createElement(b,c(c({ref:t},u),{},{components:r})):n.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),o=(r(0),r(156)),i={title:"Stream Tutorial",sidebar_label:"Stream"},c={unversionedId:"tutorials/stream-tutorial",id:"tutorials/stream-tutorial",isDocsHomePage:!1,title:"Stream Tutorial",description:"Frictionless supports loading Stream data.",source:"@site/../docs/tutorials/stream-tutorial.md",slug:"/tutorials/stream-tutorial",permalink:"/docs/tutorials/stream-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/stream-tutorial.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1613473663,sidebar_label:"Stream",sidebar:"tutorials",previous:{title:"S3 Tutorial",permalink:"/docs/tutorials/s3-tutorial"},next:{title:"BugQuery Tutorial",permalink:"/docs/tutorials/bigquery-tutorial"}},l=[{value:"Reading Stream Data",id:"reading-stream-data",children:[]},{value:"Writing Stream Data",id:"writing-stream-data",children:[]},{value:"Configuring Stream Data",id:"configuring-stream-data",children:[]}],u={toc:l};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Frictionless supports loading Stream data."),Object(o.b)("h2",{id:"reading-stream-data"},"Reading Stream Data"),Object(o.b)("p",null,"You can read Stream using ",Object(o.b)("inlineCode",{parentName:"p"},"Package/Resource")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Table")," API, for example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nwith open('data/table.csv', 'rb') as file:\n  resource = Resource(path=file, format='csv')\n  print(resource.read_rows())\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[Row([('id', 1), ('name', 'english')]), Row([('id', 2), ('name', '\u4e2d\u56fd\u4eba')])]\n")),Object(o.b)("h2",{id:"writing-stream-data"},"Writing Stream Data"),Object(o.b)("p",null,"The same is actual for writing CSV:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nresource = Resource(data=[['id', 'name'], [1, 'english'], [2, 'german']])\nresource.write(scheme='stream', format='csv')\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"<_io.BufferedReader name='/tmp/tmplh6mlh54'>\n")),Object(o.b)("h2",{id:"configuring-stream-data"},"Configuring Stream Data"),Object(o.b)("p",null,"There are no options available in ",Object(o.b)("inlineCode",{parentName:"p"},"StreamControl"),"."),Object(o.b)("p",null,"References:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://frictionlessdata.io/tooling/python/controls-reference/#stream"},"Stream Control"))))}s.isMDXComponent=!0}}]);