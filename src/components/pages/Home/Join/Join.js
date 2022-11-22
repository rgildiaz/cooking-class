import "./Join.css";

export default function Join(props) {
  return (
    <section className="join section">
      <div className="section-title">
        <h2>Join a class</h2>
      </div>
      <div className="section-content">
        <iframe
          title="Calendar"
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23fafafa&ctz=America%2FChicago&showTitle=0&showPrint=0&showCalendars=0&mode=WEEK&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%230B8043"
          width="800"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
    </section>
  );
}
