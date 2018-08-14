const express = require('express')
const router = express.Router();

const model = require('../models/index.js')

// add record to database blocklist.
router.post('/addBlocklistRecord/:id', (req, res) => {
	const result = model.BlocklistOp.addBlocklistRecord(req.params.id);
	res.json(result);
});

// remove blocklist record.
router.delete('deleteBlocklistRecord/:id', (req, res) => {
	const result = model.BlocklistOp.deleteBlocklistRecord(req.params.id);
	res.json(result);
});

module.exports = router;
