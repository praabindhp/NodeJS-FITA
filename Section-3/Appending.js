const fs = require('fs');

// Appending to a file

fs.appendFile('Section-3/Write.txt', '\nWelcome To The Session', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Text Appended Successfully!");
});

// Hello World!
// This Is The Appended Text.