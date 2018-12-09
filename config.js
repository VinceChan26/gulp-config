const src = {
  style: './src/scss/**/*.{sass,scss}',
  copy: './src/public/**/*',
  js: './src/js/**/*.js',
  image: './src/images/*.*',
};

const dest = {
  clean: './dist',
  style: './dist/assets/css',
  copy: './dist/assets/public',
  js: './dist/assets/js',
  image: './dist/assets/images',
};

const options = {
  sassOptions: { outputStyle: 'expanded' },
  prefixerOptions: {
    browsers: ['last 2 versions'],
    cascade: false,
  },
  renameOptions: { suffix: '.min' },
  imageminOptions: {
    optimizationLevel: 5,
    progressive: true,
    interlaced: true,
    multipass: true
  },
};

const fileName = {
  style: 'bundle.css',
  js: 'bundle.js',
};

const notify = {
  style: 'Syles task complete',
  js: 'Scripts task complete',
  image: 'Images task complete',
  clean: 'Clean public resource',
};

module.exports = {
  src: src,
  dest: dest,
  notify: notify,
  options: options,
  fileName: fileName,
};
