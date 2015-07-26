var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browser = require('browser-sync');
var reload = browser.reload;

gulp.task('serve', ['sass'], function() {
    browser({
        port: process.env.PORT || 4500,
        open: false,
        ghostMode: false,
        server: {
            baseDir: '.'
        }
    });
});
gulp.task('watch', function() {
    gulp.watch("src/sass/*.scss", ['sass']);
    gulp.watch("src/img/**", ['copy']);
    gulp.watch("src/js/**", ['copy']);
    gulp.watch(['*.html', 'src/**/*.js'], reload);
});
gulp.task('copy', function() {
    gulp.src('src/js/**')
      .pipe(gulp.dest('static/js'));
    gulp.src('src/img/**')
      .pipe(gulp.dest('static/img'));
    gulp.src('src/fonts/**')
      .pipe(gulp.dest('static/fonts'));
    gulp.src('node_modules/jquery/dist/jquery.js')
      .pipe(gulp.dest('static/js/vendor'));
});
gulp.task('sass', function () {
    gulp.src('./src/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./static/css'))
        .pipe(reload({
            stream: true
        }));
});
gulp.task('default', ['sass', 'copy', 'watch', 'serve']);