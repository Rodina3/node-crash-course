// import variables from other file
const { people, age } = require('./people');
console.log(people, age);


// import variables from other module
const os = require('os');
console.log(os.platform(), os.homedir());