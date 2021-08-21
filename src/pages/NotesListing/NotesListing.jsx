import { CreateNote, MainMenu, SideNav } from "../../components";
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
      </div>
    </div>
  );
};
