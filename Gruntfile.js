module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'css/main.css': 'sass/main.scss'
        }
      }
    },
    watch: {
      files: ["./sass/*/*" ],
      tasks: ["sass"]
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);

}
