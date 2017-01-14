var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './builds/js/app.jsx',
    output: {
        path: __dirname + '/scripts',
        filename: 'app.js'
    },
    devtool: 'eval',
    watch: true,
    module: {
        loaders: [{
            test: /\.s?css$/,
            include: /builds/,
            loaders: [
                'style-loader',
                'css-loader',
                'csso-loader',
                'sass-loader'
            ]
        }, {
            test: /\.(jpe?g|png|gif)$/i,
            loader: "file-loader?name=/img/[name].[ext]"
        }, {
            test: /\.jsx?$/,
            include: /builds/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },

    resolve: {
        extensions: ['', '.js', '.jsx'],
    },

    /*plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            sourceMap: false,
            output: { comments: false }
        })
    ]*/
};
