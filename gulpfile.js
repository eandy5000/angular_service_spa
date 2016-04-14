var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    ts = require('gulp-typescript');
    
 gulp.task('default',['index','pages','comboSass','scss','script','watch']);
 
 gulp.task('watch', function(){
     gulp.watch('client/scripts/*.js',['script']);
     gulp.watch('client/styles/scss/*.scss',['comboSass','scss']);
     gulp.watch('client/views/index.html',['index']);
     gulp.watch('client/views/pages/*.html',['pages']);
     
 });   

gulp.task('script', function(){
   return gulp.src('client/scripts/*.js')
       // .pipe(uglify())
          .pipe(gulp.dest('public/scripts/'));
});
 
 gulp.task('comboSass', function(){
     return gulp.src('client/styles/scss/*.scss')
            .pipe(concat('style.scss'))
            .pipe(gulp.dest('client/styles/'));
 });
 
gulp.task('scss',  function(){
   return sass('client/styles/*.scss')
          .pipe(gulp.dest('public/styles/')); 
});

gulp.task('index', function(){
    return gulp.src('client/views/index.html')
           .pipe(gulp.dest('public/views/'));
});

gulp.task('pages', function(){
   return gulp.src('client/views/pages/*.html')
          .pipe(gulp.dest('public/views/pages')); 
});