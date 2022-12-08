import img from "./landing.jpeg";
import "./Landing.css";

export default function Landing(props) {
  return (
    <section className="landing section">
      <div className="landing-image container">
        <img src={img} alt="A bowl of bibimbap" />
      </div>
      <div className="landing-title container">
        <h1>Eat healthy.<br />Live well.</h1>
        <em>Learn to cook clean, authentic food with an experienced chef.</em>
      </div>
    </section>
  );
}
