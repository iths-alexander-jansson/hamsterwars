const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const auth = require('./api/auth');
app.use(auth);

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


app.listen(4000, () => {
    console.log('Server is up & runnin on port 4k!');
})