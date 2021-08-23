import { useState } from "react";
import { useNotesActions } from "../../hooks/useNotesActions";
import "./CreateNote.css";

export const CreateNote = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const { addToNotesList } = useNotesActions();

  return (
    <div className="create-note-container">
      <div>
        <input
          className="title-input"
          placeholder="Title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          placeholder="Take a note.."
          className="content-area"
          onChange={(event) => setContent(event.target.value)}
        ></textarea>
      </div>
      <i className="far fa-bookmark"></i>
      <button
        className="button primary-btn note"
        onClick={() => addToNotesList(title, content)}
      >
        Save
      </button>
      <i className="fas fa-palette"></i>
      <i className="fas fa-archive"></i>
      <i className="fas fa-tag"></i>
    </div>
  );
};
