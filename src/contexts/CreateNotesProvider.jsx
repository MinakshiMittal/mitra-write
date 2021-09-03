import { createContext, useContext, useState } from "react";

const CreateNotesContext = createContext();

export const CreateNotesProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [background, setBackground] = useState("");

  return (
    <CreateNotesContext.Provider
      value={{
        title,
        setTitle,
        content,
        setContent,
        background,
        setBackground,
      }}
    >
      {children}
    </CreateNotesContext.Provider>
  );
};

export const useCreateNotes = () => {
  return useContext(CreateNotesContext);
};
