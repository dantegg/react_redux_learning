var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query:
                {
                    presets:['react','es2015','stage-0']
                }
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
        ]
    },
    devServer: {
        historyApiFallback: true
    // hot: true,
    //     inline: true,
    //     progress: true,
    //     host:'192.168.11.132',
        // proxy: {
        // '/api/*': {
        //     target: 'http://192.168.11.132:8090/sxzx',
        //         secure:false,
        //         rewrite: function(req) {
        //         req.url = req.url.replace(/^\/api/, '');
        //         }
        //     }
        // }
    },
}