import { useArchivedNotesList } from "../contexts";
import { DisplayNote } from "../components";

export const ArchivedNotesList = () => {
  const {
    state: { archivedNotesList },
  } = useArchivedNotesList();
  return (
    <>
      {archivedNotesList.map((note) => {
        return <DisplayNote note={note.note} key={note._id} />;
      })}
    </>
  );
};
