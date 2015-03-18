# floor-stream
Returns a transform stream that  takes newline-seperated floats and floors em.

For when, you know, you just want some inaccuracy.
## install
```bash
npm install floor-stream
```

## example usage
```javascript
var FloorStream = require('floor-stream');
var floor = new FloorStream({separator: '\n'});

// file with a bunch of random floats
var file = fs.createReadStream('./file.txt');
var split = require('split');

// pipe the file to the split-stream so that it
// creates a chunk for each float to be processed.
// then pipe that somewhere super cool.
file.pipe(split()).pipe(floor).pipe(process.stdout);
```

## var floor = new FloorStream(opts)
`opts.separator` - `string` choose what you want the output chunks to be separated by.

## license
MIT
