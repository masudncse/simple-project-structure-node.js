"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Articles",
            [
                {
                    title: "Donec rutrum congue leo eget malesuada.",
                    content:
                        "Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.",
                    categoryId: 1,
                    userId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    title: "Lorem ipsum dolor sit amet.",
                    content:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh.",
                    categoryId: 2,
                    userId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    title: "Curabitur non nulla sit amet nisl.",
                    content:
                        "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur aliquet quam id dui posuere blandit.",
                    categoryId: 2,
                    userId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Articles", null, {});
    }
};
