module.exports = (sequelize, DataTypes) => sequelize.define('blocklist', {
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
	since: {
		type: DataTypes.TIMESTAMP,
		field: 'Since'
	},
	expire: {
		type: DataTypes.TIMESTAMP,
		field: 'Expire'
	},
	name: {
		type: DataTypes.VARCHAR(10),
		field: 'Name'
	}
})

