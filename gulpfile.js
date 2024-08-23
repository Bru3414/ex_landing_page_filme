const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
}

function watch() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({    outputStyle: 'compressed'   }))
        .pipe(gulp.dest('./dist/styles'))
}

exports.default = gulp.parallel(styles, scripts);
exports.watch = watch;