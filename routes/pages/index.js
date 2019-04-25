const route = require("express").Router();
const axios = require("axios");
const {fetchArticles, fetchArticlesByCategory, fetchArticleById} = require('../../controllers/articleController');
const {fetchCategories} = require('../../controllers/categoryController');

/**
 * Home page
 */
route.get("/", async (req, res) => {
    res.render("index", {
        articles: await fetchArticles(),
        categories: await fetchCategories()
    });
});

/**
 * Home page
 */
route.get("/category/:id", async (req, res) => {
    res.render("category", {
        articles: await fetchArticlesByCategory(req.params.id),
        categories: await fetchCategories()
    });
});

/**
 * Single page with data
 */
route.get("/single/:id", async (req, res) => {
    res.render("single", {
        article: await fetchArticleById(req.params.id),
        categories: await fetchCategories()
    });
});

/**
 * About page
 */
route.get("/about", (req, res) => {
    res.render("pages/about");
});

/**
 * About page
 */
route.get("/contact", (req, res) => {
    res.render("pages/contact");
});

/**
 * 404 page
 */
route.get("*", (req, res) => {
    res.status(404).render("404", {layout: ""});
});

module.exports = route;
