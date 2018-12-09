const config = require('../config');
const gulp = require('gulp');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');

const src = config.src.image;
const dest = config.dest.image;
const imageminOptions = config.options.imageminOptions;
const message = config.notify.image;

module.exports = () => {
  return gulp.src(src)
    .pipe(cache(imagemin(imageminOptions)))
    .pipe(gulp.dest(dest))
    .pipe(notify(message));
};