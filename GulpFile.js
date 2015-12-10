/*
var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
  return gulp.src("src/app.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});
*/
var gulp = require("gulp");
var babelify = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

gulp.task('default', function () {
    var bundler = browserify({
        entries: 'src/app.js',
        debug: true
    });
    bundler.transform(babelify);

    bundler.bundle()
        .on('error', function (err) { console.error(err); })
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        //.pipe(uglify()) // Use any gulp plugins you want now
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
});