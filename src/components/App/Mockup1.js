import "./App.css";
import Header from "../Header";
import Landing from "../Landing";
import Footer from "../Footer";
import About from "../About";
import Join from "../Join";
import React from "react";

export default function Mockup1(props) {
  return (
    <div className="mockup1">
      <Header />
      <Landing>
        <h1>
          Save time.
          <br />
          Save money.
          <br />
          Eat well.
        </h1>
        <p>
          <em>Learn to cook authentic meals with an experienced chef.</em>
        </p>
      </Landing>
      <About />
      <Join />
      <Footer />
    </div>
  );
}
