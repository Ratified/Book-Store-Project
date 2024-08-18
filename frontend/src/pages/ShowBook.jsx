import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'

const ShowBook = () => {
  const { id } = useParams()
  const [book, setBook] = useState({})
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/books/${id}`)
        if (!response.ok) {
          throw new Error('Server error')
        }
        const data = await response.json()
        setBook(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchBook()
  }, [id])

  if (loading) {
    <Spinner />
  }
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className="text-3xl my-4"> {book.title} Book Details</h1>
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
        <div className="my-4">
           <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{book._id}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Title</span>
          <span>{book.title}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Author</span>
          <span>{book.author}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Publish Year</span>
          <span>{book.publishYear}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Create Time</span>
          <span>{new Date(book.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Update Time</span>
          <span>{new Date(book.updatedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  )
}

export default ShowBook
