import { createContext, useContext, useReducer } from "react";
import { archivedNotesListReducer } from "../reducers/archivedNotesListReducer";

const ArchivedNotesListContext = createContext();

const archivedNotesListInitialState = {
  loading: true,
  error: "",
  archivedNotesList: [],
};

export const ArchivedNotesListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    archivedNotesListReducer,
    archivedNotesListInitialState
  );

  return (
    <ArchivedNotesListContext.Provider value={{ state, dispatch }}>
      {children}
    </ArchivedNotesListContext.Provider>
  );
};

export const useArchivedNotesList = () => {
  return useContext(ArchivedNotesListContext);
};
