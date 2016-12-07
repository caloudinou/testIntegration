/**
 * Created by Navière Pascal on 07/12/2016.
 */


var gulp        = require('gulp');
var concat      = require('gulp-concat');
var rename      = require('gulp-rename');
var uglify      = require('gulp-uglify');
var runSequence = require("run-sequence");

/**
 * Concat all app js files into one file
 */
gulp.task('build-concat-js', function() {
    return gulp.src([
        'app/**/*.js'
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./app_prod/src/js/'));
});


/**
 * Compress app.js and save it as app.min.js
 */
gulp.task('build-compress-js', function() {
    return gulp.src('./app_prod/src/js/app.js')
        //.pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./app_prod/src/js/'));
});

/**
 * default task
 */

gulp.task('default-js', function(callback) {
    runSequence('build-concat-js',
        'build-compress-js',
        callback);
});