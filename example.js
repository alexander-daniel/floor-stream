'use strict';
//
var FloorStream = require('./index');
var floor = new FloorStream();


var fs = require('fs');
var file = fs.createReadStream('./file.txt');

file.pipe(floor).pipe(process.stdout);
