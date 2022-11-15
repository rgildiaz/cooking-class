import "./App.css";
import Header from "../Header";
import Landing from "../Landing";
import Footer from "../Footer";
import About from "../About";
import Join from "../Join";

// TODO
// Mobile horizontal css
// Hamburger menu animation
// Hamburger menu functionality
// Join section
// Footer

function App() {
  return (
    <div className="App">
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

export default App;
