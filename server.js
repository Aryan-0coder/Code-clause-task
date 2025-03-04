// filepath: /C:/Users/aryan gupta/code clause task/server.js
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', socket => {
    socket.on('message', message => {
        // Broadcast the message to all connected clients
        server.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            }
        });
    });
});

console.log('WebSocket server is running on ws://localhost:8080');