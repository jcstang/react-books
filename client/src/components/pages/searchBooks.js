import React, { useState } from 'react';
import ResultsBookList from '../ResultsBookList';
import googleApis from '../../utils/googleApis';
import axios from 'axios';

export default function SearchBooks(props) {

    // ** text from input and results that come back
    const [ pageMessageState, setPageMessageState ] = useState('');
    const [ searchTermState, setSearchTermState ] = useState('');
    const [ bookResultsState, setBookResultsState ] = useState([]);
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        googleApis(searchTermState)
        .then(function(bookResults) {
            // const rawBookList = bookResults.data.items;
            
            let proposedBookList = bookResults.data.items.map(function(item, index) {
                return {
                    googleKey: item.id,
                    title: item.volumeInfo.title,
                    authors: ["JRR Tokein"],
                    description: item.volumeInfo.description,
                    imageUrl: item.volumeInfo.imageLinks.thumbnail,
                    bookUrl: item.volumeInfo.infoLink
                }
            });

            setBookResultsState(proposedBookList);

        })
        .catch(function(err) {
            console.log(`broke... ${err.message}`);
        })

    }

    // TODO: find out how to get the success message from the card
    const handleMessages = (message) => {
        console.log(`here is your message sir: ${message}`);
    }

    const handleSave = (book) => {
        axios
            .post('/api/books', book)
            .then(function() {
                console.log('yay!');
            })
            .catch(function(err) {
                console.log(err.message);
            });
    }


    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">ReactReactGo</h1>
                <p className="lead">Search for and save books of interest</p>
                <p>{pageMessageState}</p>
                <hr className="my-4" />
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="book-search">Search for a book</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="book-search"
                            name="searchName"
                            value={searchTermState}
                            onChange={event => setSearchTermState(event.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Search</button>
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