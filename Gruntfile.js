module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.initConfig({
    browserify: require('./grunt-config/browserify.js'),
    clean: ['dist']
  });

  grunt.registerTask('build', ['clean', 'browserify:build']);
  grunt.registerTask('dev', ['clean', 'browserify:watch']);
};
