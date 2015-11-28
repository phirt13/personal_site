'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');

gulp.task('sass', function() {

  gulp.src('./public/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    // .pipe(minifyCSS({compaibility: 'ie8'}))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./public/sass/**/*.scss', ['sass']);
});

gulp.task('build', ['sass']);
gulp.task('default', ['build']);
