const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'client/src'),
  devtool: '#eval-source-map',
  entry: [
    './main.jsx',
  ],
  output: {
    path: path.join(__dirname, 'client/public/'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ],
      },
      {
        test: /\.(jpg|png|gif|svg)$/i,
        use: [
            'file-loader?context=client/src/images/side/[path][name].[ext]',
            'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.html$/,
        use: [
          'html-loader?attrs[]=video:src',
        ]
      },
      {
        test: /\.mp4$/,
        use: [
          'file-loader',
        ]
      },
      {
        test: /\.css$/,
        use: [
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ]
};
