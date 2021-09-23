import { useState } from "react";
import { useNotesActions } from "../../hooks/useNotesActions";
import { useArchivedNotesActions } from "../../hooks/useArchivedNotesActions";
import { ColorPalette } from "..";
import "./ArchivedNoteDisplay.css";

export const ArchivedNoteDisplay = ({ note }) => {
  const { editNote } = useNotesActions();
  const { removeFromArchivedNotesList } = useArchivedNotesActions();

  const [inputEditState, setInputEditState] = useState(true);
  const [editedTitle, setEditedTitle] = useState();
  const [editedContent, setEditedContent] = useState();
  const [editedBackground, setEditedBackground] = useState(note?.background);
  const [saveButtonDisplay, setSaveButtonDisplay] = useState("none");

  const editHandler = () => {
    setSaveButtonDisplay("block");
    setInputEditState(false);
  };

  return (
    <div
      className="create-note-container display"
      style={{ background: editedBackground }}
    >
      <div>
        <input
          className="title-input"
          placeholder="Title"
          defaultValue={note?.title}
          disabled={inputEditState}
          onChange={(event) => setEditedTitle(event.target.value)}
        />
        <textarea
          placeholder="Take a note.."
          className="content-area"
          defaultValue={note?.content}
          disabled={inputEditState}
          onChange={(event) => setEditedContent(event.target.value)}
        ></textarea>
        <ColorPalette setBackground={setEditedBackground} />
      </div>
      {/* <i className="far fa-bookmark"></i> */}
      <i className="fas fa-edit" onClick={editHandler}></i>
      <i
        className="fas fa-trash"
        onClick={() => removeFromArchivedNotesList(note?._id)}
      ></i>
      <button
        className="button primary-btn note"
        style={{ display: saveButtonDisplay }}
        onClick={() => {
          editNote(editedTitle, editedContent, editedBackground, note?._id);
          setSaveButtonDisplay("none");
          setInputEditState(true);
        }}
      >
        Save
      </button>
      <i className="fas fa-palette"></i>
      {/* <i
        className="fas fa-archive"
        onClick={() => addToArchivedNotesList(note?._id)}
      ></i> */}
      {/* <i className="fas fa-tag"></i> */}
    </div>
  );
};
