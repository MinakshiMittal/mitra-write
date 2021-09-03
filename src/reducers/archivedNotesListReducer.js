export const archivedNotesListReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_ARCHIVED_NOTES_LIST_SUCCESS":
      return {
        ...state,
        archivedNotesList: [...action.payload.archivedNotesList],
      };

    case "FETCH_ARCHIVED_NOTES_LIST_ERROR":
      return {
        ...state,
        error: "Something went wrong",
      };

    case "ADD_TO_ARCHIVED_NOTES_LIST":
      return {
        ...state,
        archivedNotesList: [...action.payload.archivedNotesList],
      };

    case "REMOVE_FROM_ARCHIVED_NOTES_LIST":
      return {
        ...state,
        archivedNotesList: [...action.payload.archivedNotesList],
      };

    default:
      return state;
  }
};
