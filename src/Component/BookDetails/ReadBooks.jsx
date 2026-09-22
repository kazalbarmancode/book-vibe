'use client'
import { BookContexts } from '@/Context/BooksContexts';
import React, { useContext } from 'react';
import { Bounce, toast } from 'react-toastify';

const ReadBooks = ({books}) => {
const {readBooks,setReadBooks}=useContext(BookContexts)
const handleReadButton=()=>{
setReadBooks([...readBooks,books]);
toast.success('🦄 Read the book!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
})

}
    return (
        <div>
            <button className="btn btn-secondary border-base-300 font-semibold px-8" 
            onClick={()=>handleReadButton()}>
              Read
            </button>
        </div>
    );
};

export default ReadBooks;