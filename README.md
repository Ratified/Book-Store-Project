# Bookstore Project

## Overview

This is a bookstore project that includes a backend built with Express.js and a frontend developed with React. The backend provides an API for managing books, and the frontend consumes this API to display and interact with book data.

## Features

- **Backend**:
  - RESTful API using Express.js.
  - CRUD operations for managing books.
- **Frontend**:
  - React application for viewing and editing books.
  - User interface for adding, editing, and deleting books.
  - Loading indicators and error handling.

## Technologies

- **Backend**:
  - [Express.js](https://expressjs.com/) - Web framework for Node.js
  - [Node.js](https://nodejs.org/) - JavaScript runtime
  - [MongoDB](https://www.mongodb.com/) - NoSQL database
- **Frontend**:
  - [React](https://reactjs.org/) - JavaScript library for building user interfaces
  - [React Router](https://reactrouter.com/) - Routing for single-page applications
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
  - [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## Getting Started

### Prerequisites

- Node.js and npm installed.
- MongoDB server running.

### Setup

#### Backend

1. **Clone the Repository**:
   ```bash
   git clone `https://github.com/Ratified/Book-Store-Project.git`
   cd bookstore-backend
    ```

2. **Install Dependencies**:
   ```bash
    npm start
   ```

3. **Start the Server**
   ```bash 
    npm start
    ```
    The server will run on `http://localhost:8000`

4. **Environment Variables**
Create a .env file in the root directory and add the necessary environment variables (PORT, MONGO_URL)


### Frontend
1. **Navigate to the frontend directory**
   ```bash
    cd bookstore-frontend
    ```

2. **Install dependencies**
   ```bash 
    npm install
   ```

3. **Start the react application**
   ```bash 
    npm run dev
   ```

    The application will run on `http:localhost:5173`


### API ENDPOINTS
`GET /api/books` - Retrieve a list of all books.

`GET /api/books/:id` - Retrieve a specific book by ID.

`POST /api/books` - Add a new book.

`PUT /api/books/:id` - Update an existing book.

`DELETE /api/books/:id` - Delete a book.


### USAGE
Open `http://localhost:5173` in your browser to access the React frontend.

Use the UI to view, add, edit, and delete books.

The frontend communicates with the backend API running on `http://localhost:8000`

### LICENSE
This project is under the MIT License

### ACKNOWLEDGEMENTS
`Express.js` - For building the backend API.
`React` - For building the frontend application.
`Tailwind CSS` - For styling the frontend.
`React Icons` - For icons in the frontend.