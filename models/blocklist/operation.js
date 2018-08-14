const BlockListModel = require('./model.js');

module.exports = (sequelize, Sequelize) => {
	const model = BlockListModel(sequelize, Sequelize);
	return {
		getAllBlocklistRecord: async () => {
			try {
				const result = await model.findAll();
				return result;
			} catch (reject) {
				console.log(reject)
				return null;
			}
		},
		addBlocklistRecord: async (target_card_id, target_department, target_privilege, 
						    target_since, target_expire, target_name) => {
			try {
				const result = await model.create({
					cardid: target_card_id,
					department: target_department,
					privilege: target_privilege,
					since: target_since,
					expire: target_expire,
					name: target_name
				});
				return true;
			} catch (reject) {
				console.log(reject);
				return false;
			}

		},
		deleteBlocklistRecord: async (target_card_id) => {
			try {
				const result = await model.destroy({
					where: {
						cardid : target_card_id
					}
				});
				return true;
			} catch (reject) {
				console.log(reject);
				return false;
			}
		}
	}
}
