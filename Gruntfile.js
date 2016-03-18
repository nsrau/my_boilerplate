module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    clean: {
      js: ["js/app.min.js"],
      css: ["css/style.min.css"]
    },
    concat: {
      js: {
        "src": "js/build/**/*.js",
        "dest": "js/app.js"
      },
      css: {
        "src": 'css/**/*.css',
        "dest": 'css/style.css'
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      your_target: {
        "src": 'css/style.css'
      }
    },
    uglify: {
      js: {
        "src": "js/app.js",
        "dest": "js/app.min.js"
      }
    },
    cssmin: {
      options: {
        keepSpecialComments: 0
      },
      css: {
        src: 'css/style.css',
        dest: 'css/style.min.css'
      }
    },
    clean: {
      js: ["js/app.js"],
      css: ["css/style.css"]
    }

  });

  // Load required modules
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Task definitions
  grunt.registerTask('default', ['clean:js', 'clean:css', 'concat', 'autoprefixer', 'uglify:js', 'cssmin', 'clean:js', 'clean:css']);
};
