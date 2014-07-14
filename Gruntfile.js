module.exports = function(grunt) {
    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/build/main.css': 'css/main.sass'
                }
            } 
        },
        haml: {
            dist: {
                files: {
                    'index.html': 'index.haml'
                }
            }
        },
        concat: {   
            dist: {
                src: [
                    'js/libs/*.js', // All JS in the libs folder
                    'js/main.js'  // This specific file
                ],
                dest: 'js/build/production.js',
            }
        },
        uglify: {
            build: {
                src:  'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },
        watch: {
            haml: {
                files: ['index.haml'],
                tasks: ['haml'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['css/*.sass'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            },
            script: {
                files: ['Gruntfile.js', 'js/main.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false
                }
            }
        },
        validation: {
            files: {
                src: ['*.html']
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'js/main.js']
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-haml');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-html-validation');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['haml', 'validation', 'jshint', 'sass', 'concat', 'uglify']);
 
    grunt.registerTask('dev', ['watch']);
};
