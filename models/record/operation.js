const RecordModel = require('./model.js');

module.exports = (sequelize, Sequelize) => {
	const model = RecordModel(sequelize, Sequelize);
	return {
		getAllRecord: async () => {
			try {
				const data = await model.findAll();
				return data;
			} catch (reject) {
				console.log(reject);
				return null;
			}
		},
		getAllTimeRecord: async () => {
			try {
				const data = await model.findAll({
					attributes: ['time']
				})
				return data;
			} catch (reject) {
				console.log(reject);
				return null;
			}
		},
		getAllMethodRecord: async () => {
			try {
				const data = await model.findAll({
					attributes: ['method']
				})
				return data;
			} catch (reject) {
				console.log(reject);
				return null;
			} 
		},
		deleteOneRecord: async (target_id) => {
			try {
				const data = await model.destroy({ 
					where: { id: target_id } 
				})
				return true;

			} catch (reject) {
				console.log(reject);
				return false;
			}
		},

	}
}
