import "./App.css";
import Header from "../Header";
import Landing from "../Landing";
import Footer from "../Footer";
import Experience from "../Experience/Experience";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing>
        <h1>Big Quote Here</h1>
        <p>
          <em>small quote here</em>
        </p>
      </Landing>
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
