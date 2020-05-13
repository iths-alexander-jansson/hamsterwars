const { Router } = require('express');
const router = new Router();
const { db } = require('../firebase');



// /hamsters	GET	Returnerar en array med samtliga hamsterobject.
// http://localhost:4000/hamsters
router.get('/', async (req, res) => {
    try {
        const snapshots = await db.collection('hamsters').get();
        const hamsters = [];
        snapshots.forEach(doc => hamsters.push(doc.data()));
        res.send(hamsters);
    } catch (err) {
        res.status(500).send(err);
    }
});

// /hamsters/random	GET	Returnerar ett slumpat hamsterobject från databasen.
// http://localhost:4000/hamsters/random
router.get('/random', async (req, res) => {
    try {
        const snapshots = await db.collection('hamsters').get();
        const hamsters = [];
        snapshots.forEach(doc => hamsters.push(doc.data()));

        const randomHamster = hamsters[Math.floor(Math.random() * hamsters.length)];
        res.send(randomHamster);
    } catch (err) {
        res.status(500).send(err);
    }
});

// /hamsters/:id	GET	Returnerar ett hamsterobject med efterfrågat id.
// http://localhost:4000/hamsters/10
router.get('/:id', async (req, res) => {
    try {
        const snapshot = await db.collection('hamsters').doc(req.params.id).get();
        res.send(snapshot.data());
    } catch (err) {
        res.status(500).send(err);
    }
});
//Alla ovan Funkar!

// /hamsters/:id/result	PUT	Updaterar ett hamsterobject egenskaper: wins, defeats och +1 på games.
// http://localhost:4000/hamsters/10/results

// På G, ligger i separat doc, lite strul

module.exports = router;


