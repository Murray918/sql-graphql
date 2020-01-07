'use strict';

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
      return await queryInterface.bulkInsert('Hobbies', [
        {
          name: 'guitar',
          createdAt: new Date(),
					updatedAt: new Date()
        },
        {
          name: 'coding',
          createdAt: new Date(),
					updatedAt: new Date()
        },
        {
          name: 'cooking',
          createdAt: new Date(),
					updatedAt: new Date()
        },
        {
          name: 'magic the gathering',
          createdAt: new Date(),
					updatedAt: new Date()
        },
        {
          name: 'figure skating',
          createdAt: new Date(),
					updatedAt: new Date()
        },
        {
          name: 'pokemon go',
          createdAt: new Date(),
					updatedAt: new Date()
        },
      ])
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return await queryInterface.bulkDelete('Hobbies', null, {})
  }
};
