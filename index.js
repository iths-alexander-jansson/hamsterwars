// npm install dotenv
// alla dependencies updaterade
require('dotenv').config()
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// Auth m dotenv KEY
// KEY genererad m https://codepen.io/corenominal/pen/rxOmMJ :)
let auth = (req, res, next) => {

    if (req.method !== 'GET') {

        const APIKey = process.env.KEY;

        if (APIKey === req.headers['authorization']) {
            next();
        } else {
            res.status(403).send({ msg: 'Error, check your Aut KEY' })
        }
    } else {
        next();
    }
}
app.use(auth);

// Routes
const assetsRoute = require('./api/routes/assets');
app.use('/assets', assetsRoute);

const hamstersRoute = require('./api/routes/hamsters');
app.use('/hamsters', hamstersRoute);

const chartsRoute = require('./api/routes/charts');
app.use('/charts', chartsRoute);

const gamesRoute = require('./api/routes/games');
app.use('/games', gamesRoute);

const statsRoute = require('./api/routes/stats');
app.use('/stats', statsRoute);


// OBS 4000, har skrivt in 3000 många gånger av mistag i Insomnia haha
app.listen(4000, () => {
    console.log('Server is up & runnin on port 4k!');
})