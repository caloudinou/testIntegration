/**
 * Created by Navière Pascal on 07/12/2016.
 */

var gulp        = require('gulp');
var concat      = require('gulp-concat');
var htmlmin     = require('gulp-htmlmin');


/**
 * Compile index.html files
 */
gulp.task('build-index', function() {
    return gulp.src(['app/sources/html/header.html','./app/components/header/*.html','./app/components/paralax/*.html','./app/components/partA/*.html','./app/components/partB/*.html','app/sources/html/footer.html'])
        .pipe(concat('index.html'))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('app_prod/'));
});

/**
 * default task html
 */
gulp.task('default-html', [ 'build-index']);
