'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Categories', [{
            name: 'Science Fiction',
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            name: 'Health Tips',
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            name: 'Daily Politics',
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            name: 'Education',
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            name: 'Agriculture News',
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    down: (queryInterface, Sequelize) => {
          return queryInterface.bulkDelete('Categories', null, {});
    }
};
