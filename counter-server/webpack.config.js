var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './client'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM',
    //     'redux':'Redux',
    //     'react-router':'React-router',
    //     'react-redux':'React-redux'
    // },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({     //代码压缩(webpack内建插件webPack.optimize.UglifyJsPlugin)
            compress:{
                warnings:false
            },
            output: {
                comments: false   //去除js中注释
            }
        })
        //new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query:
                {
                    presets:['react','es2015']
                }
            }
        ]
    }
}