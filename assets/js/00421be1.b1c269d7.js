(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{159:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(f,c(c({ref:t},s),{},{components:r})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},69:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(8),o=(r(0),r(159)),i={title:"CKAN Tutorial",sidebar_label:"CKAN"},c={unversionedId:"tutorials/formats/ckan-tutorial",id:"tutorials/formats/ckan-tutorial",isDocsHomePage:!1,title:"CKAN Tutorial",description:"This functionality requires an experimental ckan plugin. Read More",source:"@site/../docs/tutorials/formats/ckan-tutorial.md",slug:"/tutorials/formats/ckan-tutorial",permalink:"/docs/tutorials/formats/ckan-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/formats/ckan-tutorial.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1615364042,formattedLastUpdatedAt:"3/10/2021",sidebar_label:"CKAN",sidebar:"tutorials",previous:{title:"BugQuery Tutorial",permalink:"/docs/tutorials/formats/bigquery-tutorial"},next:{title:"CSV Tutorial",permalink:"/docs/tutorials/formats/csv-tutorial"}},l=[{value:"Reading from CKAN",id:"reading-from-ckan",children:[]},{value:"Writing to CKAN",id:"writing-to-ckan",children:[]},{value:"Configuring CKAN",id:"configuring-ckan",children:[]}],s={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This functionality requires an experimental ",Object(o.b)("inlineCode",{parentName:"p"},"ckan")," plugin. ",Object(o.b)("a",{parentName:"p",href:"/docs/references/plugins-reference"},"Read More"))),Object(o.b)("p",null,"Frictionless supports reading and writing CKAN datasets."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"! pip install frictionless[ckan]\n")),Object(o.b)("h2",{id:"reading-from-ckan"},"Reading from CKAN"),Object(o.b)("p",null,"You can read a CKAN dataset:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Package\n\npackage = Package.from_ckan(base_url='<base_url>', dataset_id='<dataset_id>', api_key='<api_key>')\nprint(package)\nfor resource in package.resources:\n  print(resource.read_rows())\n")),Object(o.b)("h2",{id:"writing-to-ckan"},"Writing to CKAN"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"[NOTE]")," Timezone information is ignored for ",Object(o.b)("inlineCode",{parentName:"p"},"datetime")," and ",Object(o.b)("inlineCode",{parentName:"p"},"time")," types.")),Object(o.b)("p",null,"You can write a dataset to CKAN:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Package\n\npackage = Package('path/to/datapackage.json')\npackage.to_ckan(base_url='<base_url>', dataset_id='<dataset_id>', api_key='<api_key>')\n")),Object(o.b)("h2",{id:"configuring-ckan"},"Configuring CKAN"),Object(o.b)("p",null,"There is a dialect to configure how Frictionless read and write files in this format. For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\nfrom frictionless.plugins.ckan import CkanDialect\n\ndialect = CkanDialect(resource='resource', dataset='dataset', apikey='apikey')\nresource = Resource('https://ckan-portal.com', format='ckan', dialect=dialect)\n")),Object(o.b)("p",null,"References:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/references/formats-reference#ckan"},"Ckan Dialect"))))}u.isMDXComponent=!0}}]);