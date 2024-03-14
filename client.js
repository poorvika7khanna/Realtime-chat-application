const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new net.Socket();

client.connect(3000, 'localhost', () => {
    console.log('Connected to server');

    client.on('data', data => {
        console.log('Received:', data.toString().trim());
    });

    rl.on('line', input => {
        client.write(input);
    });
});
