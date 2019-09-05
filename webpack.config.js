var webpack = require('webpack');

module.exports = {
    mode: "development",
    context: __dirname,
    entry: "./app.jsx",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.min.js"
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
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
}