const net = require('net');

const server = net.createServer();
const clients = [];

server.on('connection', socket => {
    clients.push(socket);

    socket.on('data', data => {
        const message = data.toString().trim();
        broadcast(message, socket);
    });

    socket.on('end', () => {
        const index = clients.indexOf(socket);
        if (index !== -1) {
            clients.splice(index, 1);
        }
    });
});

function broadcast(message, sender) {
    clients.forEach(client => {
        if (client !== sender) {
            client.write(message);
        }
    });
}

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});