//CommonJS, every file is module (by default)
// Modules

const names = require('./4-names');
//console.log(names); 

const sayHi = require('./5-utils');

//sayHi('susan');
//sayHi('john');
//sayHi('peter');

sayHi(names.john);
sayHi(names.peter);

const data = require('./6-alternative-syntax');
console.log(data);

require('./7-mind-grenade')