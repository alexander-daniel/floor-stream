'use strict';

var FloorStream = require('./index');
var floor = new FloorStream({separator: ''});

var fs = require('fs');
var file = fs.createReadStream('./file.txt');
var split = require('split');

file.pipe(split()).pipe(floor).pipe(process.stdout);
