import React, { useState } from 'react';
import BookListCard from '../BookListCard';

export default function ResultsBookList(props) {

    const defaultImgUrl = "https://source.unsplash.com/sfL_QOnmy00/250x300";


    return (
        <div className="container">
            {/* TODO: render thru multiple results via map? */}
            {
                props.bookList.map((book, index) => (
                    <BookListCard 
                        key={index}
                        bookTitle={book.title}
                        imageUrl={book.imageUrl || defaultImgUrl}
                        bookUrl={book.bookUrl}
                    />
                ))
            }

        </div>
    );
}