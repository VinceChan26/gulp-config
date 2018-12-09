const gulp = require('gulp');
const style = require('./gulp/style');
const script = require('./gulp/script');
const imagemin = require('./gulp/imagemin');
const clean = require('./gulp/clean');

gulp.task('style', style);
gulp.task('script', script);
gulp.task('image', imagemin);
gulp.task('clean', clean);

gulp.task('build', ['clean'], () => {
  gulp.start(['style', 'script', 'image'])
});
