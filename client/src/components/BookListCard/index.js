import React from 'react';
import './index.css';

export default function BookListCard() {
    /* TODO: optional - cards have a fight when they are on mobile  */
    
    return (
        <div className="container-fluid card">
            <div className="row">
                <div className="card-body col-10">
                    <h2>Book name</h2>
                </div>
                <div className="col-2 card-body align-self-end">
                    <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-warning">View</button>
                        <button type="button" className="btn btn-info">Save</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="card-body col-2">
                    <img src="https://via.placeholder.com/150" alt="book cover" />
                </div>
                <div className="col-10 card-body align-self-end">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat leo libero, vitae consectetur eros vulputate id. Proin facilisis aliquet dui, in interdum lorem imperdiet sodales. Morbi lacinia fermentum lacus sed gravida. Morbi fringilla porttitor tortor, eget aliquam lectus viverra nec. Curabitur vel justo justo. Fusce rhoncus convallis libero non mattis. Cras iaculis nisi nulla, id ultricies sem vestibulum at. Curabitur nec lacus magna. Integer dignissim enim ut mi fringilla suscipit. Nunc vitae arcu sed tortor posuere accumsan et vel libero. Integer mattis odio vestibulum risus vulputate, vulputate consectetur mauris posuere.
                    </p>
                </div>
            </div>
        </div>
    )
}