import React, { Component } from 'react'

export default class SearchField extends Component {
    state = {
        query: ""
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateInput(this.state.query)
    }
    
    onChangeHandler = event => {
        this.setState({query: event.target.value})
    }

    render() {

        return (
                <form onSubmit={this.handleSubmit}>
                        <label htmlFor="query">Enter a Search Term:</label>
                        <br/>
                        <input type="text" value={this.state.query} onChange={this.onChangeHandler}/>
                        <br/>
                    <input className="btn btn-primary" type="submit" value="Search"/>
                    <br/>
                    <br/>
                </form>
                
        )
    }
}