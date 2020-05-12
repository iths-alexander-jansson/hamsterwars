const { Router } = require('express');
const { bucket } = require('../firebase');
// const fileUpload = require('express-fileupload');
const fs = require('fs');

const router = new Router();
// router.use(fileUpload());

// get image by filename
router.get('/:filename', async (req, res) => {
    try {
        const imgObj = await file(`hamsters/${req.params.filename}`).download();
        const img = imgObj[0];
        res.status(200).contentType('jpeg').send(img);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;