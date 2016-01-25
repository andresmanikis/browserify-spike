module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-browserify');

  grunt.initConfig({
    browserify: require('./grunt-config/browserify.js')
  });

  grunt.registerTask('build', ['browserify:build']);
  grunt.registerTask('dev', ['browserify:watch']);
};
