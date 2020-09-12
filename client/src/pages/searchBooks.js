import React, { useState } from 'react';
// import ResultsBookList from '../ResultsBookList';
import ResultsBookList from '../components/ResultsBookList';
// import googleApis from '../../utils/googleApis';
import googleApis from '../utils/googleApis';
import axios from 'axios';
import AlertMessage from '../components/AlertMessage/AlertMessage';

export default function SearchBooks(props) {
  // ** text from input and results that come back
  //const [ pageMessageState, setPageMessageState ] = useState('');
  //   const [defaultImageUrlState, setDefaultImgUrlState] = useState(
  //     'https://source.unsplash.com/sfL_QOnmy00/250x300'
  //   );
  const [searchTermState, setSearchTermState] = useState('');
  const [bookResultsState, setBookResultsState] = useState([]);
  const [messageState, setMessageState] = useState('');
  const [variantText, setVariantText] = useState('');
  const [isMessageDisplayed, setIsMessageDisplayed] = useState(false);

  const defaultImageUrl = 'https://source.unsplash.com/sfL_QOnmy00/250x300';

  // const searchTermHandler = (event) => {
  //   setSearchTermState(event.target.value);
  //   // goGetBookData();
  // };

  const goGetBookData = async () => {
    const searchResults = await googleApis(searchTermState);

    const listOfBooks = searchResults.data.items.map((item, index) => {

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

    setBookResultsState(listOfBooks);
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
        // setMessageState('yay! book saved successfully!');
        setIsMessageDisplayed(true);
        setTimeout(() => setIsMessageDisplayed(false), 3500);
        // TODO: display happy message
        setMessageState('Success, Book saved to your list.');
        setVariantText('success');
      })
      .catch(function (err) {
        console.log(err.message);
        setIsMessageDisplayed(true);
        setTimeout(() => setIsMessageDisplayed(false), 3500);
        setMessageState(err.message);
        setVariantText('danger');
        // TODO: display sad message
        // setMessageState('Ooops...could not save book. Maybe the book was no good?');
      });
  };

  return (
    <div className='container'>
      <div className='jumbotron'>
        <h1 className='display-4'>ReactReactGo</h1>
        <p className='lead'>Search for and save books of interest</p>
        {/* <p>{messageState}</p> */}
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
      {/* TODO: trying to display the message at your current view top right */}
      <AlertMessage 
        visible={isMessageDisplayed} 
        variant={variantText}
        message={messageState}
      />
      {/* <AlertToast /> */}
      <ResultsBookList
        handleMessages={handleMessages}
        bookList={bookResultsState}
        handleSave={handleSave}
      />
    </div>
  );
}
