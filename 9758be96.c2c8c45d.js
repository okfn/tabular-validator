(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{126:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),i=(t(0),t(157)),o={title:"Inline Tutorial",sidebar_label:"Inline"},l={unversionedId:"tutorials/formats/inline-tutorial",id:"tutorials/formats/inline-tutorial",isDocsHomePage:!1,title:"Inline Tutorial",description:"Frictionless supports parsing Inline Data.",source:"@site/../docs/tutorials/formats/inline-tutorial.md",slug:"/tutorials/formats/inline-tutorial",permalink:"/docs/tutorials/formats/inline-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/formats/inline-tutorial.md",version:"current",lastUpdatedBy:"jen-thomas",lastUpdatedAt:1614978839,sidebar_label:"Inline",sidebar:"tutorials",previous:{title:"HTML Tutorial",permalink:"/docs/tutorials/formats/html-tutorial"},next:{title:"JSON Tutorial",permalink:"/docs/tutorials/formats/json-tutorial"}},c=[{value:"Reading Inline Data",id:"reading-inline-data",children:[]},{value:"Writing Inline Data",id:"writing-inline-data",children:[]},{value:"Configuring Inline Data",id:"configuring-inline-data",children:[]}],s={toc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Frictionless supports parsing Inline Data."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"! cat data/table.csv\n")),Object(i.b)("h2",{id:"reading-inline-data"},"Reading Inline Data"),Object(i.b)("p",null,"You can read data in this format using ",Object(i.b)("inlineCode",{parentName:"p"},"Package/Resource")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Table")," API, for example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nresource = Resource(data=[['id', 'name'], [1, 'english'], [2, 'german']])\nprint(resource.read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[Row([('id', 1), ('name', 'english')]), Row([('id', 2), ('name', 'german')])]\n")),Object(i.b)("h2",{id:"writing-inline-data"},"Writing Inline Data"),Object(i.b)("p",null,"The same is actual for writing:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nresource = Resource(path='data/table.csv')\nresource.write(format='inline')\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[['id', 'name'], [1, 'english'], [2, '\u4e2d\u56fd\u4eba']]\n")),Object(i.b)("h2",{id:"configuring-inline-data"},"Configuring Inline Data"),Object(i.b)("p",null,"There is a dialect to configure this format, for example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\nfrom frictionless.plugins.inline import InlineDialect\n\ndialect = InlineDialect(keyed=True, keys=['name', 'id'])\nresource = Resource(data=[{'id': 1, 'name': 'english'}, {'id': 2, 'name': 'german'}], dialect=dialect)\nprint(resource.read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[Row([('name', 'english'), ('id', 1)]), Row([('name', 'german'), ('id', 2)])]\n")),Object(i.b)("p",null,"References:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/references/formats-reference#inline"},"Inline Dialect"))))}u.isMDXComponent=!0},157:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return t?a.a.createElement(m,l(l({ref:n},s),{},{components:t})):a.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);