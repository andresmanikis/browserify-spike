module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    browserify: require('./grunt-config/browserify.js'),
    clean: ['dist'],
    uglify: require('./grunt-config/uglify.js')
  });

  grunt.registerTask('build', ['clean', 'browserify:build', 'uglify']);
  grunt.registerTask('dev', ['clean', 'browserify:watch']);
};
