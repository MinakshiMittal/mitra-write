import { useCreateNotes } from "../../contexts";
import "./ColorPalette.css";

export const ColorPalette = () => {
  const { setBackground } = useCreateNotes();
  return (
    <div className="palette-container">
      <div
        className="cbf0f8-color"
        onClick={() => setBackground("#cbf0fb")}
      ></div>
      <div
        className="fdcfe8-color"
        onClick={() => setBackground("#fdcfe8")}
      ></div>
      <div
        className="f28b82-color"
        onClick={() => setBackground("#f28b82")}
      ></div>
      <div
        className="d7aefb-color"
        onClick={() => setBackground("#d7aefb")}
      ></div>
      <div
        className="ccff90-color"
        onClick={() => setBackground("#ccff90")}
      ></div>
    </div>
  );
};
