module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
  },
  devServer: {
    contentBase: './public',
    compress: true,
    hot: true,
    host: 'localhost',
    port: 3000,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js'],
  },
};
