(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{159:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},y=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),y=i,f=d["".concat(o,".").concat(y)]||d[y]||p[y]||a;return n?r.a.createElement(f,l(l({ref:t},u),{},{components:n})):r.a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var i=n(3),r=n(8),a=(n(0),n(159)),o={title:"Inquiry Guide",goodread:{cleanup:["rm capital.inquiry.yaml"]}},l={unversionedId:"guides/framework/inquiry-guide",id:"guides/framework/inquiry-guide",isDocsHomePage:!1,title:"Inquiry Guide",description:"The Inquiry gives you an ability to create arbitrary validation jobs containing a set of individual validation tasks.",source:"@site/../docs/guides/framework/inquiry-guide.md",slug:"/guides/framework/inquiry-guide",permalink:"/docs/guides/framework/inquiry-guide",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/guides/framework/inquiry-guide.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1615663871,formattedLastUpdatedAt:"3/13/2021",sidebar:"guides",previous:{title:"Detector Guide",permalink:"/docs/guides/framework/detector-guide"},next:{title:"Report Guide",permalink:"/docs/guides/framework/report-guide"}},c=[{value:"Creating Inquiry",id:"creating-inquiry",children:[]},{value:"Validating Inquiry",id:"validating-inquiry",children:[]}],u={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Inquiry gives you an ability to create arbitrary validation jobs containing a set of individual validation tasks."),Object(a.b)("h2",{id:"creating-inquiry"},"Creating Inquiry"),Object(a.b)("p",null,"Let's create an inquiry that includes an individual file validation and a resource validation:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'goodread title="Python"',goodread:!0,title:'"Python"'},"from frictionless import Inquiry\n\ninquiry = Inquiry({'tasks': [\n  {'source': 'data/capital-valid.csv'},\n  {'source': 'data/capital-invalid.csv'},\n]})\ninquiry.to_yaml('capital.inquiry.yaml')\n")),Object(a.b)("h2",{id:"validating-inquiry"},"Validating Inquiry"),Object(a.b)("p",null,"Tasks in the Inquiry accept the same arguments written in camelCase as the corresponding ",Object(a.b)("inlineCode",{parentName:"p"},"validate")," functions have. As usual, let' run validation:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash",metastring:'goodread title="CLI"',goodread:!0,title:'"CLI"'},"frictionless validate capital.inquiry.yaml\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'# -----\n# valid: data/capital-valid.csv\n# -----\n# -------\n# invalid: data/capital-invalid.csv\n# -------\n\n===  =====  ===============  ================================================================================================\nrow  field  code             message\n===  =====  ===============  ================================================================================================\n         3  duplicate-label  Label "name" in the header at position "3" is duplicated to a label: at position "2"\n 10      3  missing-cell     Row at position "10" has a missing cell in field "name2" at position "3"\n 11         blank-row        Row at position "11" is completely blank\n 12      1  type-error       Type error in the cell "x" in row "12" and field "id" at position "1": type is "integer/default"\n 12      4  extra-cell       Row at position "12" has an extra value in field at position "4"\n===  =====  ===============  ================================================================================================\n')),Object(a.b)("p",null,"At first sight, it's no clear why such a construct exists but when your validation workflow gets complex, the Inquiry can provide a lot of flexibility and power. Last but not least, the Inquiry will use multiprocessing if there are more than 1 task provided."))}s.isMDXComponent=!0}}]);