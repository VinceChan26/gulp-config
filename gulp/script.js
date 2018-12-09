const config = require('../config');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const jshint = require('gulp-jshint');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const notify = require('gulp-notify');

const src = config.src.js;
const dest = config.dest.js;
const { renameOptions } = config.options;
const fileName = config.fileName.js;
const message = config.notify.js;

module.exports = () => {
  return gulp.src(src)
    .pipe(jshint('./gulp/.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat(fileName))
    .pipe(uglify())
    .pipe(rename(renameOptions))
    .pipe(gulp.dest(dest));
};
