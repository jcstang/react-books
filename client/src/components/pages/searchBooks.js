import React, { useState } from 'react';
import ResultsBookList from '../ResultsBookList';
import axios from 'axios';

export default function SearchBooks(props) {

    const [ petNameState, setPetNameState ] = useState('');
    const [ petTypeState, setTypeState ] = useState('');
    const [ searchTermState, setSearchTermState ] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('hi im handling form submit');
        // TODO: search google apis 
        // TODO: display results


        axios
            .get('https://www.googleapis.com/books/v1/volumes?q=harry+potter+intitle:keyes&key=AIzaSyDmrv-BNf605fTWjdYmc2ReKWSqkNuNHeY')
            .then(function(data) {
                console.log('it worked!!');
                console.log(data);
            })
            .catch(function() {
                console.log('nope nope nope.... it broke');
            })

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
            <ResultsBookList />
        </div>
    );
}