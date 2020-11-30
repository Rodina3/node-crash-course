const fs = require('fs');

// reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});

console.log('last line');

// writing files
fs.writeFile('./docs/blog2.txt', 'hello world', () => {
    console.log('file was written');
})


// directories
const dir = './assets'
if (fs.existsSync(dir)) {
    fs.rmdir(dir, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('folder deleted');
        }
    });
} else {
    fs.mkdir(dir, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('folder created');
        }
    });
}

// deleting files
const filePath = './docs/deleteme.txt';

if (fs.existsSync(filePath)) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('file deleted');
        }
    });
}