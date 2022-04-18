const path = require('path');
module.exports = {
 mode: 'development',
 entry: {
   index: './src/index.js',
   technology: './src/technology.js',
   tech1: './src/tech1.js',
   featuredsummer:'./src/featuredsummer.js',




 },
  output: {
   filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};