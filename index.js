const express = require('express');

const app = express();

app.use(express.static('public'))

// // alla post.body > json
// app.use(express.json());


// const hamstersRoute = require('./routes/hamsters');
// app.use('/hamsters', hamstersRoute);

// const gamesRoute = require('./routes/todogames');
// app.use('/games', gamesRoute);


app.listen(4000, () => {
    console.log('Server is up & runnin on port 4k!');
})