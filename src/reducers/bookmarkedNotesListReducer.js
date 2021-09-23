export const bookmarkedNotesListReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_BOOKMARKED_NOTES_LIST_SUCCESS":
      return {
        ...state,
        bookmarkedNotesList: [...action.payload.bookmarkedNotesList],
      };

    case "FETCH_BOOKMARKED_NOTES_LIST_ERROR":
      return {
        ...state,
        error: "Something went wrong",
      };

    case "ADD_TO_BOOKMARKED_NOTES_LIST":
      return {
        ...state,
        bookmarkedNotesList: [...action.payload.bookmarkedNotesList],
      };

    case "REMOVE_FROM_BOOKMARKED_NOTES_LIST":
      return {
        ...state,
        bookmarkedNotesList: [...action.payload.bookmarkedNotesList],
      };

    default:
      return state;
  }
};
