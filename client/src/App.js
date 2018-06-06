import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ColorPicker from './pages/ColorPicker';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

import './App.css';

class App extends Component {
  render() {
    return (
       <Router>
      <div className="App">
        <header className="App-header">
        
          <h1 className="App-title">Color Picker Example</h1>
        </header>        
           <Switch>
             <div>
                <Route exact path="/" component={ColorPicker} />
                <Route exact path="/colorpicker" component={ColorPicker} />
                 
                
              </div>
            </Switch>
      </div>
      </Router>
     
    );
  }
}

export default App;
