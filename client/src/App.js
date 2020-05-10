import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBooks from './components/pages/searchBooks';
import SavedBooks from './components/pages/savedBooks';
import Navbar from './components/Navbar';

class App extends Component {

  state = {
    name: '',
    type: ''
  }

  // handleFormSubmit = (event) => {
  //   event.preventDefault();

  //   axios
  //     .post('/savePet', this.state)
  //     .then(function() {
  //       console.log('it worked!');
  //     })
  //     .catch(function() {
  //       console.log('it broke');
  //     });
  // }

  handleInputUpdate = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved-books" component={SavedBooks} />
        </div>
      </Router>
    );
  }
}

export default App;