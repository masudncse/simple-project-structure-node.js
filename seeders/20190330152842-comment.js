'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Comments', [{
            comment: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            articleId: 1,
            userId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            comment: 'Donec sollicitudin molestie malesuada.',
            articleId: 2,
            userId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            comment: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            articleId: 1,
            userId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            comment: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            articleId: 2,
            userId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            comment: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
            articleId: 3,
            userId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            comment: 'Donec sollicitudin molestie malesuada.',
            articleId: 2,
            userId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Comments', null, {});
    }
};
