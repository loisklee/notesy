// import update from 'immutability-helper'

export default function noteReducer(state = {notes: []}, action) {

  switch (action.type) {
    case 'RESET_NOTIFICATION':
      return {
        ...state,
        notification: '',
        transitionIn: false
      };
    case 'FETCH_NOTES':
      return {...state, notes: action.payload.data 
      };

    case 'ADD_NOTE':
      return {...state, notes: [...state.notes.slice(0,0), action.payload.data, ...state.notes.slice(0)], editingNoteId: action.payload.data.id, notification: '', transitionIn: false
      };

    case 'TOGGLE_NOTE':
      return {...state, editingNoteId: action.id
      };

    case 'UPDATE_NOTE':
      const currentNotes = [...state.notes];
      const noteToUpdate = currentNotes.find(x => x.id === action.payload.id);  
      noteToUpdate.title = action.payload.title;
      noteToUpdate.body = action.payload.body;
      return {
      ...state,
      notes: currentNotes,
      editingNoteId: action.payload.id,
      notification: 'saved!',
      transitionIn: true
      };
      
    case 'DELETE_NOTE':
      return {notes: state.notes.filter(note => note.id !== action.id)}

    default:
      return state;
  }
}