
module.exports = (req, res, next) => {
    if (req.method !== 'GET') {

        const APIKey = process.env.KEY;

        if (APIKey === req.headers['authorization']) {
            next();
        } else {
            res.status(403).send({ msg: 'Invalid key :(' });
        }

    } else {
        next();
    }
}

