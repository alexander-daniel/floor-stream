# floor-stream
Stream takes integers and floors em. Stupid simple and not really complete yet.

## install
```bash
npm install floor-stream
```

## example usage
```javascript
var FloorStream = require('./index');
var floor = new FloorStream();

setInterval(function () {
    floor.write((Math.random() * 10).toString());
},1000);

floor.pipe(process.stdout);
```

## license
MIT
