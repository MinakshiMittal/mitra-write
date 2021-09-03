export const notesListReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_NOTES_LIST_SUCCESS":
      return {
        ...state,
        notesList: [...action.payload.notesList],
      };

    case "FETCH_NOTES_LIST_ERROR":
      return {
        ...state,
        error: "Something went wrong",
      };

    case "ADD_TO_NOTES_LIST":
      return {
        ...state,
        notesList: [...action.payload.notesList],
      };

    case "REMOVE_FROM_NOTES_LIST":
      return { ...state, notesList: [...action.payload.notesList] };

    case "EDIT_NOTE":
      return {
        ...state,
        notesList: state.notesList.map((note) => {
          if (note.note._id === action.payload.note._id) {
            return { ...note, note: action.payload.note };
          }
          return note;
        }),
      };

    default:
      return state;
  }
};
