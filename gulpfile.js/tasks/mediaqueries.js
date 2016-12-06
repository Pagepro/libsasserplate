var config    = require('../config');
var gulp      = require('gulp');
var combineMq = require('gulp-combine-mq');

gulp.task('mediaqueries', function () {
    return gulp.src('static/css/main.css')
    .pipe(combineMq({
        beautify: false
    }))
    .pipe(gulp.dest('static/css'));
});
