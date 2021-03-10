(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{119:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(8),r=(a(0),a(159)),o={title:"Validation Guide"},l={unversionedId:"guides/validation-guide",id:"guides/validation-guide",isDocsHomePage:!1,title:"Validation Guide",description:"This guide assumes basic familiarity with the Frictionless Framework. To learn more, please read the Introduction and Quick Start.",source:"@site/../docs/guides/validation-guide.md",slug:"/guides/validation-guide",permalink:"/docs/guides/validation-guide",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/guides/validation-guide.md",version:"current",lastUpdatedBy:"Peter Desmet",lastUpdatedAt:1615412210,formattedLastUpdatedAt:"3/10/2021",sidebar:"guides",previous:{title:"Extracting Data",permalink:"/docs/guides/extracting-data"},next:{title:"Validation Checks",permalink:"/docs/guides/validation-checks"}},s=[{value:"Validate Functions",id:"validate-functions",children:[]},{value:"Validating a Schema",id:"validating-a-schema",children:[]},{value:"Validating a Resource",id:"validating-a-resource",children:[]},{value:"Validating a Package",id:"validating-a-package",children:[]},{value:"Validating an Inquiry",id:"validating-an-inquiry",children:[]},{value:"Validation Report",id:"validation-report",children:[]},{value:"Validation Errors",id:"validation-errors",children:[]},{value:"Available Checks",id:"available-checks",children:[]},{value:"Custom Checks",id:"custom-checks",children:[]},{value:"Pick/Skip Errors",id:"pickskip-errors",children:[]},{value:"Limit Errors",id:"limit-errors",children:[]},{value:"Limit Memory",id:"limit-memory",children:[]}],c={toc:s};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This guide assumes basic familiarity with the Frictionless Framework. To learn more, please read the ",Object(r.b)("a",{parentName:"p",href:"https://framework.frictionlessdata.io/docs/guides/introduction"},"Introduction")," and ",Object(r.b)("a",{parentName:"p",href:"https://framework.frictionlessdata.io/docs/guides/quick-start"},"Quick Start"),".")),Object(r.b)("p",null,"Tabular data validation is a process of identifying problems that have occured in your data so you can correct them. Let's explore how Frictionless helps to achieve this task using an invalid data table example:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Download ",Object(r.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/frictionlessdata/frictionless-py/master/data/capital-invalid.csv"},Object(r.b)("inlineCode",{parentName:"a"},"capital-invalid.csv"))," and put into the ",Object(r.b)("inlineCode",{parentName:"p"},"data")," folder to reproduce the examples.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"cat data/capital-invalid.csv\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csv",metastring:'title="data/capital-valid.csv"',title:'"data/capital-valid.csv"'},"id,name,name\n1,London,Britain\n2,Berlin,Germany\n3,Paris,France\n4,Madrid,Spain\n5,Rome,Italy\n6,Zagreb,Croatia\n7,Athens,Greece\n8,Vienna,Austria\n8,Warsaw\n\nx,Tokio,Japan,review\n")),Object(r.b)("p",null,"We can validate this file by using the command-line interface. Frictionless provides comprehensive error details so the error should be self-explanatory. Continue reading to learn the validation process in detail."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"frictionless validate data/capital-invalid.csv\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'---\ninvalid: data/capital-invalid.csv\n---\n\n====  =====  ================  ====================================================================================================================\nrow   field  code              message\n====  =====  ================  ====================================================================================================================\nNone      3  duplicate-header  Header "name" in field at position "3" is duplicated to header in another field: at position "2"\n  10      3  missing-cell      Row at position "10" has a missing cell in field "name2" at position "3"\n  11  None   blank-row         Row at position "11" is completely blank\n  12      4  extra-cell        Row at position "12" has an extra value in field at position "4"\n  12      1  type-error        The cell "x" in row at position "12" and field "id" at position "1" has incompatible type: type is "integer/default"\n====  =====  ================  ====================================================================================================================\n')),Object(r.b)("h2",{id:"validate-functions"},"Validate Functions"),Object(r.b)("p",null,"The high-level interface for validating data provided by Frictionless is a set of ",Object(r.b)("inlineCode",{parentName:"p"},"validate")," functions:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"validate"),": detects the source type and validates data accordingly"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"validate_schema"),": validates a schema's metadata"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"validate_resource"),": validates a resource's data and metadata"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"validate_package"),": validates a package's data and metadata"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"validate_inquiry"),": validates a special ",Object(r.b)("inlineCode",{parentName:"li"},"Inquiry")," object which represents a validation task instruction")),Object(r.b)("p",null,"On the command-line, there is only one command but there is a flag to adjust the behavior:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"frictionless validate\nfrictionless validate --type schema\nfrictionless validate --type resource\nfrictionless validate --type package\nfrictionless validate --type inquiry\n")),Object(r.b)("h2",{id:"validating-a-schema"},"Validating a Schema"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"validate_schema")," function is the only function validating solely metadata. To see this work, let's create an invalid table schema:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import Schema\n\nschema = Schema()\nschema.fields = {} # this must be a list\nschema.to_yaml('tmp/invalid.schema.yaml')\n")),Object(r.b)("p",null,"And let's validate this schema using the command-line interface:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"frictionless validate tmp/invalid.schema.yaml\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'---\ninvalid: tmp/invalid.schema.yaml\n---\n============  ===============================================================================================================================================================================\ncode          message\n============  ===============================================================================================================================================================================\nschema-error  The data source could not be successfully described by the invalid Table Schema: "{} is not of type \'array\'" at "fields" in metadata and at "properties/fields/type" in profile\n============  ===============================================================================================================================================================================\n')),Object(r.b)("p",null,"We see that the schema is invalid and the error is displayed. Schema validation can be very useful when you work with different classes of tables and create schemas for them. Using this function will ensure that the metadata is valid."),Object(r.b)("h2",{id:"validating-a-resource"},"Validating a Resource"),Object(r.b)("p",null,"As was shown in the ",Object(r.b)("a",{parentName:"p",href:"https://framework.frictionlessdata.io/docs/guides/describing-data"},'"Describing Data" guide'),", a resource is a container having both metadata and data. We need to create a resource descriptor and then we can validate it:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"frictionless describe data/capital-invalid.csv --json > tmp/capital.resource.json\n")),Object(r.b)("p",null,"Let's now use the command-line interface to ensure that we are getting the same result that we got without using a resource:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"frictionless validate tmp/capital.resource.json --basepath .\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'---\ninvalid: ./data/capital-invalid.csv\n---\n\n====  =====  ================  ====================================================================================================================\nrow   field  code              message\n====  =====  ================  ====================================================================================================================\nNone      3  duplicate-header  Header "name" in field at position "3" is duplicated to header in another field: at position "2"\n  10      3  missing-cell      Row at position "10" has a missing cell in field "name2" at position "3"\n  11  None   blank-row         Row at position "11" is completely blank\n  12      4  extra-cell        Row at position "12" has an extra value in field at position "4"\n  12      1  type-error        The cell "x" in row at position "12" and field "id" at position "1" has incompatible type: type is "integer/default"\n====  =====  ================  ====================================================================================================================\n')),Object(r.b)("p",null,"Okay, why do we need to use a resource descriptor if the result is the same? The reason is metadata + data packaging. Let's extend our resource descriptor to show how you can edit and validate metadata:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import describe\n\nresource = describe('data/capital-invalid.csv')\nresource['bytes'] = 100 # this is wrong\nresource['hash'] = 'ae23c74693ca2d3f0e38b9ba3570775b' # this is wrong\nresource.to_yaml('tmp/capital.resource.yaml')\n")),Object(r.b)("p",null,"We have added a few bad metrics to our resource descriptor. Now, the validation below reports these errors in addition to all the errors we had before. This example shows how concepts like Data Resource can be extremely useful when working with data."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"frictionless validate tmp/capital.resource.yaml --basepath .\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'---\ninvalid: data/capital-invalid.csv\n---\n\n====  =====  ================  ===========================================================================================================================================================\nrow   field  code              message\n====  =====  ================  ===========================================================================================================================================================\nNone      3  duplicate-label   Label "name" in the header at position "3" is duplicated to a label: at position "2"\n  10      3  missing-cell      Row at position "10" has a missing cell in field "name2" at position "3"\n  11  None   blank-row         Row at position "11" is completely blank\n  12      1  type-error        The cell "x" in row at position "12" and field "id" at position "1" has incompatible type: type is "integer/default"\n  12      4  extra-cell        Row at position "12" has an extra value in field at position "4"\nNone  None   hash-count-error  The data source does not match the expected hash count: expected md5 is "ae23c74693ca2d3f0e38b9ba3570775b" and actual is "dcdeae358cfd50860c18d953e021f836"\nNone  None   byte-count-error  The data source does not match the expected byte count: expected is "100" and actual is "171"\n====  =====  ================  ===========================================================================================================================================================\n\n')),Object(r.b)("h2",{id:"validating-a-package"},"Validating a Package"),Object(r.b)("p",null,"A package is a set of resources + additional metadata. To showcase a package validation we need to use one more tabular file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"cat data/capital-valid.csv\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csv",metastring:'title="data/capital-valid.csv"',title:'"data/capital-valid.csv"'},"id,name\n1,London\n2,Berlin\n3,Paris\n4,Madrid\n5,Rome\n")),Object(r.b)("p",null,"Now let's describe and validate a package which contains the data files we have seen so far:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"frictionless describe data/capital-*id.csv --json > tmp/capital.package.json\nfrictionless validate tmp/capital.package.json --basepath .\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'---\ninvalid: ./data/capital-invalid.csv\n---\n\n====  =====  ================  ====================================================================================================================\nrow   field  code              message\n====  =====  ================  ====================================================================================================================\nNone      3  duplicate-header  Header "name" in field at position "3" is duplicated to header in another field: at position "2"\n  10      3  missing-cell      Row at position "10" has a missing cell in field "name2" at position "3"\n  11  None   blank-row         Row at position "11" is completely blank\n  12      4  extra-cell        Row at position "12" has an extra value in field at position "4"\n  12      1  type-error        The cell "x" in row at position "12" and field "id" at position "1" has incompatible type: type is "integer/default"\n====  =====  ================  ====================================================================================================================\n\n\n---\nvalid: ./data/capital-valid.csv\n---\n')),Object(r.b)("p",null,"As we can see, the result is in a similar format to what we have already seen, and shows errors as we expected: we have one invalid resource and one valid resource. One important note regarding the package validation: if there is more than one resource, it will use multiprocessing to speed up the process."),Object(r.b)("h2",{id:"validating-an-inquiry"},"Validating an Inquiry"),Object(r.b)("p",null,"Inquiry gives you an ability to create arbitrary validation jobs containing a set of individual validation tasks. Tasks in the Inquiry accept the same arguments written in camelCase as the corresponding ",Object(r.b)("inlineCode",{parentName:"p"},"validate")," functions. "),Object(r.b)("p",null,"Let's create an Inquiry that includes an individual file validation and a resource validation. In this example we will use the data file, ",Object(r.b)("inlineCode",{parentName:"p"},"capital-valid.csv")," and the resource, ",Object(r.b)("inlineCode",{parentName:"p"},"capital.resource.json")," which describes the invalid data file we have already seen: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import Inquiry\n\ninquiry = Inquiry({'tasks': [\n  {'source': 'data/capital-valid.csv'},\n  {'source': 'tmp/capital.resource.json', 'basepath': '.'},\n]})\ninquiry.to_yaml('tmp/capital.inquiry.yaml')\n")),Object(r.b)("p",null,"As usual, let's run validation:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"frictionless validate tmp/capital.inquiry.yaml\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'---\nvalid: data/capital-valid.csv\n---\n---\ninvalid: ./data/capital-invalid.csv\n---\n\n====  =====  ================  ====================================================================================================================\nrow   field  code              message\n====  =====  ================  ====================================================================================================================\nNone      3  duplicate-header  Header "name" in field at position "3" is duplicated to header in another field: at position "2"\n  10      3  missing-cell      Row at position "10" has a missing cell in field "name2" at position "3"\n  11  None   blank-row         Row at position "11" is completely blank\n  12      4  extra-cell        Row at position "12" has an extra value in field at position "4"\n  12      1  type-error        The cell "x" in row at position "12" and field "id" at position "1" has incompatible type: type is "integer/default"\n====  =====  ================  ====================================================================================================================\n')),Object(r.b)("p",null,"At first sight, it might not be clear why such a construct exists, but when your validation workflow gets complex, the Inquiry can provide a lot of flexibility and power. Last but not least, the Inquiry will use multiprocessing if there is more than one task provided."),Object(r.b)("h2",{id:"validation-report"},"Validation Report"),Object(r.b)("p",null,"All the ",Object(r.b)("inlineCode",{parentName:"p"},"validate")," functions return a Validation Report. This is a unified object containing information about a validation: source details, the error, etc. Let's explore a report:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from pprint import pprint\nfrom frictionless import validate\n\nreport = validate('data/capital-invalid.csv', pick_errors=['duplicate-header'])\npprint(report)\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"{'errors': [],\n 'stats': {'errors': 0, 'tasks': 1},\n 'tasks': [{'errors': [],\n            'partial': False,\n            'resource': {'encoding': 'utf-8',\n                         'format': 'csv',\n                         'hashing': 'md5',\n                         'name': 'capital-invalid',\n                         'path': 'data/capital-invalid.csv',\n                         'profile': 'tabular-data-resource',\n                         'schema': {'fields': [{'name': 'id',\n                                                'type': 'integer'},\n                                               {'name': 'name',\n                                                'type': 'string'},\n                                               {'name': 'name2',\n                                                'type': 'string'}]},\n                         'scheme': 'file',\n                         'stats': {'bytes': 171,\n                                   'fields': 3,\n                                   'hash': 'dcdeae358cfd50860c18d953e021f836',\n                                   'rows': 11}},\n            'scope': [],\n            'stats': {'errors': 0},\n            'time': 0.023,\n            'valid': True}],\n 'time': 0.023,\n 'valid': True,\n 'version': '4.0.4'}\n")),Object(r.b)("p",null,"As we can see, there is a lot of information; you can find a detailed description of the Validation Report in the ",Object(r.b)("a",{parentName:"p",href:"/docs/references/api-reference"},"API Reference"),". Errors are grouped by tables; for some validation there can be dozens of tables. Let's use the ",Object(r.b)("inlineCode",{parentName:"p"},"report.flatten")," function to simplify the representation of errors:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},'from pprint import pprint\nfrom frictionless import validate\n\nreport = validate("data/capital-invalid.csv", pick_errors=["duplicate-label"])\npprint(report.flatten(["rowPosition", "fieldPosition", "code", "message"]))\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"[[None,\n  3,\n  'duplicate-label',\n  'Label \"name\" in the header at position \"3\" is duplicated to a label: at '\n  'position \"2\"']]\n")),Object(r.b)("p",null,"In some situations, an error can't be associated with a table; then it goes to the top-level ",Object(r.b)("inlineCode",{parentName:"p"},"report.errors")," property:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},'from pprint import pprint\nfrom frictionless import validate_schema\n\nreport = validate_schema("bad.json")\npprint(report)\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"{'errors': [{'code': 'schema-error',\n             'description': 'Provided schema is not valid.',\n             'message': 'Schema is not valid: cannot extract metadata '\n                        '\"bad.json\" because \"[Errno 2] No such file or '\n                        'directory: \\'bad.json\\'\"',\n             'name': 'Schema Error',\n             'note': 'cannot extract metadata \"bad.json\" because \"[Errno 2] No '\n                     'such file or directory: \\'bad.json\\'\"',\n             'tags': ['#general']}],\n 'stats': {'errors': 1, 'tasks': 0},\n 'tasks': [],\n 'time': 0.0,\n 'valid': False,\n 'version': '4.0.4'}\n")),Object(r.b)("h2",{id:"validation-errors"},"Validation Errors"),Object(r.b)("p",null,"The Error object is at the heart of the validation process. The Report has ",Object(r.b)("inlineCode",{parentName:"p"},"report.errors")," and ",Object(r.b)("inlineCode",{parentName:"p"},"report.tables[].errors"),", properties that can contain the Error object. Let's explore it:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},'from frictionless import validate\n\nreport = validate("data/capital-invalid.csv", pick_errors=["duplicate-label"])\nerror = report.task.error  # this is only available for one table / one error sitution\nprint(f\'Code: "{error.code}"\')\nprint(f\'Name: "{error.name}"\')\nprint(f\'Tags: "{error.tags}"\')\nprint(f\'Note: "{error.note}"\')\nprint(f\'Message: "{error.message}"\')\nprint(f\'Description: "{error.description}"\')\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'Code: "duplicate-label"\nName: "Duplicate Label"\nTags: "[\'table\', \'#header\', \'label\']"\nNote: "at position "2""\nMessage: "Label "name" in the header at position "3" is duplicated to a label: at position "2""\nDescription: "Two columns in the header row have the same value. Column names should be unique."\n')),Object(r.b)("p",null,"Above, we have listed universal error properties. Depending on the type of an error there can be additional ones. For example, for our ",Object(r.b)("inlineCode",{parentName:"p"},"duplicate-header")," error:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},'from pprint import pprint\nfrom frictionless import validate\n\nreport = validate("data/capital-invalid.csv", pick_errors=["duplicate-label"])\nerror = report.task.error  # this is only available for one table / one error sitution\npprint(error)\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"{'code': 'duplicate-label',\n 'description': 'Two columns in the header row have the same value. Column '\n                'names should be unique.',\n 'fieldName': 'name2',\n 'fieldNumber': 3,\n 'fieldPosition': 3,\n 'label': 'name',\n 'labels': ['id', 'name', 'name'],\n 'message': 'Label \"name\" in the header at position \"3\" is duplicated to a '\n            'label: at position \"2\"',\n 'name': 'Duplicate Label',\n 'note': 'at position \"2\"',\n 'rowPositions': [1],\n 'tags': ['table', '#header', 'label']}\n")),Object(r.b)("p",null,'Please explore the "Errors Reference" to learn about all the available errors and their properties.'),Object(r.b)("h2",{id:"available-checks"},"Available Checks"),Object(r.b)("p",null,"There are various validation checks included in the core Frictionless Framework along with an ability to create custom checks. You can provide a list of checks where individual checks are in the form of:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"a dict: ",Object(r.b)("inlineCode",{parentName:"li"},"{'code': 'code', 'option1': 'value1'}")),Object(r.b)("li",{parentName:"ul"},"an object: ",Object(r.b)("inlineCode",{parentName:"li"},"checks.code(option1='value1')"))),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"/docs/guides/validation-checks"},"Validation Checks")," for a list of available checks."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},'from pprint import pprint\nfrom frictionless import validate, checks\n\nchecks = [checks.sequential_value(field_name=\'id\')]\nreport = validate(\'data/capital-invalid.csv\', checks=checks)\npprint(report.flatten(["rowPosition", "fieldPosition", "code", "note"]))\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"[[None, 3, 'duplicate-label', 'at position \"2\"'],\n [10, 3, 'missing-cell', ''],\n [10, 1, 'sequential-value', 'the value is not sequential'],\n [11, None, 'blank-row', ''],\n [12, 1, 'type-error', 'type is \"integer/default\"'],\n [12, 4, 'extra-cell', '']]\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note that only the Baseline Check is enabled by default. Other built-in checks need to be activated as shown below.")),Object(r.b)("h2",{id:"custom-checks"},"Custom Checks"),Object(r.b)("p",null,"There are many cases when built-in Frictionless checks are not enough. For instance, you might want to create a business logic rule or specific quality requirement for the data. With Frictionless it's very easy to use your own custom checks. Let's see with an example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from pprint import pprint\nfrom frictionless import validate, errors\n\n# Create check\ndef forbidden_two(row):\n    if row['header'] == 2:\n        note = '2 is forbidden!'\n        yield errors.CellError.from_row(row, note=note, field_name='header')\n\n# Validate table\nsource = b'header\\n1\\n2\\n3'\nreport = validate(source,  format='csv', checks=[forbidden_two])\npprint(report.flatten([\"rowPosition\", \"fieldPosition\", \"code\", \"note\"]))\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"[[3, 1, 'cell-error', 'number 2 is forbidden!']]\n")),Object(r.b)("p",null,"Usually, it also makes sense to create a custom error for your custom check. The Check class provides other useful methods like ",Object(r.b)("inlineCode",{parentName:"p"},"validate_header")," etc. Please read the ",Object(r.b)("a",{parentName:"p",href:"/docs/references/api-reference"},"API Reference")," for more details."),Object(r.b)("p",null,"Learn more about custom checks in the ",Object(r.b)("a",{parentName:"p",href:"/docs/guides/extension/check-guide"},"Check Guide"),"."),Object(r.b)("h2",{id:"pickskip-errors"},"Pick/Skip Errors"),Object(r.b)("p",null,"We can pick or skip errors by providing a list of error codes. For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},'from pprint import pprint\nfrom frictionless import validate\n\nreport1 = validate("data/capital-invalid.csv", pick_errors=["duplicate-label"])\nreport2 = validate("data/capital-invalid.csv", skip_errors=["duplicate-label"])\npprint(report1.flatten(["rowPosition", "fieldPosition", "code"]))\npprint(report2.flatten(["rowPosition", "fieldPosition", "code"]))\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"[[None, 3, 'duplicate-label']]\n[[10, 3, 'missing-cell'],\n [11, None, 'blank-row'],\n [12, 1, 'type-error'],\n [12, 4, 'extra-cell']]\n")),Object(r.b)("p",null,"It's also possible to use error tags (for more information please consult the ",Object(r.b)("a",{parentName:"p",href:"/docs/references/errors-reference"},"Errors Reference"),"):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},'from pprint import pprint\nfrom frictionless import validate\n\nreport1 = validate("data/capital-invalid.csv", pick_errors=["#header"])\nreport2 = validate("data/capital-invalid.csv", skip_errors=["#row"])\npprint(report1.flatten(["rowPosition", "fieldPosition", "code"]))\npprint(report2.flatten(["rowPosition", "fieldPosition", "code"]))\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"[[None, 3, 'duplicate-label']]\n[[None, 3, 'duplicate-label']]\n")),Object(r.b)("h2",{id:"limit-errors"},"Limit Errors"),Object(r.b)("p",null,'This option allows you to limit the amount of errors, and can be used when you need to "fail fast":'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},'from pprint import pprint\nfrom frictionless import validate\n\nreport = validate("data/capital-invalid.csv", limit_errors=1)\npprint(report.flatten(["rowPosition", "fieldPosition", "code"]))\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"[[None, 3, 'duplicate-label']]\n")),Object(r.b)("h2",{id:"limit-memory"},"Limit Memory"),Object(r.b)("p",null,"Frictionless is a streaming engine; usually it is possible to validate terrabytes of data with basically O(1) memory consumption. For some validation, this is not the case because Frctionless needs to buffer some cells e.g. to check uniqueness. Here memory management can be handy."),Object(r.b)("p",null,"The default memory limit is 1000MB. You can adjust this based on your exact use case. For example, if you're running Frictionless as an API server you might reduce the memory usage. If a validation hits the limit it will not raise a failure - it will return a report with a task error:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},'from frictionless import validate\n\nsource = lambda: ([integer] for integer in range(1, 100000000))\nschema = {"fields": [{"name": "integer", "type": "integer"}], "primaryKey": "integer"}\nreport = validate(source, headers=False, schema=schema, limit_memory=50)\nprint(report.flatten(["code", "note"]))\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"[['task-error', 'exceeded memory limit \"50MB\"']]\n")))}d.isMDXComponent=!0},159:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,m=p["".concat(o,".").concat(u)]||p[u]||b[u]||r;return a?i.a.createElement(m,l(l({ref:t},c),{},{components:a})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);