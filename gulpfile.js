var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer')
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

gulp.task('default',function(){
    console.log("Hooray, You created a gulp task!");
});
gulp.task('html',function(){
    console.log("Imagine something useful being done to your HTML here.");
});
gulp.task('styles',function(){
    console.log("Imagine Sass or PostCSS tasks running here.");
    return gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport,cssvars,nested,autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));//return jest dlatego, ze src pipe jest asynchronious, node needs to know when it finishes
});
gulp.task('watch',function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    });
    watch('./app/assets/**/*.css', function(){
        gulp.start('styles');
    });
});