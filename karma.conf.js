module.exports = function(config) {
  config.set({
    basePath: '',
    autoWatch: true,
    frameworks: ['jasmine'],
    files: [
      'sqrt.js',
      'tut1.js',
      'tut2.js',
      'tut3.js',
      'test/spec/*.js'
    ],
    browsers: ['IE'],

    reporters: ['progress', 'coverage'],
    preprocessors: { '*.js': ['coverage'] },

    singleRun: true
  });
};
