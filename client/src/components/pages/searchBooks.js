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

  const defaultImageUrl = 'https://source.unsplash.com/sfL_QOnmy00/250x300';

  // const searchTermHandler = (event) => {
  //   setSearchTermState(event.target.value);
  //   // goGetBookData();
  // };

  const goGetBookData = async () => {
    console.log('1. before the await');
    const searchResults = await googleApis(searchTermState);
    console.log('2. after the await');

    console.log('3. before the map');
    const listOfBooks = searchResults.data.items.map((item, index) => {
      console.log(`thumbnail: ${item.volumeInfo.imageLinks.thumbnail}`);
      // console.log('3a. inside of the map');

      let imageToRender = item.volumeInfo.imageLinks.thumbnail
        ? item.volumeInfo.imageLinks.thumbnail
        : defaultImageUrl;

      return {
        googleKey: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors,
        description: item.volumeInfo.description,
        imageUrl: imageToRender,
        bookUrl: item.volumeInfo.infoLink,
      };
    });

    console.log('4. after the map');
    setBookResultsState(listOfBooks);
    console.log('5. after the set state');
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    goGetBookData();
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
