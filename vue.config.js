const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    configureWebpack: {
        plugins: [
            new CopyWebpackPlugin([
                {from: 'src/assets/tables', to: 'assets/tables'},
                {from: 'src/assets/svg', to: 'assets/svg'},
            ])
        ],
        resolve: {
            alias: {
              'src': path.resolve(__dirname, 'src'),
              'assets': path.resolve(__dirname, 'src/assets'),
              'components': path.resolve(__dirname, 'src/components'),
              'mixins': path.resolve(__dirname, 'src/components/mixins'),
            }
          }
    }
}