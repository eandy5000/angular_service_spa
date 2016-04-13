var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    ts = require('gulp-typescript');
    
 gulp.task('default',['type','watch']);
 
 gulp.task('watch', function(){
     gulp.watch('client/scripts/ts/*.ts',['type']);
     
 });   
 
 gulp.task('type', function(){
     return gulp.src('client/scripts/ts/*.ts')
            .pipe(ts({
                noImplicitAny : true,
                out : 'app.js'
            }))
        //  .pipe(uglify())  
            .pipe(gulp.dest('public/scripts/'))
 });