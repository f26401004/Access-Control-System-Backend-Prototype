const BlockListModel = require('./model.js');

module.exports = (sequelize, Sequelize) => {
	const model = BlockListModel(sequelize, Sequelize);
	return {
		addBlocklistRecord: null,
		deleteBlocklistRecord: null
	}
}
