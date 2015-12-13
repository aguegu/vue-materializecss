var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: "build.js"
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue'},
      { test: /\.js$/, exclude: /node_modules/, loader: "babel"},
      { test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/, loader: 'file'},
      { test: /\.scss$/, loaders: ["style", "css", "resolve-url", "sass?sourceMap"] },
      { test: /\.(png|jpg|gif)$/, loader: 'file'},
      // { test: /materialize-css\/bin\//, loader: 'imports?jQuery=jquery, $=jquery,hammerjs' },
    ]
  },
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  }
};
