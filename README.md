# grunt-wrapup

Grunt Plugin for [WrapUp](https://github.com/mootools/wrapup). Wraps your node
modules into web modules.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out
the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains
how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as
install and use Grunt plugins. Once you're familiar with that process, you may
install this plugin with this command:

```shell
npm install grunt-wrapup --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with
this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-wrapup');
```

## The "wrapup-partition" task

### Overview

In your project's Gruntfile, add a section named `wrapup` to the data object
passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  'wrapup-partition': {
    your_target: {
      map: "js/mapping.json",
      output: "js/build",
      path: "js",
      compress: false
    },
  },
})
```

### Options

For what the options do, have a look at the
[wrapup-partition](https://github.com/arian/wrapup-partition/blob/master/README.md)
README.

