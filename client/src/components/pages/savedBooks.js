import React, { useState, useReducer, useEffect } from 'react';
import BookListCard from '../BookListCard';
import axios from 'axios';

// REDUCER
const savedBooksReducer = (state, action) => {
  switch (action.type) {
    case 'mongo':
      return {
        ...state,
        booksFromMongo: action.docsOfBooks,
      };
    case 'set-message':
      return {
        ...state,
        messageForUser: action.message,
      };
    default:
      break;
  }

  return state;
};

export default function SavedBooks(props) {
  const initialState = {
    defaultImgUrl: 'https://source.unsplash.com/sfL_QOnmy00/250x300',
    booksFromMongo: [],
    messageForUser: '',
  };
  // const [defaultImageUrlState, setDefaultImgUrlState] = useState("https://source.unsplash.com/sfL_QOnmy00/250x300");
  //   const [booksFromDBState, setBooksFromDBState] = useState([]);
  //   const [messageState, setMessageState] = useState('');
  const setMessageState = useState('')[1];
  const [ savedBooks, setSavedBooks ] = useState([]);
  const [ userMessage, setUserMessage ] = useState('');
  const [ defaultImgUrl] = useState('https://source.unsplash.com/sfL_QOnmy00/250x300');

  // REDUCER
  const [savedBookState, saveBooksDispatch] = useReducer(
    savedBooksReducer,
    initialState
  );

  const handleStartData = () => {
    setTimeout(() => {
      axios.get('/api/saved-books')
        .then(function (documentsFromMongo) {
          // setSavedBooks(documentsFromMongo.data);
          console.log('inside thingy');
          setSavedBooks(documentsFromMongo.data);
        })
        .catch(function (err) {
          console.log(err.message);
        });
    }, 1000);
  }

  useEffect(() => {
    console.log('how often do I get printed?');
    handleStartData();

    // axios
    //   .get('/api/saved-books')
    //   .then(function (documentsFromMongo) {
    //     // setSavedBooks(documentsFromMongo.data);
    //   })
    //   .catch(function (err) {
    //     console.log(err.message);
    //   });
  });

  const handleDelete = (book_id) => {
    const deletePath = `/api/books/${book_id}`;
    axios
      .delete(deletePath)
      .then((result) => {
        // console.log(result);
        setMessageState('yay! book deleted successfully!');
      })
      .catch((err) => {
        console.log(err.message);
        setMessageState('error! could not delete the book');
      });
  };

  const getActionItem = () => {
    return {
      text: 'Delete',
      format: 'danger',
      method: handleDelete,
    };
  };

  // trying useEffect instead
  // goGetFreshData();

  return (
    <div className='container'>
      <div className='jumbotron'>
        <h1 className='display-4'>ReactReactGo</h1>
        <p className='lead'>Search for and save books of interest</p>
        <p>{savedBooks.messageForUser}</p>
        <hr className='my-4' />
      </div>
      {savedBooks.map((book, index) => (
        <BookListCard
          key={index}
          mongoKey={book._id}
          bookTitle={book.title}
          // imageUrl={book.imageUrl || defaultImageUrlState}
          imageUrl={book.imageUrl || defaultImgUrl }
          bookUrl={book.bookUrl}
          description={book.description}
          actionItemText={getActionItem().text}
          actionItemFormat={getActionItem().format}
          actionItemMethod={handleDelete}
          dispatch={saveBooksDispatch}
        />
      ))}
    </div>
  );
}
