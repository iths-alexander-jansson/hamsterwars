const { Router } = require('express');
const router = new Router();
const { db } = require('../firebase');

// /stats/total	GET	Returnerar ett statsobject med totalt antal matcher som hållits.
// http://localhost:4000/stats/total
router.get('/total', async (req, res) => {
    try {
        const games = await db.collection('games').get();
        res.send({ 'There has been this many games': games.size });

    } catch (err) {
        res.status(500).send(err);
    }
});



module.exports = router;

// Funkar!
// //{
//     "There has been this many games": 5
// }