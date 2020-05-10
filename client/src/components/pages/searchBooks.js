import React, { useState } from 'react';
import ResultsBookList from '../ResultsBookList';
import googleApis from '../../utils/googleApis';

export default function SearchBooks(props) {

    const [ petNameState, setPetNameState ] = useState('');
    const [ petTypeState, setTypeState ] = useState('');
    const [ searchTermState, setSearchTermState ] = useState('');
    // TODO: results array
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
        console.log('hi im handling form submit');
        // TODO: search google apis 
        // TODO: display results
        
        googleApis(searchTermState)
        .then(function(bookResults) {
            console.log('it worked!');
            //console.log(bookResults);
            console.log(bookResults.data.items);
            
            // formatBookList(bookResults.data.items)
            const rawBookList = bookResults.data.items;

            const proposedBookList = [];
            
            // FIXME: problem: error is catching. bookResultsState not being set, outcome: bookResults to be set.
            // rawBookList.map((item, index) => {
            //     proposedBookList.push({
            //         title: item.volumeInfo.title,
            //         authors: ["JRR Tokein"],
            //         description: item.volumeInfo.description,
            //         imageUrl: item.volumeInfo.imageLink.thumbnail,
            //         bookUrl: item.volumeInfo.infoLink
            //     });
            // });
            // console.log(proposedBookList);


            // this isn't working either
            rawBookList.forEach(item => {
                proposedBookList.push({
                    title: item.volumeInfo.title,
                    authors: ["JRR Tokein"],
                    description: item.volumeInfo.description,
                    imageUrl: item.volumeInfo.imageLink.thumbnail,
                    bookUrl: item.volumeInfo.infoLink
                });
            });
            console.log(proposedBookList);

            setBookResultsState(proposedBookList);
        })
        .catch(function() {
            console.log('broke!');
        })

        // axios
        //     .get('https://www.googleapis.com/books/v1/volumes?q=harry+potter+intitle:keyes&key=AIzaSyDmrv-BNf605fTWjdYmc2ReKWSqkNuNHeY')
        //     .then(function(data) {
        //         console.log('it worked!!');
        //         console.log(data);
        //     })
        //     .catch(function() {
        //         console.log('nope nope nope.... it broke');
        //     })

            // key: AIzaSyDmrv-BNf605fTWjdYmc2ReKWSqkNuNHeY
            // https://www.googleapis.com/books/v1/volumes?q=harry+potter

  //   axios
  //     .post('/savePet', this.state)
  //     .then(function() {
  //       console.log('it worked!');
  //     })
  //     .catch(function() {
  //       console.log('it broke');
  //     });

        // const sendingData = {
        //     petName: petNameState,
        //     type: petTypeState
        // }

        // axios
        //     .post('/savePet', sendingData)
        //     .then(function() {
        //         console.log('it worked!');
        //     })
        //     .catch(function() {
        //         console.log('it done broke');
        //     });
    }


    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">ReactReactGo</h1>
                <p className="lead">Search for and save books of interest</p>
                <hr className="my-4" />
                {/* <form onSubmit={handleFormSubmit}>
                    <section>
                        <input
                            type="text"
                            name="petName"
                            value={petNameState}
                            onChange={event => setPetNameState(event.target.value)}
                            placeholder="Pet Name" />
                    </section>
                    <section>
                        <input
                            type="text"
                            name="type"
                            value={petTypeState}
                            onChange={event => setTypeState(event.target.value)}
                            placeholder="Kind Of Pet" />
                    </section>
                    <section>
                        <button>Save this pet!</button>
                    </section>
                </form> */}
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
                bookList={bookResultsState}
            />
        </div>
    );
}