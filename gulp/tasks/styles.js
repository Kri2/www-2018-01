var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer')
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

gulp.task('styles',function(){
    console.log("Imagine Sass or PostCSS tasks running here.");
    return gulp.src("./app/assets/styles/styles.css")
        .pipe(postcss([cssImport,cssvars,nested,autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));//return jest dlatego, ze src pipe jest asynchronious, node needs to know when it finishes
});