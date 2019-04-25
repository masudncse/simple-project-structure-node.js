"use strict";

module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define(
        "Article",
        {
            title: DataTypes.STRING,
            content: DataTypes.STRING
        },
        {}
    );

    Article.associate = function (models) {
        Article.belongsTo(models.User);
        Article.belongsTo(models.Category);
        Article.hasMany(models.Comment);
    };

    return Article;
};
