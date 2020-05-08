import React, { Component } from "react";
import axios from 'axios';

class App extends Component {

  state = {
    name: '',
    type: ''
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    axios
      .post('/savePet', this.state)
      .then(function() {
        console.log('it worked!');
      })
      .catch(function() {
        console.log('it broke');
      });
  }

  handleInputUpdate = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1>Pet Saver</h1>

        <form onSubmit={this.handleFormSubmit}>
          <section>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputUpdate}
              placeholder="Pet Name" />
          </section>
          <section>
            <input
              type="text"
              name="type"
              value={this.state.type}
              onChange={this.handleInputUpdate}
              placeholder="Kind Of Pet" />
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