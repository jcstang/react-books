import React from 'react';
import './index.css';

export default function BookListCard(props) {
    /* TODO: optional - cards have a fight when they are on mobile  */
    
    return (
        <div className="container-fluid card">
            <div className="row">
                <div className="card-body col-10">
                    <h2>{props.bookTitle}</h2>
                </div>
                <div className="col-2 card-body align-self-end">
                    <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <a href={props.bookUrl} className="btn btn-warning" target="_blank" rel="noopener noreferrer">View</a>
                        <button type="button" className="btn btn-info">Save</button>
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