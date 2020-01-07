'use strict'
module.exports = {
	up: async (queryInterface, Sequelize) => {
		try {
			return await queryInterface.createTable('Hobbies', {
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER
				},
				name: {
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
			return await queryInterface.dropTable('Hobbies')
		} catch (error) {
			throw Error(error)
		}
	}
}
