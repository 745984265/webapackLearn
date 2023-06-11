const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",

    // entry: "./src/index.js",
    // entry: ['./src/index.js', './src/index2.js'], // 多入口
    entry: {
        index:{
            import:'./src/index.js',
            dependOn: 'react-vendor' // 依赖包或者库不想引入到业务代码中，需要单独配置引入
        },

        'react-vendor' : 'react',

        test:{
            import: './src/index2.js',
            // filename:'test.js'
        }
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js",
        // publicPath: "https://a.b.v/assets/"
        // chunkFilename: "asset_[id].js"
        // library: 'my_library'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}