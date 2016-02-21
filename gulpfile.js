var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var shell = require('gulp-shell')

gulp.task('serve', function() {
    browserSync.init({
        proxy: "localhost:5000",
        reloadDelay: 1800
    });

    gulp.watch("content/**/*.lr").on('change', browserSync.reload);
    gulp.watch("assets/static/styles/*.css").on('change', browserSync.reload);
    gulp.watch("templates/**/*.html").on('change', browserSync.reload);
});

gulp.task('default', shell.task([
  'lektor server'
]));
