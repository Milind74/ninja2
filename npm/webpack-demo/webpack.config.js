const path = require('path');
module.exports = {
 mode: 'development',
 entry: {
   index: './src/index.js',
   shoes: './src/shoes.js',
   shirt: './src/shirt.js',


 },
  output: {
   filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};