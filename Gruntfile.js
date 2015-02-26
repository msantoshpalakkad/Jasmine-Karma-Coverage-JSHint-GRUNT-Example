'use strict';

module.exports = function(grunt) {
  
  grunt.initConfig({

    karma: {
      test: {
        configFile: 'karma.conf.js'
      }
    },
	jshint: {
            test: {
                options: {
					jshintrc: '.jshintrc',
					reporter: require('jshint-html-reporter'),
					reporterOutput: 'jshint-report.html'
                },
                src: ['*.js', 'test/spec/*.js']
            }
		},
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  
  
  grunt.registerTask('default', [
        'karma',
		'jshint'
    ]);
};
