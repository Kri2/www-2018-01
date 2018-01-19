var gulp = require('gulp');
require('./gulp/tasks/styles');
require('./gulp/tasks/watch');

//dummy task
gulp.task('default',function(){
    console.log("Hooray, You created a gulp task!");
});
//dummy task
gulp.task('html',function(){
    console.log("Imagine something useful being done to your HTML here.");
});




