import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About'
import NotesContainer from './NotesContainer'
import Further from './Further'


export default function Header () {
  return (
    <Router>


      <div>
        <div className="App-header">
          
          <h1>Notesy</h1>
          <h5>a light, quick note app</h5>
            <Link to="/">Home</Link>  &nbsp; 
            <Link to="/about">About</Link>  &nbsp; 
            <Link to="/further">Further Dev</Link> &nbsp; 


          
        </div>
      </div>

      <Switch>
          <Route exact path="/" component={NotesContainer}/>
          <Route path="/about" component={About}/>
          <Route path="/further" component={Further}/>
      </Switch>
    </Router>
  );
}
