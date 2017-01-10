import React, { Component } from 'react';
import '../bower_components/bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

class App extends Component {

  render() {
    return (
        <div id="main">
            {this.props.children}
        </div>
    );
  }
}

export default App;
