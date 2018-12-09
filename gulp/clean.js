const config = require('../config');
const gulp = require('gulp');
const clean = require('gulp-clean');
const notify = require('gulp-notify');

const source = config.dest.clean;
const message = config.notify.clean;

module.exports = () => {
  return gulp.src(source)
    .pipe(clean())
    .pipe(notify(message));
};