import React from 'react';
import BookListCard from '../BookListCard';

export default function ResultsBookList(props) {

    const defaultImgUrl = "https://source.unsplash.com/sfL_QOnmy00/250x300";

    const getActionItem = () => {
        return {
            text: 'Save',
            format: 'info'
        }
    }

    return (
        <div className="container">
            {/* TODO: render thru multiple results via map? */}
            {
                props.bookList.map((book, index) => (
                    <BookListCard 
                        key={index}
                        bookTitle={book.title}
                        description={book.description}
                        imageUrl={book.imageUrl || defaultImgUrl}
                        bookUrl={book.bookUrl}
                        bookObject={book}
                        actionItemText={getActionItem().text}
                        actionItemFormat={getActionItem().format}
                    />
                ))
            }

        </div>
    );
}