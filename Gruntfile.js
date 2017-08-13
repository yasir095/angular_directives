module.exports = function(grunt)
{
    'use strict';

    var styles = {};

    styles['public/stylesheets/style.css'] = 'styles/main.scss';

// Project configuration.
    grunt.initConfig({
        express: {
            server: {
                options: {
                    script: 'bin/www'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-jslint');

};