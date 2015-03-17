'use strict';

var through = require('through2');
var split = require('split');

module.exports = function () {
    return through(split(floored()));
};

function floored () {

    function transformer(chunk, enc, callback) {
        this.push(Math.floor(chunk).toString());
        callback();
    }

    return transformer;
}
