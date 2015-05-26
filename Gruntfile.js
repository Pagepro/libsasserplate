module.exports = function (grunt) {
    require('time-grunt')(grunt);

    require('jit-grunt')(grunt, {
      sprite: 'grunt-spritesmith'
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
                tasks: ['sass', 'autoprefixer', 'cssmin']
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
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: [{
                    expand: true,
                    cwd: 'static/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'static/css',
                    ext: '.min.css'
                }]
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
                key: '392a6ec2e40984badb17c88f11d20c25',
                secret: '00167e53c8d24068e73149c941afa866cb6eb48d',
                lossy: true
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
        }
    });
    // Default task(s).
    grunt.registerTask('default', ['sass', 'connect:server', 'copy:dev', 'cssmin', 'watch']);
    // SASSS/Compass compilation only
    grunt.registerTask('compile', ['sass']);
    // CSS Sprites
    grunt.registerTask('sprites', ['sprite:all']);
    // Images optimalization
    grunt.registerTask('krak', ['kraken']);
};
