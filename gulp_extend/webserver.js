/**
 * Created by Navière Pascal on 07/12/2016.
 */

var gulp      = require('gulp');
var webserver = require('gulp-webserver');

/**
 * lunch server to localhost:6969 and
 * reload when the file app_prod change
 */

gulp.task('webserver', function() {
    var stream = gulp.src('./app_prod')
        .pipe(webserver({
            port: 6969,
            livereload: true,
            fallback: 'index.html',
            open: true
        }));
    stream.emit('kill');
    return stream;
});

/**
 * server Watch
 */
gulp.task('watching',['watch','webserver']);