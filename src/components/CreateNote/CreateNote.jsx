import "./CreateNote.css";

export const CreateNote = () => {
  return (
    <div className="create-note-container">
      <div>
        <input className="title-input" placeholder="Title" />
        <textarea
          placeholder="Take a note.."
          className="content-area"
        ></textarea>
      </div>
      <i className="far fa-bookmark"></i>
      <button className="button primary-btn note">Save</button>
      <i className="fas fa-palette"></i>
      <i className="fas fa-archive"></i>
      <i class="fas fa-tag"></i>
    </div>
  );
};
