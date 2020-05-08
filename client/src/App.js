import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(`hi ${Date.now()}`);
    
  }

  render() {
    return (
      <div>
        <h1>Pet Saver</h1>

        <form onSubmit={this.handleFormSubmit}>
          <section>
            <input type="text" name="name" placeholder="your pets name here" />
          </section>
          <section>
            <input type="text" name="type" placeholder="what kind of pet" />
          </section>
          <section>
            <button>Save this pet!</button>
          </section>
        </form>
      </div>
    );
  }
}

export default App;
