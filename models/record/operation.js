const RecordModel = require('./model.js');

module.exports = (sequelize, Sequelize) => {
	const model = RecordModel(sequelize, Sequelize);
	return {
		getAllRecord: async () => {
			const data = await model.findAll();
			return data;
		},
		getAllTimeRecord: async () => {
			const data = await modle.findAll({
				attributes: ['time']
			})
			return data;
		},
		deleteOneRecord: async (target_id) => {
			const data = await model.destroy({ 
				where: { id: target_id } 
			})
			return data;
		},

	}
}
