import EmailForm from "./EmailForm";
import "./Contact.css";

const Contact = (props) => {
  return (
    <div id="contact" className="page">
      <h1>Get in contact</h1>
      <div className="content">
        <div className="info">
          <div className="location">
            <h3>Office 1</h3>
            <div className="address">
              <p>1234 Place Rd</p>
              <p>City, ST 12345</p>
              <p>8am-5pm</p>
            </div>
            <p>(123) 456-7890</p>
            <p>example@email.com</p>
          </div>
          <div className="location">
            <h3>Office 2</h3>
            <div className="address">
              <p>1234 Place Rd</p>
              <p>City, ST 12345</p>
              <p>8am-5pm</p>
            </div>
            <p>(123) 456-7890</p>
            <p>example@email.com</p>
          </div>
        </div>
        <EmailForm />
      </div>
    </div>
  );
};

export default Contact;
