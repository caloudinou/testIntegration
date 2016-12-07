/**
 * Created by Navière Pascal on 07/12/2016.
 */

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var cleancss    = require('gulp-clean-css');
var concat      = require('gulp-concat');
var rename      = require('gulp-rename');
var sourcemaps  = require('gulp-sourcemaps');


/**
 * concat all files sass
 */
gulp.task('scss-to-css',function(){

    return gulp.src(['app/sources/scss/main.scss','app/components/**/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(concat('style.scss'))
        .pipe(gulp.dest('./app/sources/scss/'))
        .pipe(sass().on('error', sass.logError))
        .pipe(cleancss(
            {debug: true}, function(details) {
                console.log(details.name + ': ' + details.stats.originalSize);
                console.log(details.name + ': ' + details.stats.minifiedSize);
            },
            {compatibility: 'ie8'}
        ))
        .pipe(sourcemaps.write())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./app_prod/src/css/'));

});


/**
 * default task css
 */
gulp.task('default-css', ['scss-to-css']);
