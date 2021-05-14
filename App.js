import React from 'react';
import axios from 'axios';

import TaskList from './TaskList';
import AddTask from './AddTask';
import Card from './Card';

class App extends React.Component {
  state = {
    tasks: [],
    errorMessage: ''
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('http://my-json-server.typicode.com/srp236/project3DB/accounts')
      .then(response => {
        this.setState({ tasks: response.data });
      }).catch(error => {
        this.setState({ errorMessage: error.message });
      });
  }

  render() {
    return null;
  }
}

export default App;