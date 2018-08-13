const express = require('express');
const router = express.Router();


// get all record from database.
router.get('/getAllRecord', (req, res) => {

});

// get all record time from database.
router.get('getAllTimeRecord', (req, res) => {

});


//remove general record api
router.delete('/deleteRecord/:id', (req, res) => {

});


// add record to database blocklist.
router.post('/addBlocklistRecord/:id', (req, res) => {

});

// remove blocklist record.
router.delete('deleteBlocklistRecord/:id', (req, res) => {

});

module.exports = router;
