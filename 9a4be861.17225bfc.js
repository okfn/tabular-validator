(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{127:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),l=(r(0),r(157)),o={title:"HTML Tutorial",sidebar_label:"HTML"},i={unversionedId:"tutorials/formats/html-tutorial",id:"tutorials/formats/html-tutorial",isDocsHomePage:!1,title:"HTML Tutorial",description:"This functionality requires an experimental html plugin. Read More",source:"@site/../docs/tutorials/formats/html-tutorial.md",slug:"/tutorials/formats/html-tutorial",permalink:"/docs/tutorials/formats/html-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/formats/html-tutorial.md",version:"current",lastUpdatedBy:"Asura Enkhbayar",lastUpdatedAt:1614805412,sidebar_label:"HTML",sidebar:"tutorials",previous:{title:"Google Sheets Tutorial",permalink:"/docs/tutorials/formats/gsheets-tutorial"},next:{title:"Inline Tutorial",permalink:"/docs/tutorials/formats/inline-tutorial"}},c=[{value:"Reading HTML",id:"reading-html",children:[]},{value:"Writing HTML",id:"writing-html",children:[]},{value:"Configuring HTML",id:"configuring-html",children:[]}],u={toc:c};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"This functionality requires an experimental ",Object(l.b)("inlineCode",{parentName:"p"},"html")," plugin. ",Object(l.b)("a",{parentName:"p",href:"/docs/references/plugins-reference"},"Read More"))),Object(l.b)("p",null,"Frictionless supports parsing HTML format"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"!pip install frictionless[html]\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"! cat data/table1.html\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset="UTF-8">\n</head>\n<body>\n    <table>\n        <tr>\n            <td>id</td>\n            <td>name</td>\n        </tr>\n        <tr>\n            <td>1</td>\n            <td>english</td>\n        </tr>\n        <tr>\n            <td>2</td>\n            <td>\u4e2d\u56fd\u4eba</td>\n        </tr>\n    </table>\n</body>\n</html\n')),Object(l.b)("h2",{id:"reading-html"},"Reading HTML"),Object(l.b)("p",null,"You can this file format using ",Object(l.b)("inlineCode",{parentName:"p"},"Package/Resource")," or ",Object(l.b)("inlineCode",{parentName:"p"},"Table")," API, for example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nresource = Resource(path='data/table1.html')\nprint(resource.read_rows())\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"[Row([('id', 1), ('name', 'english')]), Row([('id', 2), ('name', '\u4e2d\u56fd\u4eba')])]\n")),Object(l.b)("h2",{id:"writing-html"},"Writing HTML"),Object(l.b)("p",null,"The same is actual for writing:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nresource = Resource(data=[['id', 'name'], [1, 'english'], [2, 'german']])\nresource.write('tmp/table.html')\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"'tmp/table.html'\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"!cat tmp/table.html\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"<html><body><table>\n<tr><td>id</td><td>name</td></tr>\n<tr><td>1</td><td>english</td></tr>\n<tr><td>2</td><td>german</td></tr>\n</table></body></html>\n")),Object(l.b)("h2",{id:"configuring-html"},"Configuring HTML"),Object(l.b)("p",null,"There is a dialect to configure HTML, for example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\nfrom frictionless.plugins.html import HtmlDialect\n\nresource = Resource(path='data/table1.html', dialect=HtmlDialect(selector='#id'))\nprint(resource.read_rows())\n")),Object(l.b)("p",null,"References:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/references/formats-reference#html"},"Html Dialect"))))}s.isMDXComponent=!0},157:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||l;return r?a.a.createElement(d,i(i({ref:t},u),{},{components:r})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);