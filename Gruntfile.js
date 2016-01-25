module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-cache-bust');

  grunt.initConfig({
    browserify: require('./grunt-config/browserify.js'),
    clean: ['dist'],
    uglify: require('./grunt-config/uglify.js'),
    cacheBust: require('./grunt-config/cacheBust.js')
  });

  grunt.registerTask('build', ['clean', 'browserify:build', 'uglify', 'cacheBust']);
  grunt.registerTask('dev', ['clean', 'browserify:watch']);
};
