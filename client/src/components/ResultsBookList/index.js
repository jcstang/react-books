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

  // console.log(`** resultBookList-comp.....${props.bookList[0]}`);

  return (
    <div className='container book-container'>
      {props.bookList.map((book, index) => (
        <BookListCard
          key={index}
          bookTitle={book.title}
          description={book.description}
          authors={book.authors}
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
