const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, " src"),
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ],
                    plugins: ['@babel/plugin-proposal-decorators']
                  }
            }]
        },{ 
            test: /\.tsx?$/, 
            loader: "ts-loader" 
        }, {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }] 
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}
