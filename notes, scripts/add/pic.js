
//Upload hamster pic to cloud Firestore

const { bucket } = require('../../api/firebase');

const picFirebaseStorage = async () => {
    try {
        for (let i = 1; i <= 40; i++) {
            await bucket.upload(`../hamsters/hamster-${i}.jpg`, { destination: `hamsters/hamster-${i}.jpg` });
            console.log(`pic ${i} added`);
        }
    } catch (err) {
        console.error(err);
    }
}

picFirebaseStorage();

// OMG it worked!
// Fast ändå inte typ, gick inte att "preview" i strorage i webbäsaren så laddade upp igen via chrome