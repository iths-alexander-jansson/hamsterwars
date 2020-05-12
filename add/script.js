const { db } = require('../api/firebase');
const hamsters = require('../api/data.json');

const hamsterDatabase = () => {
    try {
        hamsters.forEach(hamster => {
            db.collection('hamsters').doc(hamster.id.toString()).set(hamster);
            console.log(`Hamster ${hamster.id} added`);
        });
    } catch (err) {
        console.error(err);
    }
}

hamsterDatabase();