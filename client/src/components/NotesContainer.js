import React, { Component } from 'react';
import Note from './Note'
import axios from 'axios'
import update from 'immutability-helper'



class NotesContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/notes.json')
    .then(response => {
      console.log(response)
      this.setState({notes: response.data})
    })
    .catch(error => console.log(error))
  }

  addNewNote = () => {
    axios.post(
      'http://localhost:3001/api/v1/notes',
      { note:
        {
          title: '',
          body: ''
        }
      }
    )
    .then(response => {
      console.log(response)
      // made new copy of this.state.notes 
      // and use $splice command to insert new note in response.data at the 0th index
      const notes = update(this.state.notes, {
        $splice: [[0, 0, response.data]]
      })
      // then use new notes aray to update the state with setState
      this.setState({notes: notes})
    })
    .catch(error => console.log(error))
  }
  
  render() {
    return (
      <div>
        <div>
          <button className="newNoteButton" onClick={this.addNewNote} >
            New Note
          </button>
        </div>
        {this.state.notes.map((note) => {
          return (<Note note={note} key={note.id} />)
        })}
      </div>
    )
  }
}

export default NotesContainer