var gulp = require('gulp');
var sass = require('gulp-sass');
var lint = require('gulp-sass-lint');
gulp.task('default', function() {
    return gulp.src('sass/*.scss')
        .pipe(sass({outputStyle:'expanded'}))
        .pipe(gulp.dest('dest/'));
});

gulp.task('lint', function() {
    return gulp.src('sass/**/*.scss')
        .pipe(lint())
        .pipe(lint.format())
        .pipe(lint.failOnError());
});
