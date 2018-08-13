const config = require('./config/index.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.database, config.username, config.password, {
	host: config.host,
	dialect, config.dialect,
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
})

// test the connection to database.
sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been establed successfully!!');
	})
	.catch(err => {
		console.error('Unable to connect to the database: ', err);
	});

const RecordOperation = require('./record/operation.js')(sequelize, Sequelize)
const BlocklistOperation = require('./blocklist/operation.js')(sequelize, Sequelize)

module.exports = {
	RecordOp: RecordOperation,
	BlocklistOp: BlocklistOperation
}
