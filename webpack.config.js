const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');  // 生成html文件
const webpackHotMiddleware = require('webpack-hot-middleware');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


/****项目相关配置(app-config)****/
const APP_NAME_EN = 'appName';
const APP_NAME_CN = '模块名称';
const PROXY_CONFIG = {  // api匹配规则配置
    '/mockData/*': {
        target: 'http://127.0.0.1:3001',
        changeOrigin: true,
        secure: false
    }
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: ['./index.js']
    },
    mode: 'development',
    output: {
        // 文件输出目录
        path: path.resolve(__dirname, './output'),
        // 输出文件名
        filename: '[name].min.js?[hash]',
        // cmd、amd异步加载脚本配置名称
        chunkFilename: '[name].chunk.js?[hash]',
        publicPath: '/'
    },

    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ]
    },
    optimization: {
        minimize: false
    },
    module: {
        rules:[
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'less-loader' // compiles Less to CSS
                }],
                exclude: /\.useable\.less$/
            },
            {
              test: /\.css$/,
              exclude: /\.useable\.css$/,
              loader: "style-loader!css-loader"
            },
            {
              test: /\.useable\.css$/,
              exclude: /node_modules/,
              loader: "style-loader/useable!css-loader"
            },
            {
                test: /\.(png|jpg|ttf)$/,
                loader: 'url-loader?limit=10000',
                exclude: /node_modules/,
            },
            {
                test: /\.js[x]?$/,
                // test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                // loader: 'babel-loader?presets[]=es2015&presets[]=react'
                query: {
                    presets: ["react", "es2015", "stage-0"],
                    // "plugins":[
                    //     ["import",{"libraryName":"antd", "style":"css"}]
                    // ]
                }
            }
        ],

    },
    // babel: {
    //     presets: ['es2015', 'stage-0', 'react'],
    //     plugins: ['transform-runtime', ["antd",  { "style": "css" }]]
    // },
    devServer: {
        historyApiFallback: true,
        disableHostCheck: true,
        // hot: true,
        inline: true,
        progress: true,
        proxy: PROXY_CONFIG,
        host: '0.0.0.0'
    },
    // 生成sourcemap,便于开发调试
    devtool: 'eval-source-map',
    plugins: [
        new HtmlwebpackPlugin({
            title: APP_NAME_CN,
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html',
            minify: {
                minifyJS: true,
                removeComments: true,
                minifyCSS: true
            }
        }),
        new webpack.ProvidePlugin({
            // $: "jquery",
            // jQuery: "jquery",
            // "window.jQuery": "jquery"
            $: 'webpack-zepto',
            jQuery: 'webpack-zepto',
            'window.jQuery': 'webpack-zepto'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};


