import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="page-container padding-top">
      <div className="container contact-wrapper">
        <h2 className="page-title">Get In Touch</h2>
        <p className="contact-lead">
          I'm currently open to new opportunities, freelance projects, and
          collaborations.
        </p>

        <div className="contact-cards-row">
          <a
            href="mailto:getayawkalgirma36908@gmail.com"
            className="contact-card-box"
          >
            <div className="icon-box">
              <FaEnvelope />
            </div>
            <h3>Email</h3>
            <p>getayawkalgirma36908@gmail.com</p>
          </a>

          <a
            href="https://linkedin.com/in/getayawkalgirma"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card-box"
          >
            <div className="icon-box">
              <FaLinkedin />
            </div>
            <h3>LinkedIn</h3>
            <p>Connect with me</p>
          </a>

          <a
            href="https://github.com/GetayawkalGirma"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card-box"
          >
            <div className="icon-box">
              <FaGithub />
            </div>
            <h3>GitHub</h3>
            <p>Check out my code</p>
          </a>
        </div>

        <form className="simple-form">
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows={5} placeholder="How can I help you?"></textarea>
          </div>
          <button type="submit" className="btn btn-primary form-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
