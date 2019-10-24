import React, { Component } from 'react';
import Note from './Note'
import NoteForm from './NoteForm'
import Notification from './Notification'
// import axios from 'axios'
// import update from 'immutability-helper'
import { connect } from 'react-redux'
import {fetchNotes, addNewNote, deleteNote, updateNote, toggleNote} from '../actions/noteActions'



class NotesContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // notes: [],
      // editingNoteId: null, // keeps track of which note is being currently edited 
      notification: '',
      transitionIn: false
    }
  }

  componentDidMount() {
    this.props.fetchNotes(this.state)
  }

  resetNotification = () => {
    this.setState({notification: '', transitionIn: false})
  }
  
  
  render() {
    return (
      <div>
        <div>
          <button className="newNoteButton" onClick={this.props.addNewNote} >
            New Note
          </button>
          <Notification in={this.state.transitionIn} notification = {this.state.notification} />
        </div>
        {this.props.notes.notes.map((note) => {
          if(this.props.notes.editingNoteId === note.id) {
            return(
            <NoteForm note={note} key={note.id}
              updateNote = {this.props.updateNote} // prop from notescontainer to noteform
              titleRef= {input => this.title = input}
              resetNotification={this.resetNotification}/>) 
          } else 
          {
            return (
            <Note note={note} key={note.id} 
            onClick={this.props.toggleNote}
            onDelete={this.props.deleteNote} />)
          }
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    console.log (state.notes)
    return {
      notes: state.notes
    }
  }
  export default connect ( mapStateToProps , {toggleNote, fetchNotes, addNewNote, deleteNote,updateNote} ) (NotesContainer)
  