module.exports = (sequelize, DataTypes) => sequelize.define('record', {
	id: {
		type: DataTypes.INTEGER,
		field: 'Id'
	},
	cardid: {
		type: DataTypes.CHAR(10),
		field: 'CardId'
	},
	department: {
		type: DataTypes.CHAR(2),
		field: 'Department'
	},
	privilege: {
		type: DataTypes.INTEGER,
		field: 'Privilege'
	},
	time: {
		type: DataTypes.TIMESTAMP,
		field: 'Time'
	},
	name: {
		type: DataTypes.VARCHAR(10),
		field: 'Name'
	}
})

