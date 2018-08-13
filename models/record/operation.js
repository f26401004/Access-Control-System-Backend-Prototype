
const RecordModel = require('./model.js');

module.exports = (sequelize, Sequelize) => {
	const model = RecordModel(sequelize, Sequelize);
	return {
		getAllRecord: () => model.findAll().then(data => {
			console.log(data);
		}),
		getAllTimeRecord: () => modle.findAll({
			attributes: ['time']
		}).then(data => {
			console.log(data);
		}),
		deleteOneRecord: (target_id) => model.destroy({ 
			where: { id: target_id } 
		}).then(data => {
			console.log('delete one record success!!');
		}),

	}
}
