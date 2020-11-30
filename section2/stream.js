const fs = require('fs');

const dirPath = './docs';
const readStream = fs.createReadStream(`${dirPath}/blog3.txt`, { encoding: 'utf-8' });
const writeStream = fs.createWriteStream(`${dirPath}/blog4.txt`);

// readStream.on('data', (chunk) => {
//     console.log("---- NEW CHUNK ----");
//     console.log(chunk.toString());
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });

// pipe
readStream.pipe(writeStream);