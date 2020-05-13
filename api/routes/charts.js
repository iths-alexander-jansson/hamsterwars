const { Router } = require('express');
const { db } = require('../firebase');
const router = new Router();

// Manipulierade datan (defeats, wins) själv i Firestore för att se att de funka.

// /charts/top	GET	Returnerar en array med top 5 mest vinnande hamsterobject.
// http://localhost:4000/charts/top

router.get('/top', async (req, res) => {
    try {
        const snapshots = await db.collection('hamsters').orderBy('wins', 'desc').limit(5).get();
        const hamsters = [];
        snapshots.forEach(doc => hamsters.push(doc.data()));

        res.send(hamsters);
    } catch (err) {
        res.status(500).send(err);
    }
});

// /charts/bottom	GET	Returnerar en array med top 5 mest förlorande hamsterobject.
// http://localhost:4000/charts/bottom
router.get('/bottom', async (req, res) => {
    try {
        const snapshots = await db.collection('hamsters').orderBy('defeats', 'desc').limit(5).get();
        const hamsters = [];
        snapshots.forEach(doc => hamsters.push(doc.data()));

        res.send(hamsters);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;


// Funkar!