const admin = require("firebase-admin");

const serviceAccount = require("../serviceAccount.json");

// Fixa databas med hamsters info och "bucket" med cloud bilder
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://hamsterwars-iths-alex.firebaseio.com",
    storageBucket: "hamsterwars-iths-alex.appspot.com"
});


const db = admin.firestore();


const bucket = admin.storage().bucket();


module.exports = { db, bucket }

// Funkar!