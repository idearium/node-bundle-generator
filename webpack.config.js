'use strict';

const path = require('path');

module.exports = {
    entry: {
        bundle: path.join(__dirname, 'index.js'),
    },
    mode: 'production',
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, 'dist'),
    },
};
