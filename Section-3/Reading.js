const fs = require('fs');

// Reading a file

fs.readFile('Section-3/input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
