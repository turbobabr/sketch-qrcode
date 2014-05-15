module.exports = function(grunt) {

    grunt.initConfig({

        compress: {
            main: {
                options: {
                    archive: 'distr/QR Code.zip',
                    mode: 'zip'
                },
                files: [{ expand: true, src : "**/*", cwd : "src/" }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.registerTask('default', ['compress']);
};