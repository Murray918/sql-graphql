'use strict'
const UserHobbies = require('./usershobbies')
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			email: DataTypes.STRING,
			externalId: DataTypes.STRING
		},
		{}
	)
	User.associate = function(models) {
		// associations can be defined here
		// console.log('the first log in user.js : ', models)
		// User.belongsToMany(models.UserHobbies, {
		// 	through: 'UserHobbies'
		// })
	}
	return User
}
