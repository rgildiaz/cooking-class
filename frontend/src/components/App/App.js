import React from "react";
import Route from "./Route";
import Header from "./Header";
import Footer from "./Footer";

import Home from "../pages/Home";
import Join from "../pages/Join";
import Recipes from "../pages/Recipes";
import Contact from "../pages/Contact";

import "./App.css";

function App(props) {
  return (
    <div className="App">
      <Header />
      <main>
        {/* Render pages based on path */}
        <Route path="/">
          <Home />
        </Route>
        <Route path="">
          <Home />
        </Route>
        <Route path="/recipes/">
          <Recipes />
        </Route>
        <Route path="/sign-up/">
          <Join />
        </Route>
        <Route path="/contact/">
          <Contact />
        </Route>
      </main>
      <Footer />
    </div>
  );
}

export default App;
