// {
// Large File - 2 GB
// }

// 2GB -> 1MB * 2000 -> {1}{1}{1}{1} -> Chunk
// Stream ~~~~~~~~> {1}{1}{1}{1}{1}{1} -> Buffer { Object }

const fs = require('fs');

const inputFile = 'Section-2/input.txt';
const outputFile = 'Section-2/output.txt';

// Create a readable stream
const readableStream = fs.createReadStream(inputFile);

// Create a writable stream
const writableStream = fs.createWriteStream(outputFile);

// Handle data event on the readable stream
readableStream.on('data', (chunk) => {
    // Create a buffer from the received chunk
    const buffer = Buffer.from(chunk);

    // Write the buffer to the writable stream
    writableStream.write(buffer); // A B C D E F G H
});

// Handle end event on the readable stream
readableStream.on('end', () => {
    // Close the writable stream
    writableStream.end();
});

// Handle finish event on the writable stream
writableStream.on('finish', () => {
    console.log('Data Has Been Written To The File');
});

// Handle error event on both streams
readableStream.on('error', (error) => {
    console.error('Error Reading The File:', error);
});

writableStream.on('error', (error) => {
    console.error('Error writing To The File:', error);
});
