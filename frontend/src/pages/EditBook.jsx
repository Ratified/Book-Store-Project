import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);  // Added for error handling
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:8000/api/books/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setTitle(data.title);
                setAuthor(data.author);
                setPublishYear(data.publishYear);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching book data:', error);
                setLoading(false);
                setError('Failed to fetch book data.');  // Handle fetch error
            });
    }, [id]);

    const handleEditBook = () => {
        if (!title || !author || !publishYear) {
            setError('All fields are required.');  // Validate fields
            return;
        }

        const data = {
            title,
            author,
            publishYear
        };

        setLoading(true);
        fetch(`http://localhost:8000/api/books/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                console.error('Error updating book data:', error);
                setLoading(false);
                setError('Failed to update book.');  // Handle update error
            });
    };

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className="text-3xl my-4">Edit Book</h1>
            {loading && <Spinner />}
            {error && <p className="text-red-500">{error}</p>}  {/* Display error message */}
            <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto space-y-4">
                <div className="my-4">
                    <label htmlFor="title" className="text-xl mr-4 text-gray-500">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className="my-4">
                    <label htmlFor="author" className='text-xl text-gray-500'>Author</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className="my-4">
                    <label htmlFor="publishYear" className="text-xl mr-4 text-gray-500">Publish Year</label>
                    <input
                        type="text"
                        value={publishYear}
                        onChange={(e) => setPublishYear(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <button
                    className="p-2 bg-sky-300 m-8 disabled:opacity-50"  // Disable button when loading
                    onClick={handleEditBook}
                    disabled={loading}
                >
                    Update Book
                </button>
            </div>
        </div>
    );
};

export default EditBook;