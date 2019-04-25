const Category = require("../models").Category;

/**
 * Fetch all articles
 */
async function fetchCategories() {
  try {
    return await Category.findAll();
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
    return await Article.create({
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
    return await Article.findByPk(id, {
      include: [User]
    });
  } catch (error) {
    throw error;
  }
}

module.exports = {
    fetchCategories
};
