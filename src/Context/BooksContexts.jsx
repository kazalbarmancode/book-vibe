"use client" 
import React, { createContext, useState } from 'react';

export const BookContexts= createContext({})

const BooksProvider = ({children}) => {
const [readBooks,setReadBooks]=useState([])
const [wishlist,setWishlist]=useState([])
const sharedData={
    readBooks,setReadBooks,wishlist,setWishlist
}

    return (
        <BookContexts.Provider value={sharedData}>
            {children}
        </BookContexts.Provider>
    );
};

export default BooksProvider;