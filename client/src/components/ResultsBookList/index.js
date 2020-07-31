import React from 'react';
import BookListCard from '../BookListCard';

export default function ResultsBookList(props) {
  const defaultImgUrl = 'https://source.unsplash.com/sfL_QOnmy00/250x300';

  const getActionItem = () => {
    return {
      text: 'Save',
      format: 'info',
      method: props.handleSave,
    };
  };

  return (
    <div className='container book-container'>
      {props.bookList.map((book, index) => (
        <BookListCard
          key={index}
          bookTitle={book.title}
          authors={book.authors}
          description={book.description}
          imageUrl={book.imageUrl || defaultImgUrl}
          bookUrl={book.bookUrl}
          bookObject={book}
          actionItemText={getActionItem().text}
          actionItemFormat={getActionItem().format}
          actionItemMethod={getActionItem().method}
        />
      ))}
    </div>
  );
}
