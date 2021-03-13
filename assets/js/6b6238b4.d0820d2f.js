(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{113:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),i=(a(0),a(159)),o={title:"Extracting Data",goodread:{prepare:["cp data/country-3.csv country-3.csv","cp data/capital-3.csv capital-3.csv"],cleanup:["rm country-3.csv","rm capital-3.csv"]}},c={unversionedId:"guides/extracting-data",id:"guides/extracting-data",isDocsHomePage:!1,title:"Extracting Data",description:"Extracting data means reading tabular data from a source. We can use various customizations for this process such as providing a file format, table schema, limiting fields or rows amount, and much more. Let's see this with some real files:",source:"@site/../docs/guides/extracting-data.md",slug:"/guides/extracting-data",permalink:"/docs/guides/extracting-data",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/guides/extracting-data.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1615646846,formattedLastUpdatedAt:"3/13/2021",sidebar:"guides",previous:{title:"Describing Data",permalink:"/docs/guides/describing-data"},next:{title:"Validation Guide",permalink:"/docs/guides/validation-guide"}},s=[{value:"Extract Functions",id:"extract-functions",children:[]},{value:"Extracting Resource",id:"extracting-resource",children:[]},{value:"Extracting Package",id:"extracting-package",children:[]},{value:"Resource Class",id:"resource-class",children:[]},{value:"Package Class",id:"package-class",children:[]},{value:"Header Class",id:"header-class",children:[]},{value:"Row Class",id:"row-class",children:[]}],l={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Extracting data means reading tabular data from a source. We can use various customizations for this process such as providing a file format, table schema, limiting fields or rows amount, and much more. Let's see this with some real files:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Download ",Object(i.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/frictionlessdata/frictionless-py/master/data/country-3.csv"},Object(i.b)("inlineCode",{parentName:"a"},"country-3.csv")),' to reproduce the examples (right-click and "Save link as").')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:'goodread title="CLI"',goodread:!0,title:'"CLI"'},"cat country-3.csv\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csv",metastring:'title="country-3.csv"',title:'"country-3.csv"'},"id,capital_id,name,population\n1,1,Britain,67\n2,3,France,67\n3,2,Germany,83\n4,5,Italy,60\n5,4,Spain,47\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Download ",Object(i.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/frictionlessdata/frictionless-py/master/data/capital-3.csv"},Object(i.b)("inlineCode",{parentName:"a"},"capital-3.csv")),' to reproduce the examples (right-click and "Save link as").')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:'goodread title="CLI"',goodread:!0,title:'"CLI"'},"cat capital-3.csv\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csv",metastring:'title="capital-3.csv"',title:'"capital-3.csv"'},"id,name\n1,London\n2,Berlin\n3,Paris\n4,Madrid\n5,Rome\n")),Object(i.b)("p",null,"To start, we will use the command-line interface:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:'goodread title="CLI"',goodread:!0,title:'"CLI"'},"frictionless extract country-3.csv\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"# ----\n# data: country-3.csv\n# ----\n\n==  ==========  =======  ==========\nid  capital_id  name     population\n==  ==========  =======  ==========\n 1           1  Britain          67\n 2           3  France           67\n 3           2  Germany          83\n 4           5  Italy            60\n 5           4  Spain            47\n==  ==========  =======  ==========\n")),Object(i.b)("p",null,"The same can be done in Python:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'goodread title="Python"',goodread:!0,title:'"Python"'},"from pprint import pprint\nfrom frictionless import extract\n\nrows = extract('country-3.csv')\npprint(rows)\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[{'id': 1, 'capital_id': 1, 'name': 'Britain', 'population': 67},\n {'id': 2, 'capital_id': 3, 'name': 'France', 'population': 67},\n {'id': 3, 'capital_id': 2, 'name': 'Germany', 'population': 83},\n {'id': 4, 'capital_id': 5, 'name': 'Italy', 'population': 60},\n {'id': 5, 'capital_id': 4, 'name': 'Spain', 'population': 47}]\n")),Object(i.b)("h2",{id:"extract-functions"},"Extract Functions"),Object(i.b)("p",null,"The high-level interface for extracting data provided by Frictionless is a set of ",Object(i.b)("inlineCode",{parentName:"p"},"extract")," functions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"extract"),": detects the source type and extracts data accordingly"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"extract_resource"),": accepts a resource descriptor and returns a data table"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"extract_package"),": accepts a package descriptor and returns a map of the package's tables")),Object(i.b)("p",null,"On the command-line, the command would be used as follows:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"frictionless extract\nfrictionless extract --type package\nfrictionless extract --type resource\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"extract")," functions always read data in the form of rows, into memory. The lower-level interfaces will allow you to stream data and various output forms."),Object(i.b)("h2",{id:"extracting-resource"},"Extracting Resource"),Object(i.b)("p",null,"A resource contains only one file. To extract a resource we can use the same approach as above:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'goodread title="Python"',goodread:!0,title:'"Python"'},"from frictionless import extract\n\nrows = extract('capital-3.csv')\npprint(rows)\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[{'id': 1, 'name': 'London'},\n {'id': 2, 'name': 'Berlin'},\n {'id': 3, 'name': 'Paris'},\n {'id': 4, 'name': 'Madrid'},\n {'id': 5, 'name': 'Rome'}]\n")),Object(i.b)("p",null,"Using the ",Object(i.b)("inlineCode",{parentName:"p"},"extract_resource")," function though, we can extract the resource from a descriptor. The power of the descriptor is that it can contain different metadata and be stored on the disc."),Object(i.b)("p",null,"First let's create the descriptor:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'goodread title="Python"',goodread:!0,title:'"Python"'},"from frictionless import Resource\n\nresource = Resource('capital-3.csv')\nresource.infer()\nresource.schema.missing_values.append('3') # will interpret 3 as a missing value\nresource.to_yaml('capital.resource.yaml')\n")),Object(i.b)("p",null,"This description can then be used to extract the resource:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import extract\n\ndata = extract('capital.resource.yaml')\n")),Object(i.b)("p",null,"This can also be done on the command-line:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:'goodread title="CLI"',goodread:!0,title:'"CLI"'},"frictionless extract capital.resource.yaml\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"# ----\n# data: capital.resource.yaml\n# ----\n\n==  ======\nid  name\n==  ======\n 1  London\n 2  Berlin\n    Paris\n 4  Madrid\n 5  Rome\n==  ======\n")),Object(i.b)("p",null,'So what has happened? We set the textual representation of the number "3" to be a missing value. It was done only for explanation purposes because it\'s definitely not a missing value. On the other hand, it demonstrated how metadata can be used. In the output we can see how the id number 3 now appears as "None" representing a missing value.'),Object(i.b)("h2",{id:"extracting-package"},"Extracting Package"),Object(i.b)("p",null,"We're going to provide two files to the ",Object(i.b)("inlineCode",{parentName:"p"},"extract")," command which will be enough to detect that it's a dataset. Let's start by using the command-line interface:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:'goodread title="CLI"',goodread:!0,title:'"CLI"'},"frictionless extract *-3.csv\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"# ----\n# data: capital-3.csv\n# ----\n\n==  ======\nid  name\n==  ======\n 1  London\n 2  Berlin\n 3  Paris\n 4  Madrid\n 5  Rome\n==  ======\n\n\n# ----\n# data: country-3.csv\n# ----\n\n==  ==========  =======  ==========\nid  capital_id  name     population\n==  ==========  =======  ==========\n 1           1  Britain          67\n 2           3  France           67\n 3           2  Germany          83\n 4           5  Italy            60\n 5           4  Spain            47\n==  ==========  =======  ==========\n")),Object(i.b)("p",null,"In Python we can do the same:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import extract\n\ndata = extract('*-3.csv')\nfor path, rows in data.items():\n  pprint(path)\n  pprint(rows)\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"'data/country-3.csv'\n[Row([('id', 1), ('capital_id', 1), ('name', 'Britain'), ('population', 67)]),\n Row([('id', 2), ('capital_id', 3), ('name', 'France'), ('population', 67)]),\n Row([('id', 3), ('capital_id', 2), ('name', 'Germany'), ('population', 83)]),\n Row([('id', 4), ('capital_id', 5), ('name', 'Italy'), ('population', 60)]),\n Row([('id', 5), ('capital_id', 4), ('name', 'Spain'), ('population', 47)])]\n\n'data/capital-3.csv'\n[Row([('id', 1), ('name', 'London')]),\n Row([('id', 2), ('name', 'Berlin')]),\n Row([('id', 3), ('name', 'Paris')]),\n Row([('id', 4), ('name', 'Madrid')]),\n Row([('id', 5), ('name', 'Rome')])]\n")),Object(i.b)("p",null,"We can also extract the package from a descriptor using the ",Object(i.b)("inlineCode",{parentName:"p"},"extract_package")," function:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import package\n\npackage = package('country.package.yaml')\n\npprint(package)\n")),Object(i.b)("h2",{id:"resource-class"},"Resource Class"),Object(i.b)("p",null,"The Resource class provides metadata about a resource with read and stream functions. The ",Object(i.b)("inlineCode",{parentName:"p"},"extract")," functions always read rows into memory; Resource can do the same but it also gives a choice regarding output data which can be ",Object(i.b)("inlineCode",{parentName:"p"},"rows"),", ",Object(i.b)("inlineCode",{parentName:"p"},"data"),", ",Object(i.b)("inlineCode",{parentName:"p"},"text"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"bytes"),". Let's try reading all of them:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'goodread title="Python"',goodread:!0,title:'"Python"'},"from frictionless import Resource\n\nresource = Resource('country-3.csv')\npprint(resource.read_bytes())\npprint(resource.read_text())\npprint(resource.read_lists())\npprint(resource.read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"(b'id,capital_id,name,population\\n1,1,Britain,67\\n2,3,France,67\\n3,2,Germany,8'\n b'3\\n4,5,Italy,60\\n5,4,Spain,47\\n')\n('id,capital_id,name,population\\n'\n '1,1,Britain,67\\n'\n '2,3,France,67\\n'\n '3,2,Germany,83\\n'\n '4,5,Italy,60\\n'\n '5,4,Spain,47\\n')\n[['id', 'capital_id', 'name', 'population'],\n ['1', '1', 'Britain', '67'],\n ['2', '3', 'France', '67'],\n ['3', '2', 'Germany', '83'],\n ['4', '5', 'Italy', '60'],\n ['5', '4', 'Spain', '47']]\n[{'id': 1, 'capital_id': 1, 'name': 'Britain', 'population': 67},\n {'id': 2, 'capital_id': 3, 'name': 'France', 'population': 67},\n {'id': 3, 'capital_id': 2, 'name': 'Germany', 'population': 83},\n {'id': 4, 'capital_id': 5, 'name': 'Italy', 'population': 60},\n {'id': 5, 'capital_id': 4, 'name': 'Spain', 'population': 47}]\n")),Object(i.b)("p",null,"It's really handy to read all your data into memory but it's not always possible if a file is very big. For such cases, Frictionless provides streaming functions:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'goodread title="Python"',goodread:!0,title:'"Python"'},"from frictionless import Resource\n\nwith Resource('country-3.csv') as resource:\n    pprint(type(resource.byte_stream))\n    pprint(type(resource.text_stream))\n    pprint(resource.list_stream)\n    pprint(resource.row_stream)\n    for row in resource.row_stream:\n      print(row)\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"<class 'frictionless.loader.ByteStreamWithStatsHandling'>\n<class '_io.TextIOWrapper'>\n<itertools.chain object at 0x7fa95be13880>\n<generator object Resource.__read_row_stream.<locals>.row_stream at 0x7fa95be45580>\n{'id': 1, 'capital_id': 1, 'name': 'Britain', 'population': 67}\n{'id': 2, 'capital_id': 3, 'name': 'France', 'population': 67}\n{'id': 3, 'capital_id': 2, 'name': 'Germany', 'population': 83}\n{'id': 4, 'capital_id': 5, 'name': 'Italy', 'population': 60}\n{'id': 5, 'capital_id': 4, 'name': 'Spain', 'population': 47}\n")),Object(i.b)("h2",{id:"package-class"},"Package Class"),Object(i.b)("p",null,"The Package class provides functions to read the contents of a package. First of all, let's create a package descriptor:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:'goodread title="CLI"',goodread:!0,title:'"CLI"'},"frictionless describe *-3.csv --json > country.package.json\n")),Object(i.b)("p",null,"Note that --json is used here to output the descriptor in JSON format. Without this, the default output is in YAML format as we saw above."),Object(i.b)("p",null,"We can create a package from paths and read the package's resources:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'goodread title="Python"',goodread:!0,title:'"Python"'},"from frictionless import Package\n\npackage = Package('*-3.csv')\npprint(package.get_resource('country-3').read_rows())\npprint(package.get_resource('capital-3').read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[{'id': 1, 'capital_id': 1, 'name': 'Britain', 'population': 67},\n {'id': 2, 'capital_id': 3, 'name': 'France', 'population': 67},\n {'id': 3, 'capital_id': 2, 'name': 'Germany', 'population': 83},\n {'id': 4, 'capital_id': 5, 'name': 'Italy', 'population': 60},\n {'id': 5, 'capital_id': 4, 'name': 'Spain', 'population': 47}]\n[{'id': 1, 'name': 'London'},\n {'id': 2, 'name': 'Berlin'},\n {'id': 3, 'name': 'Paris'},\n {'id': 4, 'name': 'Madrid'},\n {'id': 5, 'name': 'Rome'}]\n")),Object(i.b)("p",null,"The package by itself doesn't provide any read functions directly because that is a role of its resources. So everything written above for the Resource class can be used within a package."),Object(i.b)("h2",{id:"header-class"},"Header Class"),Object(i.b)("p",null,"After opening a resource you get access to a ",Object(i.b)("inlineCode",{parentName:"p"},"resource.header")," object which describes the resource in more detail. This is a list of normalized labels but also provides some additional functionality. Let's take a look:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'goodread title="Python"',goodread:!0,title:'"Python"'},"from frictionless import Resource\n\nwith Resource('capital-3.csv') as resource:\n  print(f'Header: {resource.header}')\n  print(f'Labels: {resource.header.labels}')\n  print(f'Fields: {resource.header.fields}')\n  print(f'Field Names: {resource.header.field_names}')\n  print(f'Field Positions: {resource.header.field_positions}')\n  print(f'Errors: {resource.header.errors}')\n  print(f'Valid: {resource.header.valid}')\n  print(f'As List: {resource.header.to_list()}')\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Header: ['id', 'name']\nLabels: ['id', 'name']\nFields: [{'name': 'id', 'type': 'integer'}, {'name': 'name', 'type': 'string'}]\nField Names: ['id', 'name']\nField Positions: [1, 2]\nErrors: []\nValid: True\nAs List: ['id', 'name']\n")),Object(i.b)("p",null,"The example above covers the case when a header is valid. For a header that contains errors in its tabular structure this information can be much more useful, revealing discrepancies, duplicates or missing cell information. Please read ",Object(i.b)("a",{parentName:"p",href:"/docs/references/api-reference/"},"API Reference")," for more details."),Object(i.b)("h2",{id:"row-class"},"Row Class"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"extract"),", ",Object(i.b)("inlineCode",{parentName:"p"},"resource.read_rows()")," and other functions return or yield row objects. In Python, this returns a dictionary with the following information:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'goodread title="Python"',goodread:!0,title:'"Python"'},"from frictionless import Resource, Detector\n\ndetector = Detector(schema_patch={'missingValues': ['1']})\nwith Resource('data/capital-3.csv', detector=detector) as resource:\n  for row in resource:\n    print(f'Row: {row}')\n    print(f'Cells: {row.cells}')\n    print(f'Fields: {row.fields}')\n    print(f'Field Names: {row.field_names}')\n    print(f'Field Positions: {row.field_positions}')\n    print(f'Value of field \"name\": {row[\"name\"]}') # accessed as a dict\n    print(f'Row Position: {row.row_position}') # physical line number starting from 1\n    print(f'Row Number: {row.row_number}') # counted row number starting from 1\n    print(f'Blank Cells: {row.blank_cells}')\n    print(f'Error Cells: {row.error_cells}')\n    print(f'Errors: {row.errors}')\n    print(f'Valid: {row.valid}')\n    print(f'As Dict: {row.to_dict(json=False)}')\n    print(f'As List: {row.to_list(json=True)}') # JSON compatible data types\n    break\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Row: {'id': None, 'name': 'London'}\nCells: ['1', 'London']\nFields: [{'name': 'id', 'type': 'integer'}, {'name': 'name', 'type': 'string'}]\nField Names: ['id', 'name']\nField Positions: [1, 2]\nValue of field \"name\": London\nRow Position: 2\nRow Number: 1\nBlank Cells: {'id': '1'}\nError Cells: {}\nErrors: []\nValid: True\nAs Dict: {'id': None, 'name': 'London'}\nAs List: [None, 'London']\n")),Object(i.b)("p",null,'As we can see, this output provides a lot of information which is especially useful when a row is not valid. Our row is valid but we demonstrated how it can preserve data about missing values. It also preserves data about all cells that contain errors. Please read "API Reference" for more details.'))}p.isMDXComponent=!0},159:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,b=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return a?r.a.createElement(b,c(c({ref:t},l),{},{components:a})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);