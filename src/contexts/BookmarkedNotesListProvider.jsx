import { createContext, useContext, useReducer } from "react";
import { bookmarkedNotesListReducer } from "../reducers/bookmarkedNotesListReducer";

const BookmarkedNotesListContext = createContext();

const bookmarkedNotesListInitialState = {
  loading: true,
  error: "",
  bookmarkedNotesList: [],
};

export const BookmarkedNotesListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    bookmarkedNotesListReducer,
    bookmarkedNotesListInitialState
  );

  return (
    <BookmarkedNotesListContext.Provider value={{ state, dispatch }}>
      {children}
    </BookmarkedNotesListContext.Provider>
  );
};

export const useBookmarkedNotesList = () => {
  return useContext(BookmarkedNotesListContext);
};
