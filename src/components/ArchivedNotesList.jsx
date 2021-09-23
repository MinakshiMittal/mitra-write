import { useArchivedNotesList } from "../contexts";
import { ArchivedNoteDisplay } from "../components";

export const ArchivedNotesList = () => {
  const {
    state: { archivedNotesList },
  } = useArchivedNotesList();
  return (
    <>
      {archivedNotesList.map((note) => {
        return <ArchivedNoteDisplay note={note.note} key={note._id} />;
      })}
    </>
  );
};
