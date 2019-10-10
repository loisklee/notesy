import React, { Component } from 'react'

class Note extends Component {

  handleClick = () => {
    this.props.onClick(this.props.note.id)
  }

  render () {
    return(
      <div className="tile">
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

export default Note