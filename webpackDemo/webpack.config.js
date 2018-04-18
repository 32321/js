const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports={
    entry:'./src/index.js',
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname, 'dist'),
    },
    module:{
        rules:[
        //     test:/\.css$/,
        //     use: [
        //         { loader: "style-loader" },
        //         { loader: "css-loader" }
        //       ]
        //   },
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
          }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({    //html插件
            title:'index',
            template:'./src/index.html',
            hash:true,
            minify:{
                removeAttributeQuotes:true
            }
        }),
        new ExtractTextPlugin("./css/styles.css"),
        new CopyWebpackPlugin([
            { from: 'src/static/pac.json', to: 'dist/'
            }
          ], options)
    ],
    devServer:{
            contentBase: path.resolve(__dirname, 'dist'),
            host: '127.0.0.1',
            port: '8080',
            compress: true
    }
}