import EventEmitter from'events';

const app = new EventEmitter();
app.on('login', (user ) => {
  console.log(`User logged in: ${user}`);
});
app.on('message', (msg) => {
    console.log(`Message received: ${msg}`);
});
app.emit('login', 'Aman' );
app.emit('message', 'welcome to Node.js' );