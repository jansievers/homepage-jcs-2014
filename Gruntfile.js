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
                css: {
                    files: ['css/*.sass'],
                    tasks: ['sass'],
                    options: {
                        spawn: false
                    }
                }
            }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['sass', 'concat', 'uglify']);
    grunt.registerTask('dev', ['watch']);

};