'use strict';

module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        comment: DataTypes.TEXT
    }, {});

    Comment.associate = function (models) {
        Comment.belongsTo(models.User);
        Comment.belongsTo(models.Article);
    };

    return Comment;
};