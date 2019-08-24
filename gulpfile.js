var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('compilar-sass',function(){
    return gulp.src(['*.scss','src/**/*.scss'])
    .pipe(sass().on('error',function(err){
        console.log(err)
    }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('css'))
})

gulp.task('monitorar',function(){
    gulp.watch(['*.scss','src/**/*.scss'],gulp.series('compilar-sass'))
})

gulp.task('default',gulp.series('monitorar'));

