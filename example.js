'use strict';

var FloorStream = require('./index');
var floor = new FloorStream();

setInterval(function () {
    floor.write((Math.random() * 10).toString());
},1000);

floor.pipe(process.stdout);
