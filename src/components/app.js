
import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './home';
import About from './about';
import Contact from './contact';

import Analysis from './analysis';
import Advanced from './advanced';
import Biomedical from './biomedical';
import Blog from './blog';
import Economics from './economics';
import Navbar from './navbar';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
     
      
        <Router>
          <div>
            <div className="title">
                <h1>Advanced Analytics </h1>
            </div>
            <Navbar />
            <hr/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
             
              <Route path="/analysis" component={Analysis} />
              <Route path="/advanced" component={Advanced} />
              <Route path="/biomedical" component={Biomedical} />
              <Route path="/economics" component={Economics} />
              <Route path="/blog" component={Blog} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}