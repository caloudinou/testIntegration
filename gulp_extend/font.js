/**
 * Created by Navière Pascal on 07/12/2016.
 */

var gulp        = require('gulp');
/**
 * copy font file
 */
gulp.task('default-font', function() {
    return gulp.src('app/sources/fonts/**')
        .pipe(gulp.dest('app_prod/src/fonts/'));
});
