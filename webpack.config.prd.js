/**
 * @file webpack 配置
 * @author fintech-fe-sh
 */
const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');  

// 生成html文件
// 项目相关配置(app-config)
const APP_NAME_EN = 'dataMock';
const APP_NAME_CN = '模块名称';
const APP_ASSETS = 'assets/' + APP_NAME_EN;
const APP_TEMPLATE = 'template/' + APP_NAME_EN;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './index.js',
        lib: [
            'webpack-zepto',
            'react',
            'react-dom',
            'react-router'
        ]
    },
    output: {
        // 文件输出目录
        path: path.resolve(__dirname, './output'),
        // 输出文件名
        filename: APP_ASSETS +  '/[name].min.js?[hash]',
        // // cmd、amd异步加载脚本配置名称
        // chunkFilename: '[name].chunk.js?[hash]',
        publicPath: '/'
    },

    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ]
    },

    module: {
        rules: [
            {
                test: /\.less$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ],
                exclude: /\.useable\.less$/
            },
            {
                test: /\.css$/,
                exclude: /\.useable\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.useable\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader/useable!css-loader'
            },
            {
                test: /\.(png|jpg|gif|ttf)$/,
                loader: 'url-loader?limit=10000&name=assets/' + APP_NAME_EN + '/img/[name]_[hash:8].[ext]'
            },
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            }
        ]
    },  
    optimization: {
        minimizer: [ 
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                compress: false,
                ecma: 6,
                mangle: true
                },
                sourceMap: true
            })
        ],
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'common.js?[hash]',
                    chunks: "initial",
                    minChunks: 2
                }
            }
        },
    },
    plugins: [
        new CleanWebpackPlugin(['output']),
        new HtmlwebpackPlugin({
            title: APP_NAME_CN,
            template: path.join(__dirname, './src/index.html'),
            filename: APP_TEMPLATE + '/index.html',
            chunksSortMode: 'dependency',
            minify: {
                minifyJS: true,
                removeComments: true,
                minifyCSS: true
            }
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     names: ['lib'],
        //     filename: APP_ASSETS + '/[name].js?[hash]',
        //     minChunks: Infinity
        // }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.ProvidePlugin({
            '$': 'webpack-zepto',
            'jQuery': 'webpack-zepto',
            'window.jQuery': 'webpack-zepto'
        })
    ]
};
