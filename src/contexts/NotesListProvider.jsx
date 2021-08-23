import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { notesListReducer } from "../reducers/notesListReducer";
import { useAuth } from "./AuthProvider";

const NotesListContext = createContext();

const notesListInitialState = {
  loading: true,
  error: "",
  notesList: [],
};

export const NotesListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notesListReducer, notesListInitialState);
  const { token } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://mitra-write.mittalminakshi.repl.co/notes",
          {
            headers: {
              authorization: token,
            },
          }
        );
        console.log("response", response);
        if (response.status === 200) {
          dispatch({
            type: "FETCH_NOTES_LIST_SUCCESS",
            payload: { notesList: response.data.notesList.notes },
          });
        }
      } catch (error) {
        dispatch({ type: "FETCH_NOTES_LIST_ERROR" });
      }
    })();
  }, [dispatch, token, state]);

  return (
    <NotesListContext.Provider value={{ state, dispatch }}>
      {children}
    </NotesListContext.Provider>
  );
};

export const useNotesList = () => {
  return useContext(NotesListContext);
};
