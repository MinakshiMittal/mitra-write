import axios from "axios";
import { useAuth, useNotesList } from "../contexts";

export const useNotesActions = () => {
  const { token } = useAuth();
  const { dispatch: notesListDispatch } = useNotesList();

  const addToNotesList = async (title, content, background) => {
    try {
      const response = await axios.post(
        `https://mitra-write.mittalminakshi.repl.co/notes`,
        {
          title,
          content,
          background,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      console.log("add", response);

      if (response.status === 200) {
        notesListDispatch({
          type: "ADD_TO_NOTES_LIST",
          payload: { notesList: response.data.notesList.notes },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromNotesList = async (noteId) => {
    try {
      const response = await axios.delete(
        `https://mitra-write.mittalminakshi.repl.co/notes/${noteId}`,
        {
          headers: {
            authorization: token,
          },
        }
      );

      console.log("remove", response);

      if (response.status === 200) {
        notesListDispatch({
          type: "REMOVE_FROM_NOTES_LIST",
          payload: { notesList: response.data.notesList.notes },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const editNote = async (title, content, background, noteId) => {
    try {
      const response = await axios.post(
        `https://mitra-write.mittalminakshi.repl.co/notes/${noteId}`,
        {
          title,
          content,
          background,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      console.log(response);

      if (response.status === 200) {
        notesListDispatch({
          type: "EDIT_NOTE",
          payload: { note: response.data.note },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const addToArchiveNotes = async (noteId) => {
  //   try {
  //     const response = await axios.post(
  //       `https://mitra-write.mittalminakshi.repl.co/notes/archived-notes/${noteId}`,
  //       {
  //         headers: {
  //           authorization: token,
  //         },
  //       }
  //     );

  //     if(response.status === 200) {

  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return { addToNotesList, removeFromNotesList, editNote };
};
