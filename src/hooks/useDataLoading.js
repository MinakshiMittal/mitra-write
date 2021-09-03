import { useAuth, useNotesList, useArchivedNotesList } from "../contexts";
import { useEffect } from "react";
import axios from "axios";

export const useDataLoading = () => {
  const { token } = useAuth();
  const { state: notesListState, dispatch: notesListDispatch } = useNotesList();
  const { state: archivedNotesListState, dispatch: archivedNotesListDispatch } =
    useArchivedNotesList();

  useEffect(() => {
    (async () => {
      if (token) {
        try {
          const response = await axios.get(
            "https://mitra-write.mittalminakshi.repl.co/notes",
            {
              headers: {
                authorization: token,
              },
            }
          );
          if (response.status === 200) {
            notesListDispatch({
              type: "FETCH_NOTES_LIST_SUCCESS",
              payload: { notesList: response.data.notesList.notes },
            });
          }
        } catch (error) {
          notesListDispatch({ type: "FETCH_NOTES_LIST_ERROR" });
        }
      }
    })();
  }, [notesListDispatch, token, notesListState]);

  useEffect(() => {
    (async () => {
      if (token) {
        try {
          const response = await axios.get(
            "https://mitra-write.mittalminakshi.repl.co/notes/archived-notes",
            {
              headers: {
                authorization: token,
              },
            }
          );
          if (response.status === 200) {
            archivedNotesListDispatch({
              type: "FETCH_ARCHIVED_NOTES_LIST_SUCCESS",
              payload: {
                archivedNotesList: response.data.archivedNotesList.notes,
              },
            });
          }
        } catch (error) {
          archivedNotesListDispatch({
            type: "FETCH_ARCHIVED_NOTES_LIST_ERROR",
          });
        }
      }
    })();
  }, [archivedNotesListDispatch, token, archivedNotesListState]);
};
