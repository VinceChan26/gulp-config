const config = require('../config');
const gulp = require('gulp');
const sass = require('gulp-sass');
const mincss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const notify = require('gulp-notify');
const concat = require('gulp-concat');

const {
  sassOptions,
  prefixerOptions,
  renameOptions,
} = config.options;
const src = config.src.style;
const dest = config.dest.style;
const fileName = config.fileName.style;
const message = config.notify.style;

sass.compile = require('node-sass')

module.exports = () => {
  return gulp.src(src)
    .pipe(sass(sassOptions))
    .pipe(concat(fileName))
    .pipe(autoprefixer(prefixerOptions))
    .pipe(mincss())
    .pipe(rename(renameOptions))
    .pipe(gulp.dest(dest))
    .pipe(notify(message));
};
