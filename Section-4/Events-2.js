const events = require('events');

// Import the events module

// Create an event emitter object
const eventEmitter = new events.EventEmitter();

// Define an event handler function with parameters
const eventHandler = (param1, param2) => {
    console.log(`Event Handled With Parameters ✅ \n${param1} ${param2}`);
};

// Attach the event handler to the event
eventEmitter.on('myEvent', eventHandler);

// Emit the event with parameters
eventEmitter.emit('myEvent', 'Geolocation 🖥️,', 'Praabindh ❤️');
