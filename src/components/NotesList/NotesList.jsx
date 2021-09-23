import { useNotesList } from "../../contexts";
import { DisplayNote } from "../../components";

export const NotesList = () => {
  const {
    state: { notesList },
  } = useNotesList();
  return (
    <>
      {notesList?.map((note) => {
        return <DisplayNote note={note?.note} key={note?._id} />;
      })}
    </>
  );
};
