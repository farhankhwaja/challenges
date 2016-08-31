module.exports = (grunt) => {
  grunt.loadNpmTasks("gruntify-eslint");
  grunt.registerTask('lint', ['eslint']);

  return {
    eslint: {
      src: ['./app/server/**/*.js']
    }
  }
}
