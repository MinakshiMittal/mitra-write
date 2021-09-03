import { createContext, useContext, useReducer } from "react";
import { notesListReducer } from "../reducers/notesListReducer";

const NotesListContext = createContext();

const notesListInitialState = {
  loading: true,
  error: "",
  notesList: [],
};

export const NotesListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notesListReducer, notesListInitialState);

  return (
    <NotesListContext.Provider value={{ state, dispatch }}>
      {children}
    </NotesListContext.Provider>
  );
};

export const useNotesList = () => {
  return useContext(NotesListContext);
};
