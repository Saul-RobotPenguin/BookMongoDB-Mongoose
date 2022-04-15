const express = require("express");
const Book = require("../models/book");
const app = express();

app.get("/books", async (req, res) => {
  const books = await Book.find({});

  try {
    res.send(books);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;
