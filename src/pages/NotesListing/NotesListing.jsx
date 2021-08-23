import { CreateNote, MainMenu, NotesList, SideNav } from "../../components";
import "./NotesListing.css";

export const NotesListing = () => {
  return (
    <div className="notes-listing">
      <header className="page-main-menu">
        <MainMenu />
      </header>
      <div
        className="component-list"
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <SideNav />
      </div>

      <div className="component-display" style={{}}>
        <CreateNote />
        <h2>Your Notes</h2>
        <NotesList />
      </div>
    </div>
  );
};
