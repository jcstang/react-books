import React from 'react';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="/">
                    <img src="./logo.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                        ReactReactGo
                </a>
            </nav>
        </div>
    );
}