var browserify = require('browserify'),
    gulp = require('gulp'),
    source = require('vinyl-source-stream');

gulp.task('bundle', function(){
    return browserify()
    .bundle({debug: true})
    .pipe(source('main.js'))
    .pipe(gulp.dest('./build/'));
});
