module.exports = function(grunt) {

  grunt.initConfig({
    'gh-pages': {
      options: {
        base: '_site'
      },
      src: '**/*'
    }
  });

  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('deploy', ['gh-pages']);

};
