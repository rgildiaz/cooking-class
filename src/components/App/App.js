import "./App.css";
import Header from "../Header";
import Landing from "../Landing";
import Footer from "../Footer";

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
      <Footer />
    </div>
  );
}

export default App;
