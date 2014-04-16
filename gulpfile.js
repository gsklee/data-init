var gulp = require('gulp'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename'),
    ngmin = require('gulp-ngmin'),
    uglify = require('gulp-uglify');

gulp.task('scripts', function() {
  return gulp.src('angular-init.js').
              pipe(rename('angular-init.min.js')).
              pipe(ngmin()).
              pipe(uglify({
                preserveComments: 'some',
                outSourceMap: true
              })).
              pipe(gulp.dest('.'));
});

gulp.task('default', function() {
  gulp.start('scripts');
});
