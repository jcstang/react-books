import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBooks from './components/pages/searchBooks';
import SavedBooks from './components/pages/savedBooks';
import Navbar from './components/Navbar';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);

    // this.goGetFreshData = this.goGetFreshData.bind(this);
    
    this.state = {
      name: '',
      type: '',
      mongoData: []
    }

    // this.goGetNewData = this.goGetNewData.bind(this);
  }

  componentDidMount = () => {
    // this.goGetFreshData();
    // this.goGetNewData()
    //   .then(function(docsFromDB) {
    //     this.setState({
    //       mongoData: docsFromDB
    //     });
    //   });
  }

  // goGetNewData = () => {
  //   return axios.get('/api/saved-books');
  // }

  // goGetFreshData() {
  //   axios
  //       .get('/api/saved-books')
  //       .then(function(documentsFromMongo) {
  //         this.setState({
  //           mongoData: documentsFromMongo
  //         })
  //       })
  //       .catch(function(err) {
  //           console.log(err.message);
  //       });
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
          <Route 
            exact path="/saved-books" 
            component={() => <SavedBooks mongoBookData={this.state.mongoData} />} 
          />
        </div>
      </Router>
    );
  }
}

export default App;