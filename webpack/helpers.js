const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

function readPathsOfPages(path)
{
    const pages = [];
    fs
      .readdirSync(path)
      .forEach((file) => {
          pages.push(file);
      });
    return pages;
};

function getHtmlPages(path)
{
    const htmls = readPathsOfPages(path)
        .map(fileName => new HtmlWebpackPlugin({
            filename: `${fileName}.html`,
            template: `./pages/${fileName}/${fileName}.pug`,
            inject: 'body',
            hash: true
        }));
    return htmls;
};

module.exports = getHtmlPages;
