'use strict';

var through = require('through2');

function FloorStream (opts) {
    if (!opts) opts = {};
    var separator = opts.separator || '';

    function transformer (chunk, enc, callback) {
        /*jshint validthis:true */
        this.push(Math.floor(chunk).toString());
        callback(null, separator);
    }

    return through(transformer);
}

module.exports = FloorStream;
