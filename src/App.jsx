import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  RouteNotFound,
  Login,
  SignUp,
  NotesListing,
  ArchivedNotesListing,
} from "./pages";
import { useDataLoading } from "./hooks/useDataLoading";

function App() {
  useDataLoading();
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<RouteNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/" element={<NotesListing />} />
        <Route path="/archived-notes" element={<ArchivedNotesListing />} />
      </Routes>
    </div>
  );
}

export default App;
