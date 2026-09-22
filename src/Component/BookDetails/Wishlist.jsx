'use client';
import { BookContexts } from '@/Context/BooksContexts';
import React, { useContext } from 'react';
import { Bounce, toast } from 'react-toastify';

const Wishlist = ({ books }) => {
  const { wishlist, setWishlist } = useContext(BookContexts);

  const handleWishlistButton = () => {
    setWishlist([...wishlist, books]);
    toast.success('🦄 Add to wishlist!', {
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
  };

  return (
    <div>
      <button 
        className="btn btn-success border-base-300 font-semibold px-8" 
        onClick={handleWishlistButton}
      >
        Add to Wishlist
      </button>
    </div>
  );
};

export default Wishlist;