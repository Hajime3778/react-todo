module.exports = {
  mode: 'development',
  entry: './src/index.ts',
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
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{ loader: 'ts-loader' }],
      },
   ],
 },
};
