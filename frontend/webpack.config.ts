import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
  mode: 'development',
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    mainFields: ['browser', 'main', 'module'],
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'file-loader',
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  //externals: {
    //react: 'React',
    //'react-dom': 'ReactDOM',
  //},
};

export default config;


