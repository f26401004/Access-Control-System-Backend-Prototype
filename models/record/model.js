module.exports = (sequelize, DataTypes) => sequelize.define('Record', {
	id: {
		type: DataTypes.INTEGER,
		field: 'Id',
		primaryKey: true
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
		type: 'TIMESTAMP',
		field: 'Time'
	},
	name: {
		type: DataTypes.STRING(10),
		field: 'Name'
	},
	method: {
		type: DataTypes.INTEGER,
		field: 'Method'
	}
})

