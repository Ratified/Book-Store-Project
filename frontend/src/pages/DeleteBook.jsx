import React, { useState } from 'react'; // Import useState
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBook = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const handleDeleteBook = () => {
        // Confirm deletion with the user
        if (window.confirm('Are you sure you want to delete this book?')) {
            setLoading(true);
            fetch(`http://localhost:8000/api/books/${id}`, {
                method: 'DELETE'
            })
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                console.error('Error deleting book:', error);
                setLoading(false);
            });
        }
    };

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className="text-3xl my-4">Delete Book</h1>
            {loading && <Spinner />}
            <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
                <p className="text-xl text-red-500">Are you sure you want to delete this book?</p>
                <button
                    onClick={handleDeleteBook}
                    className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default DeleteBook;