import React, { useState } from 'react';
import axios from 'axios';

export default function searchBooks(props) {

    // const [ petState, setPetState ] = useState({
    //     petName: '',
    //     type: ''
    // });

    const [ petNameState, setPetNameState ] = useState('');
    const [ petTypeState, setTypeState ] = useState('');

    // const handleInputUpdate = (event) => {
    //     const { name, value } = event.target;

    //     console.log(event.target);
    //     console.log(name);
    //     console.log(value);

    //     setPetState({ 
    //         [name]: value
    //     });
    //     console.log(petState);
    // }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log(petState);

        axios
            .post('/savePet', petState)
            .then(function() {
                console.log('it worked!');
            })
            .catch(function() {
                console.log('it done broke');
            });
    }


    return (
        <div>
            <h1>Pet Saver</h1>

            <form onSubmit={handleFormSubmit}>
                <section>
                    <input
                        type="text"
                        name="petName"
                        value={petState.petName}
                        onChange={handleInputUpdate}
                        placeholder="Pet Name" />
                </section>
                <section>
                    <input
                        type="text"
                        name="type"
                        value={petState.type}
                        onChange={handleInputUpdate}
                        placeholder="Kind Of Pet" />
                </section>
                <section>
                    <button>Save this pet!</button>
                </section>
            </form>
        </div>
    );
}