(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{100:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),l=(r(0),r(157)),o={title:"Excel Tutorial",sidebar_label:"Excel"},i={unversionedId:"tutorials/formats/excel-tutorial",id:"tutorials/formats/excel-tutorial",isDocsHomePage:!1,title:"Excel Tutorial",description:"Excel is a very popular tabular data format that usually has xlsx (newer) and xls (older) file extensions. Frictionless supports Excel files extensively.",source:"@site/../docs/tutorials/formats/excel-tutorial.md",slug:"/tutorials/formats/excel-tutorial",permalink:"/docs/tutorials/formats/excel-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/formats/excel-tutorial.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1614853302,sidebar_label:"Excel",sidebar:"tutorials",previous:{title:"CSV Tutorial",permalink:"/docs/tutorials/formats/csv-tutorial"},next:{title:"Google Sheets Tutorial",permalink:"/docs/tutorials/formats/gsheets-tutorial"}},c=[{value:"Reading Excel",id:"reading-excel",children:[]},{value:"Writing Excel",id:"writing-excel",children:[]},{value:"Configuring Excel",id:"configuring-excel",children:[]}],s={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Excel is a very popular tabular data format that usually has ",Object(l.b)("inlineCode",{parentName:"p"},"xlsx")," (newer) and ",Object(l.b)("inlineCode",{parentName:"p"},"xls")," (older) file extensions. Frictionless supports Excel files extensively."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"!pip install frictionless[excel]\n")),Object(l.b)("h2",{id:"reading-excel"},"Reading Excel"),Object(l.b)("p",null,"You can read this format using ",Object(l.b)("inlineCode",{parentName:"p"},"Package/Resource")," or ",Object(l.b)("inlineCode",{parentName:"p"},"Table")," API, for example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nresource = Resource(path='data/table.xlsx')\nprint(resource.read_rows())\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"[Row([('id', 1), ('name', 'english')]), Row([('id', 2), ('name', '\u4e2d\u56fd\u4eba')])]\n")),Object(l.b)("h2",{id:"writing-excel"},"Writing Excel"),Object(l.b)("p",null,"The same is actual for writing:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nresource = Resource(data=[['id', 'name'], [1, 'english'], [2, 'german']])\nresource.write('tmp/table.xlsx')\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"'tmp/table.xlsx'\n")),Object(l.b)("h2",{id:"configuring-excel"},"Configuring Excel"),Object(l.b)("p",null,"There is a dialect to configure how Frictionless read and write files in this format. For example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\nfrom frictionless.plugins.excel import ExcelDialect\n\nresource = Resource(data=[['id', 'name'], [1, 'english'], [2, 'german']])\nresource.write('tmp/table.xlsx', dialect=ExcelDialect(sheet='My Table'))\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"'tmp/table.xlsx'\n")),Object(l.b)("p",null,"References:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/references/formats-reference#excel"},"Excel Dialect"))))}u.isMDXComponent=!0},157:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||l;return r?a.a.createElement(f,i(i({ref:t},s),{},{components:r})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);