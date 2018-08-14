module.exports = (sequelize, DataTypes) => sequelize.define('Blocklist', {
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
	since: {
		type: 'TIMESTAMP',
		field: 'Since'
	},
	expire: {
		type: 'TIMESTAMP',
		field: 'Expire'
	},
	name: {
		type: DataTypes.STRING(10),
		field: 'Name'
	}
})

