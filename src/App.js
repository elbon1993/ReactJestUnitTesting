import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoadingIndicator from './components/LoadingIndicator';

class App extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    this._timer = setTimeout(
      () => this.setState({isLoading: false}),
      10000
    );
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <pre>isLoading: {String(this.state.isLoading)}</pre>
        <LoadingIndicator isLoading={this.state.isLoading}>
          <div>Welcome...</div>
        </LoadingIndicator>
      </div>
    );
  }
}

export default App;
