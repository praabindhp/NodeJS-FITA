const EventEmitter = require('events');

// Create an event emitter instance
const myEmitter = new EventEmitter();

// Define an event handler function
const eventHandler = () => {
    console.log('Event Occurred 🍢 Successfully ✅'); // After Function
};

// Register the event handler
myEmitter.on('myEvent', eventHandler); // Register the event

// Emit the event
myEmitter.emit('myEvent'); // Occurrence of the event
