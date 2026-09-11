import EventEmitter from "events";
// const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});
myEmitter.on('exit', (code) => {
  console.log(`Exit event received .Code :${code}`);
});
myEmitter.emit('greet', 'B.Tech students');
myEmitter.emit('exit', 0);