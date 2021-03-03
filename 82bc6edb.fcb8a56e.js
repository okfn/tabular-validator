(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(157)),s={title:"Design Guide"},o={unversionedId:"guides/extension/design-guide",id:"guides/extension/design-guide",isDocsHomePage:!1,title:"Design Guide",description:"This guides provides a high-level overview of the Frictionless Framework architecture. It will be useful for plugin authors and advanced users.",source:"@site/../docs/guides/extension/design-guide.md",slug:"/guides/extension/design-guide",permalink:"/docs/guides/extension/design-guide",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/guides/extension/design-guide.md",version:"current",lastUpdatedBy:"Asura Enkhbayar",lastUpdatedAt:1614805412,sidebar:"guides",previous:{title:"Status Guide",permalink:"/docs/guides/framework/status-guide"},next:{title:"Plugin Guide",permalink:"/docs/guides/extension/plugin-guide"}},c=[{value:"System Object",id:"system-object",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This guides provides a high-level overview of the Frictionless Framework architecture. It will be useful for plugin authors and advanced users."),Object(i.b)("h2",{id:"system-object"},"System Object"),Object(i.b)("p",null,"The most important undelaying object in the Frictionless Framework is ",Object(i.b)("inlineCode",{parentName:"p"},"system"),". It's an singletone object avaialble as ",Object(i.b)("inlineCode",{parentName:"p"},"frictionless.system"),". This object can be used to instantiate different kind of lower-level as though ",Object(i.b)("inlineCode",{parentName:"p"},"Check"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Step"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"Type"),". Here is a quick example of using the ",Object(i.b)("inlineCode",{parentName:"p"},"system")," object:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import system\n\nresource = Resource(path='https://example.com/data/table.csv')\n\ncheck = system.create_check({'code': 'duplicate-row'})\ncontrol = system.create_control(resource, {'httpTimeout': 1000})\ndialect = system.create_dialect(resource, {'delimiter': ';'})\nloader = system.create_loader(resource)\nparser = system.create_parser(resource)\nserver = system.create_server('api')\nstep = system.create_step({'code': 'table-validate'})\nstorage = system.create_storage('sql', 'postgresql://database')\ntype = system.create_type(resource.get_field('id'))\n")),Object(i.b)("p",null,"As an extension author you might use the ",Object(i.b)("inlineCode",{parentName:"p"},"system")," object in various cases. For example, take a look at this ",Object(i.b)("inlineCode",{parentName:"p"},"MultipartLoader")," excerpts:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"def read_line_stream(self):\n    for number, path in enumerate(self.__path, start=1):\n        with system.create_loader(Resource(path=path)) as loader:\n            for line_number, line in enumerate(loader.byte_stream, start=1):\n                if not self.__headless and number > 1 and line_number == 1:\n                    continue\n                yield line\n")),Object(i.b)("p",null,"It's important to understand that creating low-level objects in general is more corect using the ",Object(i.b)("inlineCode",{parentName:"p"},"system")," object than just classes because it will include all the available plugins in the process."))}u.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.a.createElement(b,o(o({ref:t},l),{},{components:n})):a.a.createElement(b,o({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);