import { useCreateNotes } from "../../contexts";
import { useNotesActions } from "../../hooks/useNotesActions";
import { ColorPalette } from "../ColorPalette/ColorPalette";
import "./CreateNote.css";

export const CreateNote = () => {
  const { title, setTitle, content, setContent, background } = useCreateNotes();
  const { addToNotesList } = useNotesActions();

  console.log("background", background);

  const createNoteHandler = (event) => {
    event.preventDefault();
    addToNotesList(title, content, background);
    setContent("");
    setTitle("");
  };

  return (
    <div className="create-note-container">
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
      <ColorPalette />
      <i className="fas fa-archive"></i>
      {/* <i className="fas fa-tag"></i> */}
    </div>
  );
};
