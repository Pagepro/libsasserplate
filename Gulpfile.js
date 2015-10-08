var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browser = require('browser-sync');
var reload = browser.reload;
var rev = require('gulp-rev');
var autoprefixer = require('gulp-autoprefixer');
var htmllint = require('gulp-htmllint');
var eslint = require('gulp-eslint');
var plumber = require('gulp-plumber');

gulp.task('rev', function () {
    gulp.src('*.html')
        .pipe(rev())
        .pipe(gulp.dest('.'));
});
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
    gulp.watch("src/sass/**", ['sass']);
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
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./static/css'))
        .pipe(reload({
            stream: true
        }));
});
gulp.task('sprites', function () {
    var spriteData = gulp.src('src/img/sprite/*.png').pipe(spritesmith({
        imgName: 'static/img/sprite.png',
        cssName: 'src/sass/sprites.scss',
        imgPath: '../static/img/sprite.png',
        engine: phantomjssmith
    }));
    return spriteData.pipe(gulp.dest('.'));
});
gulp.task('autoprefixer', function () {
    return gulp.src('static/css/*.css')
        .pipe(autoprefixer({
            browsers: ['> 1%'],
            cascade: false
        }))
        .pipe(gulp.dest('static/css/'));
});
gulp.task('htmllint', function() {
    return gulp.src('index.html')
        .pipe(htmllint());
});
gulp.task('lint', function () {
    return gulp.src(['static/js/main.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});
gulp.task('default', ['sass', 'copy', 'watch', 'serve']);
gulp.task('compile', ['sass']);
gulp.task('publish', ['rev', 'autoprefixer', 'htmllint', 'lint']);