import Book from "../models/book.model.js";

export const createBook = async (req, res) => {
    try {
        const { title, author, publishYear } = req.body;

        if (!title || !author || !publishYear) {
            return res.status(400).send({ message: "Title, author, and publishYear are required" });
        }

        const book = new Book({ title, author, publishYear });
        await book.save();
        res.status(201).send(book);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        if (!books.length) {
            return res.status(404).send({ message: "No books found in the database" });
        }
        res.status(200).send(books);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export const getBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).send({ message: "Book not found" });
        }
        res.status(200).send(book);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).send({ message: "Book not found" });
        }

        book.title = req.body.title || book.title;
        book.author = req.body.author || book.author;
        book.publishYear = req.body.publishYear || book.publishYear;
        await book.save();
        res.status(200).send(book);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndDelete(id);

        if (!book) {
            return res.status(404).send({ message: "Book not found" });
        }

        res.status(200).send({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};