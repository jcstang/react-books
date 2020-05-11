import React, { useState } from 'react';
import BookListCard from '../BookListCard';
import axios from 'axios';
// import ResultBookList from '../ResultsBookList';

export default function SavedBooks(props) {
    const [defaultImageUrlState, setDefaultImgUrlState] = useState("https://source.unsplash.com/sfL_QOnmy00/250x300");
    const [booksFromDBState, setBooksFromDBState] = useState([]);

    const goGetFreshData = () => {
        axios
            .get('/api/saved-books')
            .then(function (documentsFromMongo) {
                setBooksFromDBState(documentsFromMongo.data);
            })
            .catch(function (err) {
                console.log(err.message);
            });
    }

    // const deleteBookmark = bookmarkIndex => {
    //     const newLinks = this.state.links.filter(function (link, index) {
    //         return index !== bookmarkIndex;
    //     });

    //     this.setState({ links: newLinks });
    // }

    const handleDelete = book_id => {
        // console.log('I made it to handleDelte!!!');
        const deletePath = `/api/books/${book_id}`;
        axios
            .delete(deletePath)
            .then((result) => {
                console.log(result);
            })
            .catch(err => {
                console.log(err.message);
            });
    }

    const getActionItem = () => {
        return {
            text: 'Delete',
            format: 'danger',
            method: handleDelete
        }
    }

    goGetFreshData();

    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">ReactReactGo</h1>
                <p className="lead">Search for and save books of interest</p>
                <hr className="my-4" />
            </div>
            {
                booksFromDBState.map((book, index) => (
                    <BookListCard
                        key={index}
                        mongoKey={book._id}
                        bookTitle={book.title}
                        imageUrl={book.imageUrl || defaultImageUrlState}
                        bookUrl={book.bookUrl}
                        description={book.description}
                        actionItemText={getActionItem().text}
                        actionItemFormat={getActionItem().format}
                        actionItemMethod={handleDelete}
                    />
                ))
            }
        </div>
    );

}