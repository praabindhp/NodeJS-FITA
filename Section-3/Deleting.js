const fs = require('fs');

// Deleting a file

fs.unlink('Section-3/Write.txt', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File Deleted Successfully!");
});
