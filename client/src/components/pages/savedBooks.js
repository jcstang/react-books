import React, { Component } from 'react';
import BookListCard from '../BookListCard';
import ResultBookList from '../ResultsBookList';

class SavedBooks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            defaultImageUrl: "https://source.unsplash.com/sfL_QOnmy00/250x300",
            listOfSavedBooks: [
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
                    bookurl: ""
                },
                {
                    title: 'The Hobbit',
                    authors: ['J.R.R Tolkein'],
                    description: "",
                    imageUrl: "",
                    bookurl: ""
                }
            ]
        }
    }

    componentWillMount() {
        // go get data from mongodb first?
        // TODO: go get mongo data
        const updatedBooks = [...this.state.listOfSavedBooks, {
            title: 'Harry Potter and the Chamber of Secrets',
            authors: ["JK Rowling"],
            description: "",
            imageUrl: "",
            bookUrl: ""
        }];

        this.setState({
            listOfSavedBooks: updatedBooks
        });
    }


    render(props) {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">ReactReactGo</h1>
                    <p className="lead">Search for and save books of interest</p>
                    <hr className="my-4" />
                </div>
                {
                    this.state.listOfSavedBooks.map((book, index) => (
                        <BookListCard 
                            key={index}
                            bookTitle={book.title}
                            imageUrl={book.imageUrl || this.state.defaultImageUrl}
                            bookUrl={book.bookUrl}
                        />
                    ))
                }
            </div>
        );
    }
}

export default SavedBooks;