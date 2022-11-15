import "./App.css";
import Header from "../Header";
import Landing from "../Landing";

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
    </div>
  );
}

export default App;
