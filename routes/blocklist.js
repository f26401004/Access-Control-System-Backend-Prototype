const express = require('express')
const router = express.Router();

const model = require('../models/index.js')

router.get('/getAllBlocklistRecord', (req, res) => {
	model.BlocklistOp.getAllBlocklistRecord().then(result => {
		console.log(result);
		res.json(result);
	}).catch(reason => {
		console.log(reason);
		res.send('Can not get all data form database: ' + reason);
	})
})

// add record to database blocklist.
router.post('/addBlocklistRecord/:id', (req, res) => {
	model.BlocklistOp.addBlocklistRecord(req.params.id).then(result => {
		console.log(result);
		res.json(result);
	}).catch(reason => {
		console.log(reason);
		res.send('Can not add the data from database: ' + reason);
	});
});

// remove blocklist record.
router.delete('/deleteBlocklistRecord/:id', (req, res) => {
	model.BlocklistOp.deleteBlocklistRecord(req.params.id).then(result => {
		console.log(result);
		res.status(200);
		res.end();
	}).catch(reason => {
		console.log(reason);
		res.send('Can not delete the data from database: ' + reason);
	});
});

module.exports = router;
