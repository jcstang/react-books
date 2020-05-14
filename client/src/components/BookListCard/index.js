import React from 'react';
import './index.css';

export default function BookListCard(props) {
    /* TODO: optional - cards have a fight when they are on mobile  */

    const decideAction = (event) => {
        event.preventDefault();
        // console.log('decideAction');
        // console.log(props.actionItemMethod);

        if(props.actionItemText === 'Save')  {
            props.actionItemMethod(props.bookObject);
        } else {
            props.actionItemMethod(props.mongoKey);
        }

    }

    // const deleteSomething = (event) => {
    //     event.preventDefault();

    //     props.handleDelete(props.mongoKey);
    // }

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
                            onClick={() => props.dispatch({ type: 'set-message', message: 'user has clicked the view button'})}
                            rel="noopener noreferrer">View</a>
                        <button 
                            type="button" 
                            className={`btn btn-${props.actionItemFormat}`}
                            // onClick={() => saveButtonClicked(props.bookObject)}
                            onClick={decideAction}
                        >{props.actionItemText}</button>
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