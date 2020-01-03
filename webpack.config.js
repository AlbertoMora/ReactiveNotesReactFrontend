var webpack = require('webpack');
var package = require('./package.json');
module.exports = {
    mode: "development",
    context: __dirname,
    entry: {
        index: "./app.jsx",
        navbar: "./components/top-navbar.jsx",
        login: "./components/login/login.jsx"
    },
    output: {
        path: __dirname + "/dist",
        filename: '[name].bundle.min.js'
    },
    watch: true,
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.m?jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', {
                            plugins: ['@babel/plugin-proposal-class-properties']
                        }],
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css'],
            },
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
    },
};