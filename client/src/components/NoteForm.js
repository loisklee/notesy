import React, { Component } from 'react'
import {updateNote} from '../actions/noteActions'
import { connect } from 'react-redux'
import {resetNotification} from '../actions/notificationActions'

class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.note.id,
      title: this.props.note.title,
      body: this.props.note.body
    }
  }

  handleInput = (e) => {
    this.props.resetNotification()
    this.setState({[e.target.name]: e.target.value})
  }
  
  handleBlur = () => {
    this.props.updateNote(this.state);
    this.props.resetNotification()
  }
  
  render() {
    // debugger
    //     const title = (this.props.note.title !== 0) ? this.props.note.title : this.state.title
    //     const body = (this.props.note.body!== 0) ? this.props.note.body :this.state.body
    
    return (
      
      <div className="tile">
<       form onBlur={this.handleBlur} >
          <input className='input' type="text"
            name="title" placeholder='Enter a Title' 
            value={this.state.title} onChange={this.handleInput}
            ref={this.props.titleRef} />
        
          <textarea className='input' name="body"
            placeholder='Describe your note'
            value={this.state.body} onChange={this.handleInput}>
          </textarea>
        
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
    console.log (state.notes)
    return {
      notes: state.notes
    }
  }
  export default connect ( mapStateToProps ,  {updateNote, resetNotification} ) (NoteForm)