'use strict';

var gulp	=	require('gulp')
  , jade 	=	require('gulp-jade')
  , sass	=	require('gulp-sass')
  , livereload	=	require('gulp-livereload');

var config = {
    bowerDir: './bower_components'
}

gulp.task('default', ['js', 'images', 'audios', 'jade', 'sass', 'watch'], function() {});

gulp.task('js', function() {
    return gulp.src('client/scripts/*.js').pipe(gulp.dest('./public/js'));
});

gulp.task('images', function() {
    return gulp.src('client/images/*.*')
        .pipe(gulp.dest('./public/images'));
});

gulp.task('audios', function() {
    return gulp.src('client/audios/*.*')
        .pipe(gulp.dest('./public/audios'));
});

gulp.task('jade', function() {
  gulp.src('client/*.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('public/'));
});

gulp.task('sass', function() {
  gulp.src('client/styles/*.scss')
  .pipe(sass({onError: function(e) { console.log(e); } }))
  .pipe(gulp.dest('public/css/'));
});

gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')());
  app.use(express.static(__dirname + '/public'));
  app.listen(5000);
});

gulp.task('watch', ['express'], function() {
  livereload.listen();
  gulp.watch(['client/images/*.*'], ['images']);
  gulp.watch(['client/audios/*.*'], ['audios']);
  gulp.watch(['client/scripts/*.js'], ['js']);
  gulp.watch(['client/styles/**/*.scss'], ['styles']);
  gulp.watch(['client/**/*.jade'], ['jade']);
  gulp.watch('./public/**').on('change', livereload.changed);
});

