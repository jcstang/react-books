import React, { useState } from 'react';
import ResultsBookList from '../ResultsBookList';
import googleApis from '../../utils/googleApis';
import axios from 'axios';

export default function SearchBooks(props) {
  // ** text from input and results that come back
  //const [ pageMessageState, setPageMessageState ] = useState('');
  //   const [defaultImageUrlState, setDefaultImgUrlState] = useState(
  //     'https://source.unsplash.com/sfL_QOnmy00/250x300'
  //   );
  const [searchTermState, setSearchTermState] = useState('');
  const [bookResultsState, setBookResultsState] = useState([]);
  const [messageState, setMessageState] = useState('');

  const defaultImageUrlState =
    'https://source.unsplash.com/sfL_QOnmy00/250x300';

  const searchTermHandler = (event) => {
    setSearchTermState(event.target.value);
    // goGetBookData();
  };

  const goGetBookData = () => {
    googleApis(searchTermState)
      .then((bookResults) => {
        let bookList = bookResults.data.items.map((item, index) => {
          let imageToRender = '';
          try {
            imageToRender = item.volumeInfo.imageLinks.thumbnail;
          } catch (error) {
            imageToRender = defaultImageUrlState;
            console.log(error);
          }

          return {
            googleKey: item.id,
            title: item.volumeInfo.title,
            authors: ['JRR Tolkein'],
            description: item.volumeInfo.description,
            imageUrl: imageToRender,
            bookUrl: item.volumeInfo.infoLink,
          };
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // goGetBookData();

    googleApis(searchTermState)
      .then(function (bookResults) {
        // const rawBookList = bookResults.data.items;

        let proposedBookList = bookResults.data.items.map(function (
          item,
          index
        ) {
          let imageToRender = '';

          try {
            imageToRender = item.volumeInfo.imageLinks.thumbnail;
          } catch (e) {
            imageToRender = defaultImageUrlState;
          }

          // console.log(imageToRender);

          return {
            googleKey: item.id,
            title: item.volumeInfo.title,
            authors: ['JRR Tokein'],
            description: item.volumeInfo.description,
            imageUrl: imageToRender,
            bookUrl: item.volumeInfo.infoLink,
          };
        });

        setBookResultsState(proposedBookList);
      })
      .catch(function (err) {
        console.log(`broke... ${err.message}`);
      });
  };

  // TODO: find out how to get the success message from the card
  const handleMessages = (message) => {
    console.log(`here is your message sir: ${message}`);
  };

  const handleSave = (book) => {
    axios
      .post('/api/books', book)
      .then(function () {
        console.log('yay!');
        setMessageState('yay! book saved successfully!');
      })
      .catch(function (err) {
        console.log(err.message);
        setMessageState('error! could not save book');
      });
  };

  return (
    <div className='container'>
      <div className='jumbotron'>
        <h1 className='display-4'>ReactReactGo</h1>
        <p className='lead'>Search for and save books of interest</p>
        <p>{messageState}</p>
        <hr className='my-4' />
        <form onSubmit={handleFormSubmit}>
          <div className='form-group'>
            <label htmlFor='book-search'>Search for a book</label>
            <input
              type='text'
              className='form-control'
              id='book-search'
              name='searchName'
              value={searchTermState}
              onChange={(event) => setSearchTermState(event.target.value)}
              // onChange={(event) => searchTermHandler(event)}
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Search
          </button>
        </form>
      </div>
      <ResultsBookList
        handleMessages={handleMessages}
        bookList={bookResultsState}
        handleSave={handleSave}
      />
    </div>
  );
}
