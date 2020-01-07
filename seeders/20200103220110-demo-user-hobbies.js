'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/* 
    Add altering commands here.
    Return a promise to correctly handle asynchronicity.
    
    Example:
   */
		try {
			return await queryInterface.bulkInsert(
				'UserHobbies',
				[
					{
						id: 1,
						userId: 1,
						hobbyId: 1,
						createdAt: new Date(),
						updatedAt: new Date()
					},
					{
						id: 2,
						userId: 1,
						hobbyId: 2,
						createdAt: new Date(),
						updatedAt: new Date()
					},
					{
						id: 3,
						userId: 1,
						hobbyId: 3,
						createdAt: new Date(),
						updatedAt: new Date()
					},
					{
						id: 4,
						userId: 2,
						hobbyId: 3,
						createdAt: new Date(),
						updatedAt: new Date()
					},
					{
						id: 5,
						userId: 2,
						hobbyId: 4,
						createdAt: new Date(),
						updatedAt: new Date()
					},
					{
						id: 6,
						userId: 2,
						hobbyId: 5,
						createdAt: new Date(),
						updatedAt: new Date()
					},
					{
						id: 7,
						userId: 3,
						hobbyId: 1,
						createdAt: new Date(),
						updatedAt: new Date()
					},
					{
						id: 8,
						userId: 4,
						hobbyId: 1,
						createdAt: new Date(),
						updatedAt: new Date()
					},
					{
						id: 9,
						userId: 5,
						hobbyId: 1,
						createdAt: new Date(),
						updatedAt: new Date()
					},
					{
						id: 10,
						userId: 5,
						hobbyId: 2,
						createdAt: new Date(),
						updatedAt: new Date()
					},
					{
						id: 11,
						userId: 5,
						hobbyId: 3,
						createdAt: new Date(),
						updatedAt: new Date()
					},
					{
						id: 12,
						userId: 5,
						hobbyId: 4,
						createdAt: new Date(),
						updatedAt: new Date()
					},
					{
						id: 13,
						userId: 5,
						hobbyId: 5,
						createdAt: new Date(),
						updatedAt: new Date()
					}
				],
				{}
			)
		} catch (error) {
			throw Error(error.message)
		}
	},

	down: async (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
		try {
			return await queryInterface.bulkDelete('UserHobbies', null, {})
		} catch (error) {
			throw Error(error)
		}
	}
}
