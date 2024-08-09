const fs = require('fs');

// Writing to a file
const content = "Hello, World!";

fs.writeFile('Section-3/Write.txt', content, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File Written Successfully!");
});
