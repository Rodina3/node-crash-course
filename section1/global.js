// global object
// has many fields and functions can use directly
// fields like __dirname, __filename
// and functions like setTimeout() and setInterval
// can ignore global.
console.log(global);

console.log(__dirname);
console.log(__filename);

setTimeout(() => {
    console.log("in the timeout");
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log("in the interval");
}, 1000);
