const path = require('path');
const webpack = require('webpack');

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

const config = {
  entry: {
    src: PATHS.src,
  },
  
  output: {
    path: PATHS.build,
    filename: 'ReactHeadline.js',
  },
};

module.exports = config;