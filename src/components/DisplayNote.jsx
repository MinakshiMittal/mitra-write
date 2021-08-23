import { useState } from "react";
import { useNotesActions } from "../hooks/useNotesActions";

export const DisplayNote = ({ note }) => {
  console.log(note);
  const { removeFromNotesList, editNote } = useNotesActions();

  const [inputEditState, setInputEditState] = useState(true);
  const [editedTitle, setEditedTitle] = useState();
  const [editedContent, setEditedContent] = useState();
  const [saveButtonDisplay, setSaveButtonDisplay] = useState("none");

  const editHandler = () => {
    setSaveButtonDisplay("block");
    setInputEditState(false);
  };

  return (
    <div className="create-note-container">
      <div>
        <input
          className="title-input"
          placeholder="Title"
          defaultValue={note.title}
          disabled={inputEditState}
          onChange={(event) => setEditedTitle(event.target.value)}
        />
        <textarea
          placeholder="Take a note.."
          className="content-area"
          defaultValue={note.content}
          disabled={inputEditState}
          onChange={(event) => setEditedContent(event.target.value)}
        ></textarea>
      </div>
      {/* <i className="far fa-bookmark"></i> */}
      <i className="fas fa-edit" onClick={editHandler}></i>
      <i
        className="fas fa-trash"
        onClick={() => removeFromNotesList(note._id)}
      ></i>
      <button
        className="button primary-btn note"
        style={{ display: saveButtonDisplay }}
        onClick={() => {
          editNote(editedTitle, editedContent, note._id);
          setSaveButtonDisplay("none");
          setInputEditState(true);
        }}
      >
        Save
      </button>
      {/* <button className="button primary-btn note">Save</button>
      <i className="fas fa-palette"></i>
      <i className="fas fa-archive"></i>
      <i class="fas fa-tag"></i> */}
    </div>
  );
};
