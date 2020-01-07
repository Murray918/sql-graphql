'use strict'
module.exports = {
	up: async (queryInterface, Sequelize) => {
		try {
			return await queryInterface.createTable('Users', {
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER
				},
				firstName: {
					type: Sequelize.STRING
				},
				lastName: {
					type: Sequelize.STRING
				},
				email: {
					type: Sequelize.STRING
				},
				externalId: {
					type: Sequelize.STRING
				},
				createdAt: {
					allowNull: false,
					type: Sequelize.DATE
				},
				updatedAt: {
					allowNull: false,
					type: Sequelize.DATE
				}
			})
		} catch (error) {
			throw Error(error)
		}
	},
	down: async (queryInterface, Sequelize) => {
		try {
			return await queryInterface.dropTable('Users')
		} catch (error) {
			throw Error(error)
		}
	}
}
