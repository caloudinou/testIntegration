/**
 * Created by Navière Pascal on 07/12/2016.
 */

var gulp = require('gulp');
/**
 * copy translate json file
 */
gulp.task('build-copy-json-translation', function() {
    return gulp.src('app/translation/*.json')
        .pipe(gulp.dest('app_prod/src/translation/'));
});