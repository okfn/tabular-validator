(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{116:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(157)),i={title:"Pandas Tutorial",sidebar_label:"Pandas"},c={unversionedId:"tutorials/formats/pandas-tutorial",id:"tutorials/formats/pandas-tutorial",isDocsHomePage:!1,title:"Pandas Tutorial",description:"This functionality requires an experimental pandas plugin. Read More",source:"@site/../docs/tutorials/formats/pandas-tutorial.md",slug:"/tutorials/formats/pandas-tutorial",permalink:"/docs/tutorials/formats/pandas-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/formats/pandas-tutorial.md",version:"current",lastUpdatedBy:"thill-odi",lastUpdatedAt:1614982828,sidebar_label:"Pandas",sidebar:"tutorials",previous:{title:"ODS Tutorial",permalink:"/docs/tutorials/formats/ods-tutorial"},next:{title:"SPSS Tutorial",permalink:"/docs/tutorials/formats/spss-tutorial"}},s=[{value:"Reading from Pandas",id:"reading-from-pandas",children:[]},{value:"Writing to Pandas",id:"writing-to-pandas",children:[]},{value:"Configuring Pandas",id:"configuring-pandas",children:[]}],l={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This functionality requires an experimental ",Object(o.b)("inlineCode",{parentName:"p"},"pandas")," plugin. ",Object(o.b)("a",{parentName:"p",href:"/docs/references/plugins-reference"},"Read More"))),Object(o.b)("p",null,"Frictionless supports reading and writing Pandas dataframes."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"! pip install frictionless[pandas]\n")),Object(o.b)("h2",{id:"reading-from-pandas"},"Reading from Pandas"),Object(o.b)("p",null,"You can read a Pandas dataframe:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Package\n\npackage = Package.from_pandas(dataframes=['table1': '<df1>', 'tables2': '<df2>'])\nprint(package)\nfor resource in package.resources:\n  print(resource.read_rows())\n")),Object(o.b)("h2",{id:"writing-to-pandas"},"Writing to Pandas"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"[NOTE]")," Timezone information is ignored for ",Object(o.b)("inlineCode",{parentName:"p"},"datetime")," and ",Object(o.b)("inlineCode",{parentName:"p"},"time")," types.")),Object(o.b)("p",null,"You can write a dataset to Pandas:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Package\n\npackage = Package('path/to/datapackage.json')\ndataframes = package.to_pandas()\n")),Object(o.b)("h2",{id:"configuring-pandas"},"Configuring Pandas"),Object(o.b)("p",null,"There are no options available in ",Object(o.b)("inlineCode",{parentName:"p"},"PandasDialect"),"."),Object(o.b)("p",null,"References:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/references/formats-reference#pandas"},"Pandas Dialect"))))}p.isMDXComponent=!0},157:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return a?r.a.createElement(f,c(c({ref:t},l),{},{components:a})):r.a.createElement(f,c({ref:t},l))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);