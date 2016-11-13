var http = require("http");
var fs = require('fs');

var fproc = function process( req, rsp ) {
	fs.readFile('t1.html', function(err, data) {
			if(err) {
				console.error(err);
				rsp.writeHead(200, {'Content-Type' : 'text/plain'});
				rsp.end('could not read a file');
			} else {
				console.log('responding');
				rsp.writeHead(200, {'Content-Type' : 'text/html; charset=UTF-8'});
				rsp.end(data.toString());
			}
		});
};

var server = http.createServer( fproc ).listen(8081);

console.log('Server listening at http://127.0.0.1:8081');
