const gulp = require('gulp')
const sass = require('gulp-sass')

function style() {
    return gulp.src('./public/style/scss/*.scss')
        .pipe(sass({outputStyle: 'compressed'})
        .on('error', sass.logError))
        .pipe(gulp.dest('./public/style/css'))
}

function watch() {
    gulp.watch('./public/style/scss/*.scss', style)
}

exports.style = style;
exports.watch = watch;