const fs = require('fs');

// Reading a file
fs.readFile('path/to/file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// Writing to a file
fs.writeFile('path/to/file.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File written successfully!');
});

// Appending to a file
fs.appendFile('path/to/file.txt', 'This is an appended text.', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Text appended successfully!');
});

// Deleting a file
fs.unlink('path/to/file.txt', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File deleted successfully!');
});
