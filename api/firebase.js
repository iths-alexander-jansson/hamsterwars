const admin = require("firebase-admin");
const serviceAccount = require("/Users/alexanderjansson/GitHub/hamsterwars/serviceAccount.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://hamsterwars-iths-alex.firebaseio.com",
    storageBucket: "hamsterwars-iths-alex.appspot.com"
});


const auth = admin.auth();
const db = admin.firestore();
const bucket = admin.storage().bucket();


module.exports = { auth, db, bucket }

