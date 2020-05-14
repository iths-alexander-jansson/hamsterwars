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
// http://localhost:4000/hamsters/10/result

// update hamster's wins && defeats by id
router.put('/:id/result', async (req, res) => {
    try {
        const snapshot = await db.collection('hamsters').doc(req.params.id).get();
        const hamster = snapshot.data();

        if (req.body.wins === 1 && req.body.defeats === 0) {
            hamster.wins++;
            hamster.games++;
        } else if (req.body.wins === 0 && req.body.defeats === 1) {
            hamster.defeats++;
            hamster.games++;
        } else {
            throw 'Something went wrong, did you atatch game stats?';
        }

        db.collection('hamsters').doc(req.params.id).set(hamster)
            .then(res.send({ msg: `The hamster with id: ${req.params.id} was updated` }))
            .catch(err => { throw err });

    } catch (err) {
        res.status(500).send(err);
    }
});


module.exports = router;

// Funkar!