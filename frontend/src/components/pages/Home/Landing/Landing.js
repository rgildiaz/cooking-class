import img from "./landing.jpeg";
import "./Landing.css";

export default function Landing(props) {
  return (
    <section className="landing section">
      <div className="landing-image container">
        <img src={img} alt="" />
      </div>
      <div className="landing-title container">
        <h1>This is the title</h1>
        <em>This is a very long and interesting quote that says something profound or meaningful.</em>
      </div>
    </section>
  );
}
