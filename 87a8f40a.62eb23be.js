(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{119:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(157)),i={title:"ODS Tutorial",sidebar_label:"ODS"},c={unversionedId:"tutorials/formats/ods-tutorial",id:"tutorials/formats/ods-tutorial",isDocsHomePage:!1,title:"ODS Tutorial",description:"Frictionless supports ODS parsing.",source:"@site/../docs/tutorials/formats/ods-tutorial.md",slug:"/tutorials/formats/ods-tutorial",permalink:"/docs/tutorials/formats/ods-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/formats/ods-tutorial.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1614853302,sidebar_label:"ODS",sidebar:"tutorials",previous:{title:"JSON Tutorial",permalink:"/docs/tutorials/formats/json-tutorial"},next:{title:"Pandas Tutorial",permalink:"/docs/tutorials/formats/pandas-tutorial"}},s=[{value:"Reading ODS",id:"reading-ods",children:[]},{value:"Writing ODS",id:"writing-ods",children:[]},{value:"Configuring ODS",id:"configuring-ods",children:[]}],l={toc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Frictionless supports ODS parsing."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"!pip install frictionless[ods]\n")),Object(a.b)("h2",{id:"reading-ods"},"Reading ODS"),Object(a.b)("p",null,"You can read this format using ",Object(a.b)("inlineCode",{parentName:"p"},"Package/Resource")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Table")," API, for example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nresource = Resource(path='data/table.ods')\nprint(resource.read_rows())\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"[Row([('id', 1), ('name', 'english')]), Row([('id', 2), ('name', '\u4e2d\u56fd\u4eba')])]\n")),Object(a.b)("h2",{id:"writing-ods"},"Writing ODS"),Object(a.b)("p",null,"The same is actual for writing:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nresource = Resource(data=[['id', 'name'], [1, 'english'], [2, 'german']])\nresource.write('tmp/table.ods')\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"'tmp/table.ods'\n")),Object(a.b)("h2",{id:"configuring-ods"},"Configuring ODS"),Object(a.b)("p",null,"There is a dialect to configure how Frictionless read and write files in this format. For example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\nfrom frictionless.plugins.ods import OdsDialect\n\nresource = Resource(data=[['id', 'name'], [1, 'english'], [2, 'german']])\nresource.write('tmp/table.ods', dialect=OdsDialect(sheet='My Table'))\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"'tmp/table.ods'\n")),Object(a.b)("p",null,"References:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/references/formats-reference#ods"},"ODS Dialect"))))}u.isMDXComponent=!0},157:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return r?o.a.createElement(m,c(c({ref:t},l),{},{components:r})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);