'use strict'
module.exports = (sequelize, DataTypes) => {
	const Hobby = sequelize.define(
		'Hobby',
		{
			name: DataTypes.STRING
		},
		{}
	)
	Hobby.associate = function(models) {
		// associations can be defined here
	}
	return Hobby
}
