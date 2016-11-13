var fs = require("fs");

var data = fs.readFileSync("t1.txt");

console.log(data.toString());
