import React, { Component } from 'react';
import Note from './Note'
import NoteForm from './NoteForm'
import Notification from './Notification'
// import axios from 'axios'
// import update from 'immutability-helper'
import { connect } from 'react-redux'
import {fetchNotes, addNewNote, deleteNote, updateNote, toggleNote} from '../actions/noteActions'
import {resetNotification} from '../actions/notificationActions'
import SearchField from './SearchField'



class NotesContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      input: '',

    }
  }

  componentDidMount() {
    this.props.fetchNotes()
  }
  
  updateInput(input){
    this.setState({
      input
    })
  }

  render() {
    const newArray = this.props.notes.notes.filter(item => item.title.includes(this.state.input))
    
    return (
      <div>
        
        <div>
          <button className="newNoteButton" onClick={this.props.addNewNote} >
            New Note
          </button>

          <Notification in={this.props.notes.transitionIn} notification = {this.props.notes.notification} />
          
          <SearchField
            placeholder="Search item"
            updateInput={(q) => this.updateInput(q)}
          />

        </div>
        
        {newArray.map((note) => {

          if(this.props.notes.editingNoteId === note.id) {
            return(
            <NoteForm note={note} key={note.id}
              updateNote = {this.props.updateNote} // prop from notescontainer to noteform
              titleRef= {input => this.title = input}
              resetNotification={this.props.resetNotification}/>) 
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
      notes: state.notes,
      notification: state.notification,
      transitionIn: state.transitionIn
    }
  }
  export default connect ( mapStateToProps , {resetNotification, toggleNote, fetchNotes, addNewNote, deleteNote,updateNote} ) (NotesContainer)
  