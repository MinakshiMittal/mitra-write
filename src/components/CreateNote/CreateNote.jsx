import { useState } from "react";
import { useNotesActions } from "../../hooks/useNotesActions";
import { ColorPalette } from "../ColorPalette/ColorPalette";
import "./CreateNote.css";

export const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [background, setBackground] = useState("");
  const { addToNotesList } = useNotesActions();

  const createNoteHandler = (event) => {
    event.preventDefault();
    addToNotesList(title, content, background);
    setContent("");
    setTitle("");
    setBackground("");
  };

  return (
    <div className="create-note-container" style={{ background }}>
      <form>
        <div>
          <input
            className="title-input"
            placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <textarea
            placeholder="Take a note.."
            className="content-area"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          ></textarea>
        </div>
        {/* <i className="far fa-bookmark"></i> */}
        <button className="button primary-btn note" onClick={createNoteHandler}>
          Save
        </button>
      </form>
      <i className="fas fa-palette"></i>
      <ColorPalette setBackground={setBackground} />
      <i className="fas fa-archive"></i>
      {/* <i className="fas fa-tag"></i> */}
    </div>
  );
};
