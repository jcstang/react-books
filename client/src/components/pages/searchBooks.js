import React, { useState } from 'react';
import ResultsBookList from '../ResultsBookList';
import axios from 'axios';

export default function SearchBooks(props) {

    const [ petNameState, setPetNameState ] = useState('');
    const [ petTypeState, setTypeState ] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const sendingData = {
            petName: petNameState,
            type: petTypeState
        }

        axios
            .post('/savePet', sendingData)
            .then(function() {
                console.log('it worked!');
            })
            .catch(function() {
                console.log('it done broke');
            });
    }


    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Pet Saver</h1>
                <form onSubmit={handleFormSubmit}>
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
                </form>
            </div>
            <ResultsBookList />
        </div>
    );
}