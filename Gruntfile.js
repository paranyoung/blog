module.exports = function(grunt) {
    // Do grunt-related things in here

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        serve: {
            options: {
                port: 9000
            }

        },
includes:{
    dist:{
            cwd:'html/',
            src:['**/*.html'],
            dest:'dist/',
            options:{
                flatten:true,
                includePath:'html/include/'
            }
        }
    } ,
        less: {
            product: {
                options: {
                    paths: ['assets/css']
                },
                files: {
                    'assets/css/style.css': 'assets/less/import.less'
                }
            },
            dev: {
                options: {
                    paths: ['assets/css'],
                    dumpLineNumbers:"comments"

                },
                files: {
                    'assets/css/style.dev.css': 'assets/less/import.less'
                }
            }
        },
        watch: {
            scripts: {
                files: ['assets/less/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                },
            },
            
        }
    });





grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-serve');
    grunt.loadNpmTasks('grunt-includes');

    grunt.registerTask('default', ['serve']);
}
