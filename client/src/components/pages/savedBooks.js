import React, { useState } from 'react';
import ResultBookList from '../ResultsBookList';

export default function SavedBooks() {

    const [ bookTitle, setBookTitle ] = useState('');
    const [ savedBookList, setBookList ] = useState([]);

    

    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">ReactReactGo</h1>
                <p className="lead">Search for and save books of interest</p>
                <hr className="my-4" />
            </div>
            <ResultBookList />
        </div>
    );
}