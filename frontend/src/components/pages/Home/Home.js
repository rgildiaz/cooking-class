import "./Home.css";

import Landing from "./Landing";
// import Recipes from "./Recipes";
import Experience from "./Experience";
import Join from "./Join";

const Home = (props) => {
  return (
    <div id="home" className="page">
      <Landing />
      {/* <Recipes /> */}
      <Experience />
      <Join />
    </div>
  );
};

export default Home;
