'use strict';

var through = require('through2');

module.exports = function () {
    return through(floored());
};

function floored () {

    function transformer(chunk, enc, callback) {
        this.push(Math.floor(chunk).toString() + '\n');
        callback();
    }

    return transformer;
}
