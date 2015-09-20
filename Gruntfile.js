module.exports = function(grunt) {
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-jade');
grunt.initConfig({
    
  jade: {
    compile: {
      options: {
        client: false,
        pretty: true
      },
      files: [ {
        cwd: "",
        src: "*.jade",
        dest: "",
        expand: true,
        ext: ".html"
      } ]
    }
  },   
  
  sass: {                              
    dist: {                            
      options: {                       
        outputStyle: 'nested'
      },
      files: {                        
        'css/style.css' : ['scss/style.scss']
      }
    }
  },

  autoprefixer: {
    single_file: {
        options: {
          browsers: ['last 2 versions', 'ie 8', 'ie 9']
        },
      src: 'css/style.css',
      dest: 'css/prefixed/style.css'
    }
  },

  cssmin: {
    target: {
      files: {
        'css/minified/style.css': 'css/prefixed/style.css'
      }
    }
  },

  watch: {
    options: {livereload: true},
      sass: {
        files: ['scss/**/*.scss'],
        tasks: ['sass','autoprefixer','cssmin'],
        options: {
        spawn: false,
        },
      },
      jade: {
        files: ['*.jade', 'partials/*.jade'],
        tasks: ['jade'],
        options: {
        spawn: false,
        },
      },
      html: {
        files: ['*.html'],
        options: {
        spawn: false,
        },
      }
    }
})

grunt.registerTask('default','watch')

} 