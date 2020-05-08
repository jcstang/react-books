import React from 'react';

export default function Header() {
    return (
        <div className="jumbotron">
        <h1 className="display-4">ReactReactGo</h1>
        <p className="lead">Search for and save books of interest</p>
        <hr className="my-4" />
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
    );
}