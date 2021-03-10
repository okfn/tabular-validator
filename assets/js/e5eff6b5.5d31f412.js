(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{150:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(8),o=(r(0),r(159)),i={title:"Report Guide"},l={unversionedId:"guides/framework/report-guide",id:"guides/framework/report-guide",isDocsHomePage:!1,title:"Report Guide",description:"Validation Report",source:"@site/../docs/guides/framework/report-guide.md",slug:"/guides/framework/report-guide",permalink:"/docs/guides/framework/report-guide",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/guides/framework/report-guide.md",version:"current",lastUpdatedBy:"Peter Desmet",lastUpdatedAt:1615412210,formattedLastUpdatedAt:"3/10/2021",sidebar:"guides",previous:{title:"Inquiry Guide",permalink:"/docs/guides/framework/inquiry-guide"},next:{title:"Pipeline Guide",permalink:"/docs/guides/framework/pipeline-guide"}},s=[{value:"Validation Report",id:"validation-report",children:[]},{value:"Validation Errors",id:"validation-errors",children:[]}],c={toc:s};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"validation-report"},"Validation Report"),Object(o.b)("p",null,"All the ",Object(o.b)("inlineCode",{parentName:"p"},"validate")," functions return the Validation Report. It's an unified object containing information about a validation: source details, found error, etc. Let's explore a report:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from pprint import pprint\nfrom frictionless import validate\n\nreport = validate('data/capital-invalid.csv', pick_errors=['duplicate-header'])\npprint(report)\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"{'errors': [],\n 'stats': {'errors': 1, 'tables': 1},\n 'tables': [{'compression': 'no',\n             'compressionPath': '',\n             'dialect': {},\n             'encoding': 'utf-8',\n             'errors': [{'cell': 'name',\n                         'cells': ['id', 'name', 'name'],\n                         'code': 'duplicate-header',\n                         'description': 'Two columns in the header row have '\n                                        'the same value. Column names should '\n                                        'be unique.',\n                         'fieldName': 'name2',\n                         'fieldNumber': 3,\n                         'fieldPosition': 3,\n                         'message': 'Header \"name\" in field at position \"3\" is '\n                                    'duplicated to header in another field: at '\n                                    'position \"2\"',\n                         'name': 'Duplicate Header',\n                         'note': 'at position \"2\"',\n                         'tags': ['#head', '#structure']}],\n             'format': 'csv',\n             'hashing': 'md5',\n             'header': ['id', 'name', 'name'],\n             'partial': False,\n             'path': 'data/capital-invalid.csv',\n             'query': {},\n             'schema': {'fields': [{'name': 'id', 'type': 'integer'},\n                                   {'name': 'name', 'type': 'string'},\n                                   {'name': 'name2', 'type': 'string'}]},\n             'scheme': 'file',\n             'scope': ['duplicate-header'],\n             'stats': {'bytes': 171,\n                       'errors': 1,\n                       'fields': 3,\n                       'hash': 'dcdeae358cfd50860c18d953e021f836',\n                       'rows': 11},\n             'time': 0.019,\n             'valid': False}],\n 'time': 0.019,\n 'valid': False,\n 'version': '3.38.1'}\n")),Object(o.b)("p",null,'As we can see, there are a lot of information; you can find its details description in "API Reference". Errors are grouped by tables; for some validation there are can be dozens of tables. Let\'s use the ',Object(o.b)("inlineCode",{parentName:"p"},"report.flatten")," function to simplify errors representation:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import validate\n\nreport = validate('data/capital-invalid.csv', pick_errors=['duplicate-header'])\npprint(report.flatten(['rowPosition', 'fieldPosition', 'code', 'message']))\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[[None,\n  3,\n  'duplicate-header',\n  'Header \"name\" in field at position \"3\" is duplicated to header in another '\n  'field: at position \"2\"']]\n")),Object(o.b)("p",null,"In some situation, an error can't be associated with a table; then it goes to the top-level ",Object(o.b)("inlineCode",{parentName:"p"},"report.errors")," property:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import validate_schema\n\nreport = validate_schema('bad.json')\npprint(report)\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"{'errors': [{'code': 'schema-error',\n             'description': 'Provided schema is not valid.',\n             'message': 'The data source could not be successfully described '\n                        'by the invalid Table Schema: cannot extract metadata '\n                        '\"bad.json\" because \"[Errno 2] No such file or '\n                        'directory: \\'bad.json\\'\"',\n             'name': 'Schema Error',\n             'note': 'cannot extract metadata \"bad.json\" because \"[Errno 2] No '\n                     'such file or directory: \\'bad.json\\'\"',\n             'tags': ['#table', '#schema']}],\n 'stats': {'errors': 1, 'tables': 0},\n 'tables': [],\n 'time': 0.0,\n 'valid': False,\n 'version': '3.38.1'}\n")),Object(o.b)("h2",{id:"validation-errors"},"Validation Errors"),Object(o.b)("p",null,"The Error object is at the heart of the validation process. The Report has ",Object(o.b)("inlineCode",{parentName:"p"},"report.errors")," and ",Object(o.b)("inlineCode",{parentName:"p"},"report.tables[].errors")," properties that can contain the Error object. Let's explore it:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import validate\n\nreport = validate('data/capital-invalid.csv', pick_errors=['duplicate-header'])\nerror = report.table.error # it's only available for 1 table / 1 error sitution\nprint(f'Code: \"{error.code}\"')\nprint(f'Name: \"{error.name}\"')\nprint(f'Tags: \"{error.tags}\"')\nprint(f'Note: \"{error.note}\"')\nprint(f'Message: \"{error.message}\"')\nprint(f'Description: \"{error.description}\"')\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'Code: "duplicate-header"\nName: "Duplicate Header"\nTags: "[\'#head\', \'#structure\']"\nNote: "at position "2""\nMessage: "Header "name" in field at position "3" is duplicated to header in another field: at position "2""\nDescription: "Two columns in the header row have the same value. Column names should be unique."\n')),Object(o.b)("p",null,"Above, we have listed universal error properties. Depending on the type of an error there can be additional ones. For example, for our ",Object(o.b)("inlineCode",{parentName:"p"},"duplicate-header")," error:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import validate\n\nreport = validate('data/capital-invalid.csv', pick_errors=['duplicate-header'])\nerror = report.table.error # it's only available for 1 table / 1 error sitution\npprint(error)\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"{'cell': 'name',\n 'cells': ['id', 'name', 'name'],\n 'code': 'duplicate-header',\n 'description': 'Two columns in the header row have the same value. Column '\n                'names should be unique.',\n 'fieldName': 'name2',\n 'fieldNumber': 3,\n 'fieldPosition': 3,\n 'message': 'Header \"name\" in field at position \"3\" is duplicated to header in '\n            'another field: at position \"2\"',\n 'name': 'Duplicate Header',\n 'note': 'at position \"2\"',\n 'tags': ['#head', '#structure']}\n")),Object(o.b)("p",null,'Please explore "Errors Reference" to learn about all the available errors and their properties.'))}d.isMDXComponent=!0},159:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return r?a.a.createElement(b,l(l({ref:t},c),{},{components:r})):a.a.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);