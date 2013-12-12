"use strict";

var fs = require('fs');
var path = require('path');
var WrapUp = require('wrapup/lib/wrapup');
var Partition = require('wrapup-partition');
var forOwn = require('prime/object/forOwn');

module.exports = function(grunt){

	grunt.registerMultiTask('wrapup-partition', 'Build Partition JS', function(){
		var done = this.async();
		var args = this.data;

		if (!args.output){
			grunt.log.error('The output option is required');
			return;
		}

		var wrup = new WrapUp();
		var partition = new Partition();

		partition.on('warn', function(err){
			grunt.fail.warn(err.message);
		});

		var _path = args.path || process.cwd();

		partition.set('output', args.output);
		partition.set('path', _path);
		partition.set('compress', args.compress);

		if (args.map){
			var map = JSON.parse(fs.readFileSync(args.map));
			forOwn(map, function(files){
				files.forEach(function(file){
					wrup.require(_path + '/' + file);
				});
			});
			partition.set('map', map);
		}

		wrup.withOutput(partition);
		wrup.up(function(err, str){
			if (err) throw err;
			grunt.log.ok('wrote files:');
			str.forEach(function(file){
				grunt.log.ok(' - ' + path.relative(_path, file));
			});
			done(err);
		});

	});

};
