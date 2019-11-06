// import { ADD_NOTE, DELETE_NOTE, FETCH_NOTE } from './types';
import axios from 'axios';
// import uuid from 'uuid';

export const fetchNotes = () => {
  return (dispatch) => {
    return axios.get('http://localhost:3001/api/v1/notes')
      .then(response => {
        dispatch( {type: 'FETCH_NOTES', payload: response})
      })
      .catch(error => {
        throw(error);
      });
  };
}


export const addNewNote = () => (dispatch) => {
    return axios.post(`http://localhost:3001/api/v1/notes/`,{ note:{ title: '', body: ''}})
    .then(response => {
        dispatch( {type: 'ADD_NOTE', payload: response})
      })
      .catch(error => {
        throw(error);
      });
};

export const toggleNote = (id) => ({
  type: 'TOGGLE_NOTE',
  id
})

export const updateNote = (note) => (dispatch) => {
    return axios.put(`http://localhost:3001/api/v1/notes/${note.id}`, {note})
    
    .then( (response) => {
      dispatch({type: 'UPDATE_NOTE', payload: response.data});

    })
      .catch(error => {
        throw(error);
      })
};


export const deleteNote = (id) => {
  // debugger
  return (dispatch) => {
    return axios.delete(`http://localhost:3001/api/v1/notes/${id}`)
    .then( (response) => {
      dispatch({type: 'DELETE_NOTE', id});
    })
      .catch(error => {
        throw(error);
      })
  };
};