var fs = require("fs");
console.log('Source file: ' + __filename);

var data = fs.readFileSync("t1.txt");

console.log(data.toString());
