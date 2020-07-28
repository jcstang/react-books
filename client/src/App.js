import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBooks from './components/pages/searchBooks';
import SavedBooks from './components/pages/savedBooks';
import Navbar from './components/Navbar';

// const appReducer = (state, action) => {
//   return state;
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      type: '',
      mongoData: [],
    };
  }

  handleInputUpdate = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path='/' component={SearchBooks} />
          <Route
            exact
            path='/saved-books'
            component={() => (
              <SavedBooks mongoBookData={this.state.mongoData} />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
