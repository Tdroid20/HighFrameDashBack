const http = require('http');
const express = require('express');
const c = require('colors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ 
        status: 'online',
        version: '0.0.1',
        isAuthenticate: 'unavailable'
    })
});


const listener =  server.listen(process.env.PORT || 3000, function() {
    console.log(
        c.green(`Seu app está operando na porta `, 
        c.yellow(listener.address().port)
        )
    );
});