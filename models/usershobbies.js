'use strict'
const User = require('./user')

module.exports = (sequelize, DataTypes) => {
	const UsersHobbies = sequelize.define(
		'UsersHobbies',
		{
			userId: {
				type: DataTypes.INTEGER,
				model: 'Users',
				key: 'id'
			},
			hobbyId: {
				type: DataTypes.INTEGER,
				model: 'Hobby',
				key: 'id'
			}
		},
		{}
	)
	UsersHobbies.associate = function(models) {
		// associations can be defined here
		console.log('line 25 userHobbies.js : ', models)
		UsersHobbies.belongsToMany(models.User,{ through : 'userId'})
		UsersHobbies.belongsToMany(models.Hobby, {through : 'hobbyId'})
	}
	return UsersHobbies
}
