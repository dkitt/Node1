// Syncing a method

var fs = require('fs');
var async = require('async');

var cont1='no data yet';
var cont2=null;

var fscb =  function(err, data) {
	if(err){
		console.error(err);
		return;
	} else {
		console.log(data.toString());
		console.log('data received');
		cont1 = data.toString();
		return;
	}
};	

sync.do(fs.readFile('t1.txt', fscb ));

fs.readFile('t2.txt', fscb );

console.log('contents ' + cont1);


console.log('end');
