---
title: Extracting Data
goodread:
  prepare:
    - cp data/country-3.csv country-3.csv
    - cp data/capital-3.csv capital-3.csv
  cleanup:
    - rm country-3.csv
    - rm capital-3.csv
---

Extracting data means reading tabular data from a source. We can use various customizations for this process such as providing a file format, table schema, limiting fields or rows amount, and much more. Let's see this with some real files:

> Download [`country-3.csv`](https://raw.githubusercontent.com/frictionlessdata/frictionless-py/master/data/country-3.csv) to reproduce the examples (right-click and "Save link as").

```bash goodread title="CLI"
cat country-3.csv
```
```csv title="country-3.csv"
id,capital_id,name,population
1,1,Britain,67
2,3,France,67
3,2,Germany,83
4,5,Italy,60
5,4,Spain,47
```
> Download [`capital-3.csv`](https://raw.githubusercontent.com/frictionlessdata/frictionless-py/master/data/capital-3.csv) to reproduce the examples (right-click and "Save link as").

```bash goodread title="CLI"
cat capital-3.csv
```
```csv title="capital-3.csv"
id,name
1,London
2,Berlin
3,Paris
4,Madrid
5,Rome
```

To start, we will use the command-line interface:

```bash goodread title="CLI"
frictionless extract country-3.csv
```
```
# ----
# data: country-3.csv
# ----

==  ==========  =======  ==========
id  capital_id  name     population
==  ==========  =======  ==========
 1           1  Britain          67
 2           3  France           67
 3           2  Germany          83
 4           5  Italy            60
 5           4  Spain            47
==  ==========  =======  ==========
```

The same can be done in Python:

```python goodread title="Python"
from pprint import pprint
from frictionless import extract

rows = extract('country-3.csv')
pprint(rows)
```
```
[{'id': 1, 'capital_id': 1, 'name': 'Britain', 'population': 67},
 {'id': 2, 'capital_id': 3, 'name': 'France', 'population': 67},
 {'id': 3, 'capital_id': 2, 'name': 'Germany', 'population': 83},
 {'id': 4, 'capital_id': 5, 'name': 'Italy', 'population': 60},
 {'id': 5, 'capital_id': 4, 'name': 'Spain', 'population': 47}]
```

## Extract Functions

The high-level interface for extracting data provided by Frictionless is a set of `extract` functions:
- `extract`: detects the source type and extracts data accordingly
- `extract_resource`: accepts a resource descriptor and returns a data table
- `extract_package`: accepts a package descriptor and returns a map of the package's tables

On the command-line, the command would be used as follows:

```bash title="CLI"
frictionless extract
frictionless extract --type package
frictionless extract --type resource
```

The `extract` functions always read data in the form of rows, into memory. The lower-level interfaces will allow you to stream data and various output forms.

## Extracting Resource

A resource contains only one file. To extract a resource we can use the same approach as above:

```python goodread title="Python"
from frictionless import extract

rows = extract('capital-3.csv')
pprint(rows)
```
```
[{'id': 1, 'name': 'London'},
 {'id': 2, 'name': 'Berlin'},
 {'id': 3, 'name': 'Paris'},
 {'id': 4, 'name': 'Madrid'},
 {'id': 5, 'name': 'Rome'}]
```

Using the `extract_resource` function though, we can extract the resource from a descriptor. The power of the descriptor is that it can contain different metadata and be stored on the disc.

First let's create the descriptor:

```python goodread title="Python"
from frictionless import Resource

resource = Resource('capital-3.csv')
resource.infer()
resource.schema.missing_values.append('3') # will interpret 3 as a missing value
resource.to_yaml('capital.resource.yaml')
```
This description can then be used to extract the resource:

```python title="Python"
from frictionless import extract

data = extract('capital.resource.yaml')
```
This can also be done on the command-line:

```bash goodread title="CLI"
frictionless extract capital.resource.yaml
```
```
# ----
# data: capital.resource.yaml
# ----

==  ======
id  name
==  ======
 1  London
 2  Berlin
    Paris
 4  Madrid
 5  Rome
==  ======
```

So what has happened? We set the textual representation of the number "3" to be a missing value. It was done only for explanation purposes because it's definitely not a missing value. On the other hand, it demonstrated how metadata can be used. In the output we can see how the id number 3 now appears as "None" representing a missing value.

## Extracting Package

We're going to provide two files to the `extract` command which will be enough to detect that it's a dataset. Let's start by using the command-line interface:

```bash goodread title="CLI"
frictionless extract *-3.csv
```
```
# ----
# data: capital-3.csv
# ----

==  ======
id  name
==  ======
 1  London
 2  Berlin
 3  Paris
 4  Madrid
 5  Rome
==  ======


# ----
# data: country-3.csv
# ----

==  ==========  =======  ==========
id  capital_id  name     population
==  ==========  =======  ==========
 1           1  Britain          67
 2           3  France           67
 3           2  Germany          83
 4           5  Italy            60
 5           4  Spain            47
==  ==========  =======  ==========
```

In Python we can do the same:

```python title="Python"
from frictionless import extract

data = extract('*-3.csv')
for path, rows in data.items():
  pprint(path)
  pprint(rows)
```
```
'data/country-3.csv'
[Row([('id', 1), ('capital_id', 1), ('name', 'Britain'), ('population', 67)]),
 Row([('id', 2), ('capital_id', 3), ('name', 'France'), ('population', 67)]),
 Row([('id', 3), ('capital_id', 2), ('name', 'Germany'), ('population', 83)]),
 Row([('id', 4), ('capital_id', 5), ('name', 'Italy'), ('population', 60)]),
 Row([('id', 5), ('capital_id', 4), ('name', 'Spain'), ('population', 47)])]

'data/capital-3.csv'
[Row([('id', 1), ('name', 'London')]),
 Row([('id', 2), ('name', 'Berlin')]),
 Row([('id', 3), ('name', 'Paris')]),
 Row([('id', 4), ('name', 'Madrid')]),
 Row([('id', 5), ('name', 'Rome')])]
```
We can also extract the package from a descriptor using the `extract_package` function:

```python title="Python"
from frictionless import package

package = package('country.package.yaml')

pprint(package)
```

## Resource Class

The Resource class provides metadata about a resource with read and stream functions. The `extract` functions always read rows into memory; Resource can do the same but it also gives a choice regarding output data which can be `rows`, `data`, `text`, or `bytes`. Let's try reading all of them:

```python goodread title="Python"
from frictionless import Resource

resource = Resource('country-3.csv')
pprint(resource.read_bytes())
pprint(resource.read_text())
pprint(resource.read_lists())
pprint(resource.read_rows())
```
```
(b'id,capital_id,name,population\n1,1,Britain,67\n2,3,France,67\n3,2,Germany,8'
 b'3\n4,5,Italy,60\n5,4,Spain,47\n')
('id,capital_id,name,population\n'
 '1,1,Britain,67\n'
 '2,3,France,67\n'
 '3,2,Germany,83\n'
 '4,5,Italy,60\n'
 '5,4,Spain,47\n')
[['id', 'capital_id', 'name', 'population'],
 ['1', '1', 'Britain', '67'],
 ['2', '3', 'France', '67'],
 ['3', '2', 'Germany', '83'],
 ['4', '5', 'Italy', '60'],
 ['5', '4', 'Spain', '47']]
[{'id': 1, 'capital_id': 1, 'name': 'Britain', 'population': 67},
 {'id': 2, 'capital_id': 3, 'name': 'France', 'population': 67},
 {'id': 3, 'capital_id': 2, 'name': 'Germany', 'population': 83},
 {'id': 4, 'capital_id': 5, 'name': 'Italy', 'population': 60},
 {'id': 5, 'capital_id': 4, 'name': 'Spain', 'population': 47}]
```

It's really handy to read all your data into memory but it's not always possible if a file is very big. For such cases, Frictionless provides streaming functions:

```python goodread title="Python"
from frictionless import Resource

with Resource('country-3.csv') as resource:
    pprint(type(resource.byte_stream))
    pprint(type(resource.text_stream))
    pprint(resource.list_stream)
    pprint(resource.row_stream)
    for row in resource.row_stream:
      print(row)
```
```
<class 'frictionless.loader.ByteStreamWithStatsHandling'>
<class '_io.TextIOWrapper'>
<itertools.chain object at 0x7fa95be13880>
<generator object Resource.__read_row_stream.<locals>.row_stream at 0x7fa95be45580>
{'id': 1, 'capital_id': 1, 'name': 'Britain', 'population': 67}
{'id': 2, 'capital_id': 3, 'name': 'France', 'population': 67}
{'id': 3, 'capital_id': 2, 'name': 'Germany', 'population': 83}
{'id': 4, 'capital_id': 5, 'name': 'Italy', 'population': 60}
{'id': 5, 'capital_id': 4, 'name': 'Spain', 'population': 47}
```

## Package Class

The Package class provides functions to read the contents of a package. First of all, let's create a package descriptor:

```bash goodread title="CLI"
frictionless describe *-3.csv --json > country.package.json
```
Note that --json is used here to output the descriptor in JSON format. Without this, the default output is in YAML format as we saw above.

We can create a package from paths and read the package's resources:

```python goodread title="Python"
from frictionless import Package

package = Package('*-3.csv')
pprint(package.get_resource('country-3').read_rows())
pprint(package.get_resource('capital-3').read_rows())
```
```
[{'id': 1, 'capital_id': 1, 'name': 'Britain', 'population': 67},
 {'id': 2, 'capital_id': 3, 'name': 'France', 'population': 67},
 {'id': 3, 'capital_id': 2, 'name': 'Germany', 'population': 83},
 {'id': 4, 'capital_id': 5, 'name': 'Italy', 'population': 60},
 {'id': 5, 'capital_id': 4, 'name': 'Spain', 'population': 47}]
[{'id': 1, 'name': 'London'},
 {'id': 2, 'name': 'Berlin'},
 {'id': 3, 'name': 'Paris'},
 {'id': 4, 'name': 'Madrid'},
 {'id': 5, 'name': 'Rome'}]
```

The package by itself doesn't provide any read functions directly because that is a role of its resources. So everything written above for the Resource class can be used within a package.

## Header Class

After opening a resource you get access to a `resource.header` object which describes the resource in more detail. This is a list of normalized labels but also provides some additional functionality. Let's take a look:

```python goodread title="Python"
from frictionless import Resource

with Resource('capital-3.csv') as resource:
  print(f'Header: {resource.header}')
  print(f'Labels: {resource.header.labels}')
  print(f'Fields: {resource.header.fields}')
  print(f'Field Names: {resource.header.field_names}')
  print(f'Field Positions: {resource.header.field_positions}')
  print(f'Errors: {resource.header.errors}')
  print(f'Valid: {resource.header.valid}')
  print(f'As List: {resource.header.to_list()}')
```
```
Header: ['id', 'name']
Labels: ['id', 'name']
Fields: [{'name': 'id', 'type': 'integer'}, {'name': 'name', 'type': 'string'}]
Field Names: ['id', 'name']
Field Positions: [1, 2]
Errors: []
Valid: True
As List: ['id', 'name']
```

The example above covers the case when a header is valid. For a header that contains errors in its tabular structure this information can be much more useful, revealing discrepancies, duplicates or missing cell information. Please read [API Reference](/docs/references/api-reference/) for more details.

## Row Class

The `extract`, `resource.read_rows()` and other functions return or yield row objects. In Python, this returns a dictionary with the following information:

```python goodread title="Python"
from frictionless import Resource, Detector

detector = Detector(schema_patch={'missingValues': ['1']})
with Resource('data/capital-3.csv', detector=detector) as resource:
  for row in resource:
    print(f'Row: {row}')
    print(f'Cells: {row.cells}')
    print(f'Fields: {row.fields}')
    print(f'Field Names: {row.field_names}')
    print(f'Field Positions: {row.field_positions}')
    print(f'Value of field "name": {row["name"]}') # accessed as a dict
    print(f'Row Position: {row.row_position}') # physical line number starting from 1
    print(f'Row Number: {row.row_number}') # counted row number starting from 1
    print(f'Blank Cells: {row.blank_cells}')
    print(f'Error Cells: {row.error_cells}')
    print(f'Errors: {row.errors}')
    print(f'Valid: {row.valid}')
    print(f'As Dict: {row.to_dict(json=False)}')
    print(f'As List: {row.to_list(json=True)}') # JSON compatible data types
    break
```
```
Row: {'id': None, 'name': 'London'}
Cells: ['1', 'London']
Fields: [{'name': 'id', 'type': 'integer'}, {'name': 'name', 'type': 'string'}]
Field Names: ['id', 'name']
Field Positions: [1, 2]
Value of field "name": London
Row Position: 2
Row Number: 1
Blank Cells: {'id': '1'}
Error Cells: {}
Errors: []
Valid: True
As Dict: {'id': None, 'name': 'London'}
As List: [None, 'London']
```

As we can see, this output provides a lot of information which is especially useful when a row is not valid. Our row is valid but we demonstrated how it can preserve data about missing values. It also preserves data about all cells that contain errors. Please read "API Reference" for more details.
