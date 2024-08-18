import React from 'react'
import { useState, useEffect } from 'react'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
  
const Home = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true) 

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/books')
        if (!response.ok) {
          throw new Error('Server error')
        } 
        const data = await response.json()
        setBooks(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false) 
      }
    }

    fetchBooks()
  }, [])

  return (
    <div className='p-4'>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-3xl text-green-500' aria-label="Add new book" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">No</th>
              <th className="border border-slate-600 rounded-md">Title</th>
              <th className="border border-slate-600 rounded-md hidden md:table-cell">Author</th>
              <th className="border border-slate-600 rounded-md hidden md:table-cell">Publish Year</th>
              <th className="border border-slate-600 rounded-md">Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id}>
                <td className="border border-slate-600 rounded-md">{index + 1}</td>
                <td className="border border-slate-600 rounded-md">{book.title}</td>
                <td className="border border-slate-600 rounded-md hidden md:table-cell">{book.author}</td>
                <td className="border border-slate-600 rounded-md hidden md:table-cell">{book.publishYear}</td>
                <td className="border border-slate-600 rounded-md flex justify-around">
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className='text-xl text-blue-500 mx-2' aria-label="View details" />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className='text-xl text-yellow-500 mx-2' aria-label="Edit book" />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className='text-xl text-red-500 mx-2' aria-label="Delete book" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Home