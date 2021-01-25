import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Firebase from "./context/Firebase";
import FirebaseContext from "./context/FirebaseContext";

ReactDOM.render(
  <Router>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </Router>,
  document.getElementById("root")
);
