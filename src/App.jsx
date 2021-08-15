import "./App.css";
import { Routes, Route } from "react-router-dom";
import { RouteNotFound, Login } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<RouteNotFound />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
