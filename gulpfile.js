var browserify = require('browserify'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    clean = require('gulp-clean'),
    imagemin = require('gulp-imagemin'),
    source = require('vinyl-source-stream');


// Scripts
// =======

gulp.task('scripts', function(){
    return browserify('./lib/src/scripts/main.js')
    .bundle({debug: true})
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./lib/generated/scripts/'));
});


// Styles
// ======

gulp.task('styles', function () {
    gulp.src('./lib/src/sass/**/*.scss')
    .pipe(sass({
        includePaths: ['./lib/src/sass/'].concat(require('node-neat').includePaths)
    }))
    .pipe(gulp.dest('./lib/generated/styles/'));
});


// Images
// ======

gulp.task('images', function () {
    gulp.src('./lib/src/images/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('./lib/generated/images'));
});


// Components
// ==========
gulp.task('components', function(){
    gulp.src('./lib/src/components/**/*')
    .pipe(gulp.dest('./lib/generated/components'));
});


// Helpers
// =======
gulp.task('clean', function() {
    return gulp.src(['./lib/generated'], {read: false})
    .pipe(clean());
});

gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'images', 'components', 'watch');
});

gulp.task('build', ['clean'], function() {
    gulp.start('styles', 'scripts', 'images', 'components');
});



gulp.task('watch', function() {

    // Watch .scss files
    gulp.watch('./lib/src/sass/**/*.scss', ['styles']);

    // Watch .js files
    gulp.watch('./lib/src/scripts/**/*.js', ['scripts']);

    // Watch image files
    gulp.watch('./lib/src/sass/images/**/*', ['images']);

});
