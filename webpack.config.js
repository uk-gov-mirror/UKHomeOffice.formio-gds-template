const path = require('path');

module.exports = {
    entry: path.join(path.resolve(__dirname, 'lib'), 'index.js'),
    output: {
        library: 'gds',
        libraryTarget: 'umd',
        libraryExport: "default",
        path: path.resolve(__dirname, 'dist'),
        filename: 'gds.js',
    },
    externals: {
        formiojs: 'Formio'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }, {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    mode: 'production',
    performance: {hints: false},
};
