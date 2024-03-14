const express = require('express');

const connectToClient = async (req,res) => {
    exec('node ./../client.js', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error executing client script');
        }
    });
}