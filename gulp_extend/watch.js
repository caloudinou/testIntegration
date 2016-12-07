/**
 * Created by Navière Pascal on 07/12/2016.
 */

var gulp = require('gulp');

/**
 * Watch every scss / js modification and execute scss or js tasks
 */
gulp.task('watch', function () {
    gulp.watch(['./app/**/*.scss'], ['default-css']);
    gulp.watch(['app/*.js', 'app/**/*.js'], ['default-js']);
    gulp.watch(['app/config/*.json','app/translation/*.json'], ['default-json']);
    gulp.watch(['app/**/*.html'], ['default-html']);
    gulp.watch(['app/sources/font/*'],['default-font']);
});