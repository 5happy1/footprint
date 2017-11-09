import React, { Component } from 'react';
import './App.css';
import UserForm from './Components/UserForm.js';
import MainScreen from './Components/MainScreen.js';
import AnalyzeImage from './Components/AnalyzeImage.js';
import ResultsScreen from './Components/ResultsScreen.js';
import logo from './images/logo.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 'MainScreen',
      currentUser: {},
      url: '',
      info: []
    }
  }

  handleSaveUser(user, name, country, state) {
    this.setState(
      {
        page: 'MainScreen',
        currentUser: {
          name:name,
          country:country,
          state:state
        }
      }
    );
  }
  
  handleAnalyzeImage(url) {
    this.setState({page: 'AnalyzeImage', url: url});
  }
  
  handleSaveInfo(info) {
    this.setState({page: 'ResultsScreen', info: info});
  }

  render() {
    if (this.state.page === 'UserForm') {
      return (
        <div className="App">
          <div className="wrapper">
            <header className="App-header"><img src={logo} height="100%" alt="footprint logo"></img></header>
            <UserForm saveUser={this.handleSaveUser.bind(this)} />
            <div class="push"></div>
          </div>
          <h3 className="credits">Made with drops of <span>love</span> by Mary, Luke, and Samuel.</h3>
        </div>
      );
    }
    else if (this.state.page === 'MainScreen') {
      return (
        <div className="App">
          <div className="wrapper">
            <header className="App-header"><img src={logo} height="100%" alt="footprint logo"></img></header>
            <h1 className="tagline">Find out how much water goes into your food.<br />It's more than you think!</h1>
            <MainScreen analyzeImage={this.handleAnalyzeImage.bind(this)} />
            <div class="push"></div>
          </div>
          <h3 className="credits">Made with drops of <span>love</span> by Mary, Luke, and Samuel.</h3>
        </div>
      );
    }
    else if (this.state.page === 'AnalyzeImage') {
      return (
        <div className="App">
          <div className="wrapper">
            <header className="App-header"><img src={logo} height="100%" alt="footprint logo"></img></header>
            <AnalyzeImage saveInfo={this.handleSaveInfo.bind(this)} url={this.state.url} />
            <div class="push"></div>
          </div>
        </div>
      );
    }
    else if (this.state.page === 'ResultsScreen') {
      return (
        <div className="App">
          <div className="wrapper">
            <header className="App-header"><img src={logo} height="100%" alt="footprint logo"></img></header>
            <ResultsScreen tags={this.state.info} />
            <div class="push"></div>
            <div class="creditDiv">
              <h3 className="credits">Made with drops of <span>love</span> by Mary, Luke, and Samuel.</h3>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
