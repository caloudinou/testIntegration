/**
 * Created by Navière Pascal on 07/12/2016.
 */

var gulp = require('gulp');
/**
 * copy config json file
 */
gulp.task('build-copy-json-config', function() {
    return gulp.src('app/config/*.json')
        .pipe(gulp.dest('app_prod/src/config/'));
});
gulp.task('build-copy-img', function() {
    return gulp.src('app/sources/img/*')
        .pipe(gulp.dest('app_prod/src/img/'));
});

/**
 * default task json
 */
gulp.task('default-json',['build-copy-json-translation', 'build-copy-json-config']);
