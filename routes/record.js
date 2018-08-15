const express = require('express');
const router = express.Router();

const model = require('../models/index.js')

// get all record from database.
router.get('/getAllRecord', (req, res) => {
	model.RecordOp.getAllRecord().then(result => {
		console.log(result);
		res.json(result);
	}).catch(reason => {
		console.log(reason);
		res.send('Can not get the data from database: ' + reason);
	});
});

// get all record time from database.
router.get('/getAllTimeRecord', (req, res) => {
	model.RecordOp.getAllTimeRecord().then(result => {
		console.log(result);
		res.json(result);
	}).catch(reason => {
		console.log(reason);
		res.send('Can not get the data from database: ' + reason);
	});
});

// get all record method from database.
router.get('/getAllMethodRecord', (req, res) => {
	model.RecordOp.getAllMethodRecord().then(result => {
		console.log(result);
		res.json(result);
	}).catch(reason => {
		console.log(reason);
		res.send('Can mot get the data from database: ' + reason);
	})
})


//remove general record api
router.delete('/deleteRecord/:id', (req, res) => {
	model.RecordOp.deleteRecord(req.params.id).then(result => {
		console.log(result);
		res.status(200);
		res.end();
	}).catch(reason => {
		console.log(reason);
		res.send('Can not delete the data from database: ' + reason);
	});
});

module.exports = router;
