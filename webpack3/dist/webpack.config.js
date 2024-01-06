const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports={
    entry:{
        index:'./src/index.js',
        about:'./src/about.js',
    },

    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ],
      },

      plugins: [
        new HtmlWebpackPlugin({
          template: 'index.html',
          filename: 'index.html',
          chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
          template: 'about.html',
          filename: 'about.html',
          chunks: ['about'],
        }),
      ],

};