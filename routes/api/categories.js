const route = require("express").Router();
const {fetchCategories} = require("../../controllers/categoryController");

/**
 * Fetch all articles
 */
route.get("/", async (req, res) => {
  const categories = await fetchCategories();
  res.status(200).send(categories);
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
