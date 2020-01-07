'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
		return await queryInterface.bulkInsert(
			'Users',
			[
				{
					firstName: 'John',
					lastName: 'Doe',
					email: 'demo@demo.com',
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
          firstName: 'Shahzad',
          lastName: 'Kahn',
          email: 'party@party.com',
          createdAt : new Date(),
          updatedAt : new Date()

        },
        {
          firstName: 'Melanie',
          lastName: 'McGuire',
          email: 'party@party.com',
          createdAt : new Date(),
          updatedAt : new Date()

        },
        {
          firstName: 'Daniel',
          lastName: 'Scott',
          email: 'party@party.com',
          createdAt : new Date(),
          updatedAt : new Date()

        },
        {
          firstName: 'Caleb',
          lastName: 'Holland',
          email: 'party@party.com',
          createdAt : new Date(),
          updatedAt : new Date()

        },
        {
          firstName: 'Andrew',
          lastName: 'Murray',
          email: 'party@party.com',
          createdAt : new Date(),
          updatedAt : new Date()

        },
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
		return await queryInterface.bulkDelete('Users', null, {})
	}
}
