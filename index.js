'use strict';

var through = require('through2');

function FloorStream (opts) {
    if (!opts) opts = {};
    var separator = opts.separator || '';

    separator = opts.separator;

    function transformer (chunk, enc, callback) {
        /*jshint validthis:true */
        this.push(Math.floor(chunk).toString());
        callback(null, separator);
    }

    var floorStream = through(transformer);

    return floorStream;
}

module.exports = FloorStream;
