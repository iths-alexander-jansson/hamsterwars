const { Router } = require('express');
const router = new Router();
const { db } = require('../firebase');

// /games	GET	Returnerar en array med samtliga gameobject som hållits.
// http://localhost:4000/games
router.get('/', async (req, res) => {
    try {
        const snapshots = await db.collection('games').get();
        const games = [];
        snapshots.forEach(doc => games.push(doc.data()));
        res.send(games);

    } catch (err) {
        res.status(500).send(err);
    }
});

// /games	POST	Sparar en match enlighet med gameobject.
// http://localhost:4000/games
router.post('/', async (req, res) => {
    try {
        const game = req.body;
        game['timeStamp'] = new Date();
        game['id'] = new Date().getSeconds() * Math.random();
        game['contestants'] = [{}, {}];
        game['winner'] = {};

        //är inte helt 100 på detta

        await db.collection('games').doc(game.id.toString()).set(game)
            .then(res.send({ msg: 'The game was added' }))
            .catch(err => { throw err });

    } catch (err) {
        res.status(500).send(err);
    }
});


module.exports = router;

// Funkar!