# grunt-of-ocamlbuild

> Use ocamlbuild to compile some OCaml code


## Getting Started

### Requirements

* Grunt

* ocamlbuild

* Findlib (ocamlfind)


### Installation

Install this plugin:

```shell
$ npm install grunt-ocamlbuild --save-dev
```


Include the task in your Gruntfile:

```js
grunt.loadNpmTasks('grunt-ocamlbuild');
```


## ocamlbuild task

_Run this task with the `grunt ocamlbuild` command._

### target
Type: `String`

Name of the ocamlbuild target


### Options

#### args
Type: `String array`

Additional options to be passed to `ocamlbuild`.



### Usage Examples

```js
ocamlbuild: {
  main: {
    target: 'main.byte',
    options:
      args: []
  },
},
```


##License

Copyright (c) 2017 Lemoine Automation Technologies

Licensed under the MIT license.
