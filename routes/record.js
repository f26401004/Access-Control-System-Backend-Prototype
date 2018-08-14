const express = require('express');
const router = express.Router();

const model = require('../models/index.js')

// get all record from database.
router.get('/getAllRecord', (req, res) => {
	model.RecordOp.getAllRecord().then(result => {
		console.log(result);
		res.json(result);
	});
});

// get all record time from database.
router.get('getAllTimeRecord', (req, res) => {
	const result = model.RecordOp.getAllTimeRecord();
	res.json(result);
});


//remove general record api
router.delete('/deleteRecord/:id', (req, res) => {
	const result = model.RecordOp.deleteRecord(req.params.id);
	res.status(200);
	res.end();
});

module.exports = router;
