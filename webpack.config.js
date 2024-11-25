const path = require('path');

module.exports = {
  entry: './src/index.js',  // Adjust your entry point if needed
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',  // Or 'production'
  module: {
    rules: [
      {
        test: /\.wasm$/,
        type: 'webassembly/async',  // Ensures WebAssembly is handled correctly
        resolve: {
          fullySpecified: false,  // This is important to avoid issues with module resolution
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader', // You may need this for JS file transpiling
      },
    ],
  },
  experiments: {
    asyncWebAssembly: true,  // Enable async WebAssembly loading (optional)
  },
};
