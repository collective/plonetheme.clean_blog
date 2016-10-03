module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // we could just concatenate everything, really
        // but we like to have it the complex way.
        // also, in this way we do not have to worry
        // about putting files in the correct order
        // (the dependency tree is walked by r.js)
        less: {
            dist: {
                options: {
                    paths: [],
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: '++theme++clean_blog/less/clean_blog-compiled.css.map',
                    sourceMapFilename: 'src/plonetheme/clean_blog/theme/less/clean_blog-compiled.css.map',
                    modifyVars: {
                        "isPlone": "false"
                    }
                },
                files: {
                    'src/plonetheme/clean_blog/theme/css/main.css': 'src/plonetheme/clean_blog/theme/less/main.less'
                }
            }
        },

        watch: {
            scripts: {
                files: ['src/plonetheme/clean_blog/theme/scripts/**/*.js'],
                tasks: ['jshint', 'uglify']
            },
            stylesheets: {
              files: ['src/plonetheme/clean_blog/theme/**/*.css', 'src/plonetheme/clean_blog/theme/**/*.less'],
              tasks: ['less']
            },
            // html:{
            //     files: ['src/plonetheme/clean_blog/theme/index.html'],
            //     tasks: ['htmlmin']
            // },
        },
        browserSync: {
            html: {
                bsFiles: {
                    src : ['src/plonetheme/clean_blog/theme/less/*.less']
                },
                options: {
                    watchTask: true,
                    debugInfo: true,
                    server: {
                        baseDir: "."
                    }
                }
            },
            plone: {
                bsFiles: {
                    src : ['src/plonetheme/clean_blog/theme/less/*.less']
                },
                options: {
                    watchTask: true,
                    debugInfo: true,
                    proxy: "localhost:8080"
                }
            }
        },

        jshint: {
             options: {
                reporter: require('jshint-stylish'),
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                },
            },

             build: ['Gruntfile.js', 'src/plonetheme/clean_blog/theme/scripts/**/*.js']
        },

        uglify: {
              options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n',
                mangle: false
              },
              build: {
                files: {
                  'dist/theme/js/clean-blog.min.js': [
                    'src/plonetheme/clean_blog/theme/js/clean-blog.js',

                  ]
                }
            }
        },

        cssmin: {
              options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
              },
              build: {
                files: {
                  'dist/theme/css/main.css': 'src/plonetheme/clean_blog/theme/css/main.css'
                }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/theme/index.html': 'src/plonetheme/clean_blog/theme/index.html',
                }
            },
        },

        copy: {
          dist: {
            files: [
              {
                expand: true,
                flatten: true,
                src: ['src/plonetheme/clean_blog/theme/*'],
                dest: 'dist/theme/', filter: 'isFile'
            },

              {
                expand: true,
                cwd: 'src/plonetheme/clean_blog/theme/',
                src: ['img/**', 'views/**', 'template-overrides/**', 'fonts/**', 'css/**'],
                dest: 'dist/theme/'
            },
            ],
          },
        },

        // make a zipfile
        compress: {
          dist: {
            options: {
              archive: 'plonetheme.clean_blog.zip'
            },
            files: [
              {
              expand: true,
              cwd: 'dist/',
              src: ['theme/**'],
              dest: '', filter: 'isFile'},
            ]
          }
        },

    });

    // grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('bsync', ["browserSync:html", "watch"]);
    grunt.registerTask('plone-bsync', ["browserSync:plone", "watch"]);
    grunt.registerTask('dist', ['copy', 'jshint', 'uglify', 'cssmin', 'less', 'compress']);
};
