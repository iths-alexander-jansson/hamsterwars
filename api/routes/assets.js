const { Router } = require('express');
const { bucket } = require('../firebase');

const router = new Router();

//Fixa fram bild från cloud, funkar äntligen :)
router.get('/:filename', async (req, res) => {
    try {
        const imgObj = await bucket.file(`hamsters/${req.params.filename}`).download();
        const img = imgObj[0];
        res.status(200).contentType('jpeg').send(img);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;