const express = require('express');
const server = express();
const path = require('path');
const port = process.env.PORT || 3000;


server.use(express.static(path.join(__dirname, '/dist/nomad')));
server.get('/*', (req, res, next)=>res.sendFile(path.join(__dirname, '/dist/nomad/index.html')));



server.listen(port, ()=>console.log('Bism Allah. Lisnteing on ', port));