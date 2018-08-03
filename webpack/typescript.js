const path = require('path');

module.exports = function(paths){
    return {
        context: path.resolve(__dirname, '../src'), // to automatically find tsconfig.json
        devtool: 'inline-source-map',
        //devtool: 'source-map',
        entry: paths.entries,
        output: {
            path: paths.build,
            filename: `./js/[name].js`
        },
        module: {
            rules: [
                {
                    test: /\.{tsx,ts,js}$/,
                    loader: 'ts-loader',
                    exclude: [
                        /node_modules/,
                    ],
                    options: {
                        transpileOnly: true, // IMPORTANT! use transpileOnly mode to speed-up compilation
                        reportFiles: ['src/**/*.{ts,tsx}', '!src/skip.ts']
                    }
                }
            ]
        },
        resolve: {
            extensions: [ '.ts', '.tsx', '.js' ],
            alias: {
                plugins: path.resolve(paths.src, 'plugins')
            }
        },
        stats: {
            // suppress "export not found" warnings about re-exported types
            warningsFilter: /export .* was not found in/
        },
        plugins: paths.htmlPages.concat(paths.plugins),
    }
};
