'use strict'
module.exports = {
	up: async (queryInterface, Sequelize) => {
		try {
			return await queryInterface.createTable('UsersHobbies', {
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER
				},
				userId: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: 'Users',
						key: 'id'
					}
				},
				hobbyId: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: 'Hobbies',
						key: 'id'
					}
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
			return await queryInterface.dropTable('UsersHobbies')
		} catch (error) {
			throw Error(error)
		}
	}
}
