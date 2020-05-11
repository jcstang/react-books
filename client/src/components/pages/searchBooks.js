import React, { useState } from 'react';
import ResultsBookList from '../ResultsBookList';
import googleApis from '../../utils/googleApis';
import axios from 'axios';

export default function SearchBooks(props) {

    //const [ petNameState, setPetNameState ] = useState('');
    // const [ petTypeState, setTypeState ] = useState('');

    // ** text from input and results that come back
    const [ pageMessageState, setPageMessageState ] = useState('');
    const [ searchTermState, setSearchTermState ] = useState('');
    const [ bookResultsState, setBookResultsState ] = useState([]);
    const [ hardListOfBooksState, setListOfBookState ] = useState([
        {
            title: 'The Hunger Games',
            authors: ['Suzanne Collins'],
            description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
            imageUrl: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
            bookUrl: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
        },
        {
            title: 'I am Legend',
            authors: ['Richard Matheson'],
            description: "",
            imageUrl: "",
            bookUrl: ""
        },
        {
            title: 'The Hobbit',
            authors: ['J.R.R Tolkein'],
            description: "",
            imageUrl: "",
            bookUrl: ""
        }
    ]);
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // console.log('hi im handling form submit');
        
        googleApis(searchTermState)
        .then(function(bookResults) {
            console.log('it worked!');
            const rawBookList = bookResults.data.items;
            // console.log(rawBookList);
            
            let proposedBookList = rawBookList.map(function(item, index) {
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