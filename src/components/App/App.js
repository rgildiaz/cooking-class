import React from "react";
import Route from "../Route";
import Header from "../Header";
import Home from "../Home";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <Header />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/recipes/">
        null
      </Route>
      <Route path="/sign-up/">
        null
      </Route>
      <Route path="/contact/">
        null
      </Route>
    </div>
  );
}

export default App;
