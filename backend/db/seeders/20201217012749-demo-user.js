'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Captain',
        lastName: 'Vontrapp',
        username: 'Demo-lition',
        email: 'demo@user.io',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        firstName: 'Carlotta',
        lastName: 'Nothing',
        username: 'FakeUser1',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        firstName: 'Michael',
        lastName: 'Pigliavento',
        username: 'FakeUser2',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};