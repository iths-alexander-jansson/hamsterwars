const { Router } = require('express');
const router = new Router();
const { db } = require('../firebase');

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



// const { Router } = require('express');
// const { auth, db } = require('firebase');

// const router = new Router();

module.exports = router;
