const User = require("../models").User;
const Comment = require("../models").Comment;
const articleController = require("../models").Article;

/**
 * Fetch all articles
 */
async function fetchArticles() {
  try {
    return await articleController.findAll({
      include: [User]
    });
  } catch (error) {
    throw error;
  }
}

/**
 * Fetch all articles
 */
async function fetchArticlesByCategory(categoryId) {
    try {
        return await articleController.findAll({
            where: { categoryId},
            include: [User]
        });
    } catch (error) {
        throw error;
    }
}

/**
 * Store a new article
 *
 * @param {string} title
 * @param {string} content
 * @param {int} userId
 */
async function createArticle(title, content, userId) {
  try {
    return await articleController.create({
      title,
      content,
      userId
    });
  } catch (error) {
    throw error;
  }
}

/**
 * Fetch article
 *
 * @param {int} id
 */
async function fetchArticleById(id) {
  try {
    return await articleController.findByPk(id, {
      include: [User, Comment]
    });
  } catch (error) {
    throw error;
  }
}

module.exports = {
  fetchArticles,
  createArticle,
  fetchArticleById,
    fetchArticlesByCategory
};
