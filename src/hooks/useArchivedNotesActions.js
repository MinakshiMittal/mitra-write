import axios from "axios";
import { useAuth, useArchivedNotesList } from "../contexts";

export const useArchivedNotesActions = () => {
  const { token } = useAuth();
  const { dispatch: archivedNotesListDispatch } = useArchivedNotesList();

  const addToArchivedNotesList = async (noteId) => {
    try {
      console.log(token);
      const response = await axios.post(
        `https://mitra-write.mittalminakshi.repl.co/notes/archived-notes/${noteId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        archivedNotesListDispatch({
          type: "ADD_TO_ARCHIVED_NOTES_LIST",
          payload: { archivedNotesList: response.data.archivedNotesList.notes },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromArchivedNotesList = async (noteId) => {
    try {
      const response = await axios.delete(
        `https://mitra-write.mittalminakshi.repl.co/notes/archived-notes/${noteId}`,
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (response.status === 200) {
        archivedNotesListDispatch({
          type: "REMOVE_FROM_ARCHIVED_NOTES_LIST",
          payload: { archivedNotesList: response.data.archivedNotesList.notes },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { addToArchivedNotesList, removeFromArchivedNotesList };
};
