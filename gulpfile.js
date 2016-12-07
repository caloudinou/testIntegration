/**
 * @author Pascal Navière <pascalou@gmail.com>
 */

'use strict';

var gulp        = require('gulp');
var runSequence = require("run-sequence");


require('./gulp_extend/scss-to-css');
require('./gulp_extend/concatJs');
require('./gulp_extend/html');
require('./gulp_extend/bower');
require('./gulp_extend/config-json');
require('./gulp_extend/translate-json');
require('./gulp_extend/font');
require('./gulp_extend/watch');
require('./gulp_extend/webserver');


/**
 * this default task will launch all task of initialization
 */
gulp.task('default', function(callback) {
    runSequence('bower',
        ['build-copy-img',
        'default-css',
        'default-js',
        'default-html',
        'default-font'],
        callback);
});