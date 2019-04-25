const route = require("express").Router();
const {
  fetchArticles,
  createArticle,
  fetchArticleById,fetchArticlesByCategory
} = require("../../controllers/articleController");

/**
 * Fetch all articles
 */
route.get("/", async (req, res) => {
  const articles = await fetchArticles();
  res.status(200).send(articles);
});

/**
 * Fetch all articles
 */
route.get("/getArticlesByCategory/:id", async (req, res) => {
    const articles = await fetchArticlesByCategory(req.params.id);
    res.status(200).send(articles);
});

/**
 * Post an article
 */
route.post("/", async (req, res) => {
  const article = await createArticle(req.body.title, req.body.content, 1);
  res.status(200).send(article);
});

/**
 * Update an article
 */
route.put("/", async (req, res) => {
  //
});

/**
 * Show an article
 */
route.get("/:id", async (req, res) => {
  const article = await fetchArticleById(req.params.id);
  res.status(200).send(article);
});

/**
 * Destroy an article
 */
route.delete("/", async (req, res) => {
  //
});

module.exports = route;
