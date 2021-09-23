import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import {
  AuthProvider,
  LoaderProvider,
  NotesListProvider,
  ArchivedNotesListProvider,
  BookmarkedNotesListProvider,
} from "./contexts";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LoaderProvider>
        <AuthProvider>
          <NotesListProvider>
            <ArchivedNotesListProvider>
              <BookmarkedNotesListProvider>
                <App />
              </BookmarkedNotesListProvider>
            </ArchivedNotesListProvider>
          </NotesListProvider>
        </AuthProvider>
      </LoaderProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
