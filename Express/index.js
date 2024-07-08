console.log('Express is  start');

const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, ) => {
    console.log('It is working');
});

const server = http.createServer(app);
server.listen(3001, () => {
    console.log('Server is running on port 3001');
});
