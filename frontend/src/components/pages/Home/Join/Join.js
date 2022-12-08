import Course from "./Course";
import "./Join.css";

export default function Join(props) {
  return (
    <section className="join section">
      <div className="section-title">
        <h2>Join a class</h2>
      </div>
      <div className="section-content">
        <Course />
      </div>
    </section>
  );
}
