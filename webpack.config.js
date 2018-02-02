const path = require('path');
const webpack = require('webpack');

const paths = {
    dist: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'src/index.html'),
    jsx: path.resolve(__dirname, 'src/index.jsx')
};

// Webpack configuration
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'react-hot-loader/patch',
        paths.jsx,
        paths.html
    ],
    output: {
        path: paths.dist,
        filename: 'app.bundle.js',
        publicPath: "/"
    },
    module: {
        loaders:
            [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        presets: ['react', 'es2015']
                    }
                },
                {
                    test: /\.html$/,
                    loader: 'file-loader?name=[name].[ext]',
                }],
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve:
        {
            extensions: ['.jsx', '.js']
        }
    ,
    devServer: {
        contentBase: paths.src,
        hot:
            true
    }
    ,
    watch: true
}
;