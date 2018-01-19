var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch',function(){
    browserSync.init({
        server:{
            //notify: false,//when we don't want a black box when reloading
            baseDir:"app"
        }
    });
    watch('./app/index.html', function(){
        browserSync.reload();//gulp.start('html');//was just an example now is for reloading
    });
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('cssInject');
    });
});

gulp.task('cssInject',['styles'],function(){
    return gulp.src('./app/temp/styles/styles.css').pipe(browserSync.stream());
});