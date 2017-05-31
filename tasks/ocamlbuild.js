/*
 * grunt-ocamlbuild
 *
 * Copyright (c) 2017 Nicolas Relange, contributors
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  var path = require('path');

  grunt.registerTask('ocamlbuild', 'Use ocamlbuild to compile some OCaml code', function() {
    var done = this.async ();

    var target = this.target;
    var options = this.options();

    var ocamlbuildDone = function (error, result, code) {
      grunt.verbose.writeln('ocamlbuild done');
      if (error) {
        grunt.log.error ('ocamlbuild error:');
        grunt.log.writeln (result.stdout);
        grunt.log.writeln (result.stderr);
        grunt.fail.warn ('ocamlbuild error');
      }
      else {
        grunt.log.ok('ocamlbuild ' + target + ' successful');
        grunt.verbose.writeln(result);
        done ();
      }
    }
    
    grunt.verbose.writeln('Target is  ' + target);
    var ocamlbuild_args = options.ocamlbuild.concat (['-use-ocamlfind', target]);
    grunt.log.writeln('ocamlbuild ' + ocamlbuild_args.join(' '));
    grunt.util.spawn({
      cmd: 'ocamlbuild',
      args: ocamlbuild_args
    }, ocamlbuildDone);
  });
};
