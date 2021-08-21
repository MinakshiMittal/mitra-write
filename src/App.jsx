import "./App.css";
import { Routes, Route } from "react-router-dom";
import { RouteNotFound, Login, SignUp, NotesListing } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<RouteNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/" element={<NotesListing />} />
      </Routes>
    </div>
  );
}

export default App;
