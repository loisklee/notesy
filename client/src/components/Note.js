import React, { Component } from 'react'
import { connect } from 'react-redux'
import {deleteNote, updateNote} from '../actions/noteActions'


class Note extends Component {

  handleClick = () => {
    this.props.onClick(this.props.note.id)
  }

  handleDelete = () => {
    this.props.deleteNote(this.props.note.id)
  }

  render () {
    return(
      <div className="tile">
        <span className="deleteButton" onClick={this.handleDelete}>
          x
        </span>
    
        <h4 onClick={this.handleClick}>
          {this.props.note.title}
        </h4>
      <p onClick={this.handleClick}>
        {this.props.note.body}
      </p>
    </div>
    )
  }
}

export default connect (null, {updateNote, deleteNote} ) (Note)
  
