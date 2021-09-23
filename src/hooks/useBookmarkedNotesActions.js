import axios from "axios";
import { useAuth, useBookmarkedNotesList } from "../contexts";

export const useBookmarkedNotesActions = () => {
  const { token } = useAuth();
  const { dispatch: bookmarkedNotesListDispatch } = useBookmarkedNotesList();

  const addToBookmarkedNotesList = async (noteId) => {
    try {
      console.log(token);
      const response = await axios.post(
        `https://mitra-write.mittalminakshi.repl.co/notes/bookmarked-notes/${noteId}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        bookmarkedNotesListDispatch({
          type: "ADD_TO_BOOKMARKED_NOTES_LIST",
          payload: { bookmarkedNotesList: response.data.bookmarkedNotesList.notes },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromBookmarkedNotesList = async (noteId) => {
    try {
      const response = await axios.delete(
        `https://mitra-write.mittalminakshi.repl.co/notes/bookmarked-notes/${noteId}`,
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (response.status === 200) {
        bookmarkedNotesListDispatch({
          type: "REMOVE_FROM_BOOKMARKED_NOTES_LIST",
          payload: { bookmarkedNotesList: response.data.bookmarkedNotesList.notes },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { addToBookmarkedNotesList, removeFromBookmarkedNotesList };
};
