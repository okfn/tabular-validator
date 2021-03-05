(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{124:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return l})),t.d(a,"default",(function(){return d}));var r=t(3),n=t(7),i=(t(0),t(157)),o={title:"Validation Checks"},c={unversionedId:"guides/validation-checks",id:"guides/validation-checks",isDocsHomePage:!1,title:"Validation Checks",description:"This guide assumes basic familiarity with the Frictionless Framework. To learn more, please read the Introduction and Quick Start.",source:"@site/../docs/guides/validation-checks.md",slug:"/guides/validation-checks",permalink:"/docs/guides/validation-checks",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/guides/validation-checks.md",version:"current",lastUpdatedBy:"thill-odi",lastUpdatedAt:1614982828,sidebar:"guides",previous:{title:"Validation Guide",permalink:"/docs/guides/validation-guide"},next:{title:"Transform Guide",permalink:"/docs/guides/transform-guide"}},l=[{value:"Baseline Check",id:"baseline-check",children:[]},{value:"Heuristic Checks",id:"heuristic-checks",children:[{value:"Duplicate Row",id:"duplicate-row",children:[]},{value:"Deviated Value",id:"deviated-value",children:[]},{value:"Truncated Value",id:"truncated-value",children:[]}]},{value:"Regulation Checks",id:"regulation-checks",children:[{value:"Forbidden Value",id:"forbidden-value",children:[]},{value:"Sequential Value",id:"sequential-value",children:[]},{value:"Row Constraint",id:"row-constraint",children:[]}]}],s={toc:l};function d(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This guide assumes basic familiarity with the Frictionless Framework. To learn more, please read the ",Object(i.b)("a",{parentName:"p",href:"https://framework.frictionlessdata.io/docs/guides/introduction"},"Introduction")," and ",Object(i.b)("a",{parentName:"p",href:"https://framework.frictionlessdata.io/docs/guides/quick-start"},"Quick Start"),".")),Object(i.b)("p",null,"There are various validation checks included in the core Frictionless Framework along with an ability to create custom checks. Let's review what's in the box."),Object(i.b)("h2",{id:"baseline-check"},"Baseline Check"),Object(i.b)("p",null,"The Baseline Check is always enabled. It makes various small checks that reveal a great deal of tabular errors. There is a ",Object(i.b)("inlineCode",{parentName:"p"},"report.tables[].scope")," property to check which exact errors have been checked for:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from pprint import pprint\nfrom frictionless import validate\n\nreport = validate('data/capital-invalid.csv')\npprint(report.task.scope)\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"['hash-count-error',\n 'byte-count-error',\n 'field-count-error',\n 'row-count-error',\n 'blank-header',\n 'extra-label',\n 'missing-label',\n 'blank-label',\n 'duplicate-label',\n 'incorrect-label',\n 'blank-row',\n 'primary-key-error',\n 'foreign-key-error',\n 'extra-cell',\n 'missing-cell',\n 'type-error',\n 'constraint-error',\n 'unique-error']\n")),Object(i.b)("h2",{id:"heuristic-checks"},"Heuristic Checks"),Object(i.b)("p",null,"There is a group of checks that indicate probable errors. You need to use the ",Object(i.b)("inlineCode",{parentName:"p"},"checks")," argument of the ",Object(i.b)("inlineCode",{parentName:"p"},"validate")," function to activate one or more of these checks."),Object(i.b)("h3",{id:"duplicate-row"},"Duplicate Row"),Object(i.b)("p",null,"This checks for duplicate rows. You need to take into account that checking for duplicate rows can lead to high memory consumption on big files. Here is an example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},'from pprint import pprint\nfrom frictionless import validate, checks\n\nsource = b"header\\nvalue\\nvalue"\nreport = validate(source, format="csv", checks=[checks.duplicate_row()])\npprint(report.flatten(["code", "message"]))\nprint(report.flatten([\'code\', \'message\']))\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[['duplicate-row',\n  'Row at position 3 is duplicated: the same as row at position \"2\"']]\n")),Object(i.b)("h3",{id:"deviated-value"},"Deviated Value"),Object(i.b)("p",null,"This check uses Python's built-in ",Object(i.b)("inlineCode",{parentName:"p"},"statistics")," module to check a field's data for deviations. By default, deviated values are outside of the average +- three standard deviations. Take a look at the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/frictionless-py/blob/master/docs/target/api-reference/README.md#deviatedvaluecheck"},"API Reference")," for more details about available options and default values. The exact algorithm can be found ",Object(i.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/frictionless-py/blob/7ae8bae9a9197adbfe443233a6bad8a94e065ece/frictionless/checks/heuristic.py#L94"},"here"),". For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},'from pprint import pprint\nfrom frictionless import validate, checks\n\nsource = [["temperature"], [1], [-2], [7], [0], [1], [2], [5], [-4], [1000], [8], [3]]\nreport = validate(source, checks=[checks.deviated_value(field_name="temperature")])\npprint(report.flatten(["code", "message"]))\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[['deviated-value',\n  'There is a possible error because the value is deviated: value \"1000\" in '\n  'row at position \"10\" and field \"temperature\" is deviated \"[-809.88, '\n  '995.52]\"']]\n")),Object(i.b)("h3",{id:"truncated-value"},"Truncated Value"),Object(i.b)("p",null,"Sometime during data export from a database or other storage, data values can be truncated. This check tries to detect such truncation. Let's explore some truncation indicators:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},'from pprint import pprint\nfrom frictionless import validate, checks\n\nsource = [["int", "str"], ["a" * 255, 32767], ["good", 2147483647]]\nreport = validate(source, checks=[checks.truncated_value()])\npprint(report.flatten(["code", "message"]))\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[['truncated-value',\n  'The cell '\n  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa '\n  'in row at position 2 and field int at position 1 has an error: value  is '\n  'probably truncated'],\n ['truncated-value',\n  'The cell 32767 in row at position 2 and field str at position 2 has an '\n  'error: value  is probably truncated'],\n ['truncated-value',\n  'The cell 2147483647 in row at position 3 and field str at position 2 has an '\n  'error: value  is probably truncated']]\n")),Object(i.b)("h2",{id:"regulation-checks"},"Regulation Checks"),Object(i.b)("p",null,"Contrary to heuristic checks, regulation checks give you the ability to provide additional rules for your data. Use the ",Object(i.b)("inlineCode",{parentName:"p"},"checks")," argument of the ",Object(i.b)("inlineCode",{parentName:"p"},"validate")," function to active one or more of these checks."),Object(i.b)("h3",{id:"forbidden-value"},"Forbidden Value"),Object(i.b)("p",null,"This check ensures that some field doesn't have any forbidden or denylist values. For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from pprint import pprint\nfrom frictionless import validate, checks\n\nsource = b'header\\nvalue1\\nvalue2'\nchecks = [checks.forbidden_value(field_name='header', values=['value2'])]\nreport = validate(source, format='csv', checks=checks)\npprint(report.flatten(['code', 'message']))\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[['forbidden-value',\n  'The cell value2 in row at position 3 and field header at position 1 has an '\n  'error: forbiddened values are \"[\\'value2\\']\"']]\n")),Object(i.b)("h3",{id:"sequential-value"},"Sequential Value"),Object(i.b)("p",null,"This check gives us an opportunity to validate sequential fields like primary keys or other similar data. It doesn't need to start from 0 or 1. We're providing a field name:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from pprint import pprint\nfrom frictionless import validate, checks\n\nsource = b'header\\n2\\n3\\n5'\nreport = validate(source, format='csv', checks=[checks.sequential_value(field_name='header')])\npprint(report.flatten(['code', 'message']))\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[['sequential-value',\n  'The cell 5 in row at position 4 and field header at position 1 has an '\n  'error: the value is not sequential']]\n")),Object(i.b)("h3",{id:"row-constraint"},"Row Constraint"),Object(i.b)("p",null,"This check is the most powerful one as it uses the external ",Object(i.b)("inlineCode",{parentName:"p"},"simpleeval")," package allowing you to evaluate arbitrary Python expressions on data rows. Let's show on an example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},'from pprint import pprint\nfrom frictionless import validate, checks\n\nsource = [\n    ["row", "salary", "bonus"],\n    [2, 1000, 200],\n    [3, 2500, 500],\n    [4, 1300, 500],\n    [5, 5000, 1000],\n]\nreport = validate(source, checks=[checks.row_constraint(formula="salary == bonus * 5")])\npprint(report.flatten(["code", "message"]))\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[['row-constraint',\n  'The row at position 4 has an error: the row constraint to conform is '\n  '\"salary == bonus * 5\"']]\n")))}d.isMDXComponent=!0},157:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return h}));var r=t(0),n=t.n(r);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=n.a.createContext({}),d=function(e){var a=n.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},p=function(e){var a=d(e.components);return n.a.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},b=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(t),b=r,h=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return t?n.a.createElement(h,c(c({ref:a},s),{},{components:t})):n.a.createElement(h,c({ref:a},s))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);