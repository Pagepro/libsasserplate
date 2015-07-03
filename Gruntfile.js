module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
        cachebreaker: 'grunt-cache-breaker',
        htmllint: 'grunt-html'
    });
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            dev: {
                files: [
                    // copy javascripts
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['js/**'],
                        dest: 'static/'
                    },
                    // copy images
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['img/**'],
                        dest: 'static/'
                    },
                    // copy fonts
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['fonts/**'],
                        dest: 'static/'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/jquery/dist',
                        src: ['jquery.js'],
                        dest: 'static/js/vendor'
                    }
                ]
            }
        },
        watch: {
            // sass compilation
            sass: {
                files: ['src/sass/*.scss', 'src/sass/partials/*.scss', 'src/sass/vendor/*.scss'],
                tasks: ['sass']
            },
            // enable LiveReload for css files
            css: {
                files: ['static/css/*.css'],
                options: {
                    livereload: 9000
                }
            },
            // enable LiveReload for html files
            html: {
                files: ['*.html'],
                options: {
                    livereload: 9000
                }
            },
            // enable JS copy
            copy: {
                files: ['src/js/*.js', 'src/img/**'],
                tasks: ['copy:dev']
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'static/css/main.css': 'src/sass/main.scss'
                }
            }
        },
        uglify: {
            all: {
                files: {
                    'static/js/app.min.js': [
                        'node_modules/jquery/dist/jquery.js',
                        'src/js/plugins.js',
                        'src/js/main.js'
                    ]
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: grunt.option('port') || 8080,
                    hostname: 'localhost',
                    base: ''
                }
            }
        },
        kraken: {
            options: {
                key: '467edac82c8bc9191c21ef240f1162cd',
                secret: 'ac9c593eab4db75f97c99aa63a1a9c38ed15f76c',
                lossy: false
            },
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'static/img/',
                    src: ['**/*.{png,jpg,jpeg,gif}'],
                    dest: 'static/img/'
                }]
            }
        },
        sprite:{
            all: {
                src: 'src/img/sprite/*.png',
                dest: 'static/img/sprite.png',
                imgPath: '../img/sprite.png',
                destCss: 'src/sass/sprites.scss'
            }
        },
        autoprefixer: {
            dist: {
                files: {
                    'static/css/main.css': 'static/css/main.css'
                }
            }
        },
        cachebreaker: {
            dev: {
                options: {
                    match: ['main.js', 'main.css', 'plugins.js']
                },
                files: {
                    src: ['*.html']
                }
            }
        },
        htmllint: {
            all: ["*.html"]
        },
        jshint: {
            jshintrc: '.jshintrc',
            all: ['Gruntfile.js', 'static/js/main.js']
        }
    });
    // Default task(s).
    grunt.registerTask('default', ['sass', 'connect:server', 'copy:dev', 'watch']);
    // SASS compilation only
    grunt.registerTask('compile', ['sass']);
    // CSS Sprites
    grunt.registerTask('sprites', ['sprite']);
    // Publishing tasks: cacheBurst, image optimalization
    grunt.registerTask('publish', ['cachebreaker', 'kraken', 'autoprefixer', 'htmllint', 'jshint']);
    // Images optimalization
    grunt.registerTask('krak', ['kraken']);
};
