const app = require('./server.js')
const functions = require('firebase-functions');

const { onRequest } = require("firebase-functions/v2/https");


const logger = require("firebase-functions/logger");
exports.api = functions.region('europe-west1').https.onRequest(app);
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started


