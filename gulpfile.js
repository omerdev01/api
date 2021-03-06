var gulp = require('gulp');
var watch = require('gulp-watch');
var run = require('gulp-run');

gulp.task('default', ['watch']);

gulp.task('watch', function() {
    return gulp.watch('src/**/*.apib', ['preview'])
});

gulp.task('build', function() {
    return run('npm run build', {verbosity: 0}).exec();
});
