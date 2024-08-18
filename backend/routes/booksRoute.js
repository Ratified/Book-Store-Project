import express from "express";
import { createBook, getBooks, getBook, updateBook, deleteBook } from "../controllers/book.controller.js";

const router = express.Router();

// Route to save a new book
router.post('/', createBook);

// Route to get all books from the database
router.get('/', getBooks);

// Route to get a book by ID
router.get('/:id', getBook);

// Route to update a book by ID
router.put('/:id', updateBook);

// Route to delete a book by ID
router.delete('/:id', deleteBook);

export default router;