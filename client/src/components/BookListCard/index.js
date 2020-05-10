import React from 'react';
import './index.css';
import axios from 'axios';

export default function BookListCard(props) {
    /* TODO: optional - cards have a fight when they are on mobile  */

    function saveButtonClicked(book) {
        // TODO: take id and save to db? or maybe the whole book object?

        axios
            .post('/api/books', book)
            .then(function() {
                console.log('yay!');
            })
            .catch(function(err) {
                console.log(err.message);
            });

        //   axios
        //     .post('/savePet', this.state)
        //     .then(function() {
        //       console.log('it worked!');
        //     })
        //     .catch(function() {
        //       console.log('it broke');
        //     });
        // }
    }

    // **************
    // TODO: WHICH action button to display??? Save or Delete
    // **************
    
    return (
        <div className="container-fluid card">
            <div className="row">
                <div className="card-body col-10">
                    <h2>{props.bookTitle}</h2>
                </div>
                <div className="col-2 card-body align-self-end">
                    <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <a  href={props.bookUrl} 
                            className="btn btn-warning" 
                            target="_blank" 
                            rel="noopener noreferrer">View</a>
                        <button 
                            type="button" 
                            className="btn btn-info"
                            onClick={() => saveButtonClicked(props.bookObject)}
                        >Save</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="card-body col-3">
                    <img src={props.imageUrl} alt="book cover" />
                </div>
                <div className="col-9 card-body align-self-end">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}