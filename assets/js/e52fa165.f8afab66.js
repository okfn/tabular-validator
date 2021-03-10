(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(8),o=(a(0),a(159)),i={title:"Layout Guide"},l={unversionedId:"guides/framework/layout-guide",id:"guides/framework/layout-guide",isDocsHomePage:!1,title:"Layout Guide",description:"The Layout concept give us an ability to manage table header and pick/skip arbitrary fields and rows from the raw data stream.",source:"@site/../docs/guides/framework/layout-guide.md",slug:"/guides/framework/layout-guide",permalink:"/docs/guides/framework/layout-guide",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/guides/framework/layout-guide.md",version:"current",lastUpdatedBy:"Peter Desmet",lastUpdatedAt:1615412210,formattedLastUpdatedAt:"3/10/2021",sidebar:"guides",previous:{title:"Field Guide",permalink:"/docs/guides/framework/field-guide"},next:{title:"Detector Guide",permalink:"/docs/guides/framework/detector-guide"}},c=[{value:"Layout Usage",id:"layout-usage",children:[]},{value:"Layout Options",id:"layout-options",children:[{value:"Header",id:"header",children:[]},{value:"Header Rows",id:"header-rows",children:[]},{value:"Header Join",id:"header-join",children:[]},{value:"Header Case",id:"header-case",children:[]},{value:"Pick/Skip Fields",id:"pickskip-fields",children:[]},{value:"Limit/Offset Fields",id:"limitoffset-fields",children:[]},{value:"Pick/Skip Rows",id:"pickskip-rows",children:[]},{value:"Limit/Offset Rows",id:"limitoffset-rows",children:[]}]}],s={toc:c};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Layout concept give us an ability to manage table header and pick/skip arbitrary fields and rows from the raw data stream."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"cat data/matrix.csv\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csv"},"f1,f2,f3,f4\n11,12,13,14\n21,22,23,24\n31,32,33,34\n41,42,43,44\n")),Object(o.b)("h2",{id:"layout-usage"},"Layout Usage"),Object(o.b)("p",null,"The Layout class instance are accepted by many classes and functions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Resource"),Object(o.b)("li",{parentName:"ul"},"describe"),Object(o.b)("li",{parentName:"ul"},"extract"),Object(o.b)("li",{parentName:"ul"},"validate"),Object(o.b)("li",{parentName:"ul"},"and more")),Object(o.b)("p",null,"You just need to create a Layout instance using desired options and pass to the classed and function from above."),Object(o.b)("h2",{id:"layout-options"},"Layout Options"),Object(o.b)("p",null,"Let's list all the available Layout options with simple usage examples:"),Object(o.b)("h3",{id:"header"},"Header"),Object(o.b)("p",null,"It's a boolean flag which defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"True")," indicating whether the data has a header row or not. In the following example the header row will be treated as a data row:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Table, Layout\n\nlayout = Layout(header=False)\nwith Resource('data/capital-3.csv', layout=layout) as resource:\n  pprint(resource.header)\n  pprint(resource.read_rows())\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[]\n[Row([('field1', 'id'), ('field2', 'name')]),\n Row([('field1', '1'), ('field2', 'London')]),\n Row([('field1', '2'), ('field2', 'Berlin')]),\n Row([('field1', '3'), ('field2', 'Paris')]),\n Row([('field1', '4'), ('field2', 'Madrid')]),\n Row([('field1', '5'), ('field2', 'Rome')])]\n")),Object(o.b)("h3",{id:"header-rows"},"Header Rows"),Object(o.b)("p",null,"If header is ",Object(o.b)("inlineCode",{parentName:"p"},"True")," which is default, this parameters indicates where to find the header row or header rows for a multiline header. Let's see on example how the first two data rows can be treated as a part of a header:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Table, Layout\n\nlayout = Layout(header_rows=[1, 2, 3])\nwith Resource('data/capital-3.csv', layout=layout) as resource:\n  pprint(resource.header)\n  pprint(resource.read_rows())\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"['id 1 2', 'name London Berlin']\n[Row([('id 1 2', 3), ('name London Berlin', 'Paris')]),\n Row([('id 1 2', 4), ('name London Berlin', 'Madrid')]),\n Row([('id 1 2', 5), ('name London Berlin', 'Rome')])]\n")),Object(o.b)("h3",{id:"header-join"},"Header Join"),Object(o.b)("p",null,"If there are multiple header rows which is managed by ",Object(o.b)("inlineCode",{parentName:"p"},"header_rows")," parameter, we can set a string to be a separator for a header's cell join operation. Usually it's very handy for some \"fancy\" Excel files. For the sake of simplicity, we will show on a CSV file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Table, Layout\n\nlayout = Layout(header_rows=[1, 2, 3], header_join='/')\nwith Resource('data/capital-3.csv', layout=layout) as resource:\n  pprint(resource.header)\n  pprint(resource.read_rows())\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"['id/1/2', 'name/London/Berlin']\n[Row([('id/1/2', 3), ('name/London/Berlin', 'Paris')]),\n Row([('id/1/2', 4), ('name/London/Berlin', 'Madrid')]),\n Row([('id/1/2', 5), ('name/London/Berlin', 'Rome')])]\n")),Object(o.b)("h3",{id:"header-case"},"Header Case"),Object(o.b)("p",null,"By default a header is validated in a case sensitive mode. To disable this behaviour we can set the ",Object(o.b)("inlineCode",{parentName:"p"},"header_case")," parameter to ",Object(o.b)("inlineCode",{parentName:"p"},"False"),". This option is accepted by any Layout and a dialect can be passed to ",Object(o.b)("inlineCode",{parentName:"p"},"extract"),", ",Object(o.b)("inlineCode",{parentName:"p"},"validate")," and other functions. Please note that it doesn't affect a resulting header it only affects how it's validated:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Table, Schema, Field, Layout\n\nlayout = Layout(header_case=False)\nschema = Schema(fields=[Field(name=\"ID\"), Field(name=\"NAME\")])\nwith Resource('data/capital-3.csv', layout=layout, schema=schema) as resource:\n  print(f'Header: {resource.header}')\n  print(f'Valid: {resource.header.valid}')  # without \"header_case\" it will have 2 errors\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Header: ['id', 'name']\nValid: True\n")),Object(o.b)("h3",{id:"pickskip-fields"},"Pick/Skip Fields"),Object(o.b)("p",null,"We can pick and skip arbitrary fields based on a header row. These options accept a list of field numbers, a list of strings or a regex to match. All the queries below do the same thing for this file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import extract, Layout\n\nprint(extract('data/matrix.csv', layout=Layout(pick_fields=[2, 3])))\nprint(extract('data/matrix.csv', layout=Layout(skip_fields=[1, 4])))\nprint(extract('data/matrix.csv', layout=Layout(pick_fields=['f2', 'f3'])))\nprint(extract('data/matrix.csv', layout=Layout(skip_fields=['f1', 'f4'])))\nprint(extract('data/matrix.csv', layout=Layout(pick_fields=['<regex>f[23]'])))\nprint(extract('data/matrix.csv', layout=Layout(skip_fields=['<regex>f[14]'])))\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[Row([('f2', 12), ('f3', 13)]), Row([('f2', 22), ('f3', 23)]), Row([('f2', 32), ('f3', 33)]), Row([('f2', 42), ('f3', 43)])]\n[Row([('f2', 12), ('f3', 13)]), Row([('f2', 22), ('f3', 23)]), Row([('f2', 32), ('f3', 33)]), Row([('f2', 42), ('f3', 43)])]\n[Row([('f2', 12), ('f3', 13)]), Row([('f2', 22), ('f3', 23)]), Row([('f2', 32), ('f3', 33)]), Row([('f2', 42), ('f3', 43)])]\n[Row([('f2', 12), ('f3', 13)]), Row([('f2', 22), ('f3', 23)]), Row([('f2', 32), ('f3', 33)]), Row([('f2', 42), ('f3', 43)])]\n[Row([('f2', 12), ('f3', 13)]), Row([('f2', 22), ('f3', 23)]), Row([('f2', 32), ('f3', 33)]), Row([('f2', 42), ('f3', 43)])]\n[Row([('f2', 12), ('f3', 13)]), Row([('f2', 22), ('f3', 23)]), Row([('f2', 32), ('f3', 33)]), Row([('f2', 42), ('f3', 43)])]\n")),Object(o.b)("h3",{id:"limitoffset-fields"},"Limit/Offset Fields"),Object(o.b)("p",null,"There are two options that provide an ability to limit amount of fields similar to SQL's directives:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import extract, Layout\n\nprint(extract('data/matrix.csv', layout=Layout(limit_fields=2)))\nprint(extract('data/matrix.csv', layout=Layout(offset_fields=2)))\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[Row([('f1', 11), ('f2', 12)]), Row([('f1', 21), ('f2', 22)]), Row([('f1', 31), ('f2', 32)]), Row([('f1', 41), ('f2', 42)])]\n[Row([('f3', 13), ('f4', 14)]), Row([('f3', 23), ('f4', 24)]), Row([('f3', 33), ('f4', 34)]), Row([('f3', 43), ('f4', 44)])]\n")),Object(o.b)("h3",{id:"pickskip-rows"},"Pick/Skip Rows"),Object(o.b)("p",null,"It's alike the field counterparts but it will be compared to the first cell of a row. All the queries below do the same thing for this file but take into account that when picking we need to also pick a header row. In addition, there is special value ",Object(o.b)("inlineCode",{parentName:"p"},"<blank>")," that matches a row if it's completely blank:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import extract, Layout\n\nprint(extract('data/matrix.csv', layout=Layout(pick_rows=[1, 3, 4])))\nprint(extract('data/matrix.csv', layout=Layout(skip_rows=[2, 5])))\nprint(extract('data/matrix.csv', layout=Layout(pick_rows=['f1', '21', '31'])))\nprint(extract('data/matrix.csv', layout=Layout(skip_rows=['11', '41'])))\nprint(extract('data/matrix.csv', layout=Layout(pick_rows=['<regex>(f1|[23]1)'])))\nprint(extract('data/matrix.csv', layout=Layout(skip_rows=['<regex>[14]1'])))\nprint(extract('data/matrix.csv', layout=Layout(pick_rows=['<blank>'])))\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[Row([('f1', 21), ('f2', 22), ('f3', 23), ('f4', 24)]), Row([('f1', 31), ('f2', 32), ('f3', 33), ('f4', 34)])]\n[Row([('f1', 21), ('f2', 22), ('f3', 23), ('f4', 24)]), Row([('f1', 31), ('f2', 32), ('f3', 33), ('f4', 34)])]\n[Row([('f1', 21), ('f2', 22), ('f3', 23), ('f4', 24)]), Row([('f1', 31), ('f2', 32), ('f3', 33), ('f4', 34)])]\n[Row([('f1', 21), ('f2', 22), ('f3', 23), ('f4', 24)]), Row([('f1', 31), ('f2', 32), ('f3', 33), ('f4', 34)])]\n[Row([('f1', 21), ('f2', 22), ('f3', 23), ('f4', 24)]), Row([('f1', 31), ('f2', 32), ('f3', 33), ('f4', 34)])]\n[Row([('f1', 21), ('f2', 22), ('f3', 23), ('f4', 24)]), Row([('f1', 31), ('f2', 32), ('f3', 33), ('f4', 34)])]\n[]\n")),Object(o.b)("h3",{id:"limitoffset-rows"},"Limit/Offset Rows"),Object(o.b)("p",null,"This is a quite popular option used to limit amount of rows to read:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import extract, Layout\n\nprint(extract('data/matrix.csv', layout=Layout(limit_rows=2)))\nprint(extract('data/matrix.csv', layout=Layout(offset_rows=2)))\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[Row([('f1', 11), ('f2', 12), ('f3', 13), ('f4', 14)]), Row([('f1', 21), ('f2', 22), ('f3', 23), ('f4', 24)])]\n[Row([('f1', 31), ('f2', 32), ('f3', 33), ('f4', 34)]), Row([('f1', 41), ('f2', 42), ('f3', 43), ('f4', 44)])]\n")))}d.isMDXComponent=!0},159:function(e,t,a){"use strict";a.d(t,"a",(function(){return f})),a.d(t,"b",(function(){return b}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),d=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},f=function(e){var t=d(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=d(a),p=r,b=f["".concat(i,".").concat(p)]||f[p]||u[p]||o;return a?n.a.createElement(b,l(l({ref:t},s),{},{components:a})):n.a.createElement(b,l({ref:t},s))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);