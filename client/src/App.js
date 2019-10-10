import React from 'react';
import './App.css';
import NotesContainer from './components/NotesContainer'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Notesy</h1>
          <h5>a light, quick note app</h5>
        </div>
        <NotesContainer />
      </div>
    );
  }
}

export default App;
