const path = require('path');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const css = require('./webpack/css');
const stylus = require('./webpack/stylus');
const images = require('./webpack/images');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const fonts = require('./webpack/fonts');
const ts = require('./webpack/typescript');
const webpack = require('webpack');
const getHtmlPages = require('./webpack/helpers');

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'bin'),
};

const POINTS = {
    build: PATHS.build,
    src: PATHS.source,
    htmlFileName: 'demo-components-page',
    chunks: ['demo-components-page', 'common'],
    entries: {
        'demo-components-page': path.join(PATHS.source,
            './pages/demo-components-page/demo-components-page.js')
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    htmlPages: getHtmlPages(path.join(PATHS.source, 'pages'))
};

const common = merge([
    ts(POINTS),
    pug(),
    stylus(),
    images(),
    fonts()
]);

module.exports = function(env) {
    if (env === 'production') {
        return merge([
            common,
            extractCSS(),
            uglifyJS()
        ])
    }
    if (env === 'develop') {
        return merge([
            common,
            css()
        ])
    }
}
