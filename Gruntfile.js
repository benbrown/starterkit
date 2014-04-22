module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		concat: {
		    dist: {
		        src: [
              'dev/js/*.js',
		        ],
		        dest: 'dev/build/app.js',
		    },
		    libs: {
		        src: [
		        	// 'public/js/libs/jquery-1.10.2.min.js',
		        ],
		        dest: 'dev/build/libs.js',
		    }

		},
		uglify: {
		    build: {
		        src: 'dev/build/app.js',
            dest: 'dev/build/app.js',
		    },
		    libs: {
		        src: 'dev/build/libs.js',
            dest: 'dev/build/libs.js',
		    }

		},
		sass: {
		    dist: {
		        options: {
		            style: 'compressed'
		        },
		        files: {
		            'dev/build/style.css': 'dev/css/style.scss',
		        }
		    }
		},
    autoprefixer: {
        dist: {
            files: {
                  'dev/build/style.css': 'dev/build/style.css',
            }
        }
    },
    shell: {
        compile_views: {
          command: 'dev/scripts/build.sh',
          options: {
            stdout: true
          }
        }
    },
		watch: {
		  options: {
		        livereload: true,
		    },
		    // views: {
			  //   files: ['dev/views/src/*.hbs'],
			  //   tasks: ['shell:compile_views','concat','copy'],
			  //   options: {
				//     spawn:false,
			  //   },
		    // },
        partials: {
          files: ['dev/partials/*'],
          tasks: ['copy'],
          options: {
            spawn:false,
          },
        },
		    scripts: {
		        files: ['dev/js/*.js'],
		        tasks: ['concat','copy'],
		        options: {
		            spawn: false,
		        },
		    },
        css: {
            files: ['dev/css/*.scss','dev/css/components/*.scss'],
            tasks: ['sass','autoprefixer','copy'],
            options: {
                spawn: false,
            }
        }
		},
		nodemon: {
		  dev: {
		    script: 'server.js',
		    options: {
			    watch: ['.','public/','public/js','public/css']
		    }
		  }
		},
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'dev/build/',src: ['app.js'],dest:'public/js/'},
          {expand: true, cwd: 'dev/build/',src: ['libs.js'],dest:'public/js/'},
          {expand: true, cwd: 'dev/build/',src: ['style.css'],dest:'public/css/'},
          {expand: true, cwd: 'dev/partials/',src: ['**'],dest:'public/partials/'}
        ]
      }
    }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
	  grunt.loadNpmTasks('grunt-contrib-uglify');
	  grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.loadNpmTasks('grunt-notify');
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['shell','concat','sass','autoprefixer','copy']);
    grunt.registerTask('prod', ['shell','concat','sass','uglify','autoprefixer','copy']);
};
