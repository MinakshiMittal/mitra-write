import { MainMenu, ArchivedNotesList, SideNav } from "../components";

export const ArchivedNotesListing = () => {
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
        <h2>Archived Notes</h2>
        <ArchivedNotesList />
      </div>
    </div>
  );
};
