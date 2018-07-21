const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    configureWebpack: {
        plugins: [
            new CopyWebpackPlugin([
                {from: 'src/assets/tables', to: 'assets/tables'},
                {from: 'src/assets/svg', to: 'assets/svg'},
            ])
        ]
    }
}