(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{157:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return r?a.a.createElement(d,c(c({ref:t},s),{},{components:r})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(157)),i={title:"CSV Tutorial",sidebar_label:"CSV"},c={unversionedId:"tutorials/formats/csv-tutorial",id:"tutorials/formats/csv-tutorial",isDocsHomePage:!1,title:"CSV Tutorial",description:"CSV is a file format which you can you in Frictionless for reading and writing. Arguable it's the main Open Data format so it's supported very well in Frictionless.",source:"@site/../docs/tutorials/formats/csv-tutorial.md",slug:"/tutorials/formats/csv-tutorial",permalink:"/docs/tutorials/formats/csv-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/formats/csv-tutorial.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1615205019,sidebar_label:"CSV",sidebar:"tutorials",previous:{title:"CKAN Tutorial",permalink:"/docs/tutorials/formats/ckan-tutorial"},next:{title:"Excel Tutorial",permalink:"/docs/tutorials/formats/excel-tutorial"}},l=[{value:"Reading CSV",id:"reading-csv",children:[]},{value:"Writing CSV",id:"writing-csv",children:[]},{value:"Configuring CSV",id:"configuring-csv",children:[]}],s={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"CSV is a file format which you can you in Frictionless for reading and writing. Arguable it's the main Open Data format so it's supported very well in Frictionless."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"! cat data/table.csv\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"id,name\n1,english\n2,\u4e2d\u56fd\u4eba\n")),Object(o.b)("h2",{id:"reading-csv"},"Reading CSV"),Object(o.b)("p",null,"You can read this format using ",Object(o.b)("inlineCode",{parentName:"p"},"Package/Resource")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Table")," API, for example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nresource = Resource(path='data/table.csv')\nprint(resource.read_rows())\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[Row([('id', 1), ('name', 'english')]), Row([('id', 2), ('name', '\u4e2d\u56fd\u4eba')])]\n")),Object(o.b)("h2",{id:"writing-csv"},"Writing CSV"),Object(o.b)("p",null,"The same is actual for writing:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nresource = Resource(data=[['id', 'name'], [1, 'english'], [2, 'german']])\nresource.write('tmp/table.csv')\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"'tmp/table.csv'\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"!cat tmp/table.csv\n")),Object(o.b)("h2",{id:"configuring-csv"},"Configuring CSV"),Object(o.b)("p",null,"There is a dialect to configure how Frictionless read and write files in this format. For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\nfrom frictionless.plugins.csv import CsvDialect\n\nresource = Resource(data=[['id', 'name'], [1, 'english'], [2, 'german']])\nresource.write('tmp/table.csv', dialect=CsvDialect(delimiter=';'))\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"'tmp/table.csv'\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"!cat tmp/table.csv\n")),Object(o.b)("p",null,"References:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/references/formats-reference#csv"},"Csv Dialect"))))}u.isMDXComponent=!0}}]);