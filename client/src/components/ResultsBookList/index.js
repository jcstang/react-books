import React from 'react';
import BookListCard from '../BookListCard';

export default function ResultsBookList(props) {

    const defaultImgUrl = "https://source.unsplash.com/sfL_QOnmy00/250x300";

    // const handleSave = (book) => {
    //     axios
    //         .post('/api/books', book)
    //         .then(function() {
    //             console.log('yay!');
    //         })
    //         .catch(function(err) {
    //             console.log(err.message);
    //         });
    // }

    const getActionItem = () => {
        return {
            text: 'Save',
            format: 'info',
            method: props.handleSave
        }
    }

    return (
        <div className="container">
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
                        actionItemMethod={getActionItem().method}
                    />
                ))
            }

        </div>
    );
}