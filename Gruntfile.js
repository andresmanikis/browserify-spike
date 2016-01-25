module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-browserify');

  grunt.initConfig({
    browserify: {
      build: {
        files: {
          "dist/bundle.js": "src/app.js",
        }
      },
      watch: {
        files: {
          "dist/bundle.js": "src/app.js",
        },
        options: {
          watch: true,
          keepAlive: true,
        }
      }
    }
  });

  grunt.registerTask('build', ['browserify:build']);
  grunt.registerTask('dev', ['browserify:watch']);
};
