import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Accounts from './components/Accounts';

class App extends Component {
  state = {
    inputValue: ""
  };

  handleInputChange = (e: any) => {
    console.log(e.target.value);
    this.setState({ inputValue: e.target.value })
  };

  render() {
    const {
      inputValue,
    } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <Accounts name={inputValue}/>

        </header>
        <div>
          <input onChange={this.handleInputChange} value={inputValue}/>
          <div>test</div>
        </div>

        <div>
          Booting up and getting information from EOS Node Proxy:
          https://proxy.eosnode.tools/v1/chain/get_info
        </div>
      </div>
    );
  }
}

export default App;
