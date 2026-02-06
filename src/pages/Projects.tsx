import {
  FaExternalLinkAlt,
  FaGamepad,
  FaMobile,
  FaBuilding,
} from "react-icons/fa";

const Projects = () => {
  return (
    <div className="page-container padding-top">
      <div className="container">
        <h2 className="page-title">Featured Projects</h2>

        <div className="projects-vertical-list">
          {/* Project 1: Impostor */}
          <div className="clean-project-card">
            <div className="project-icon-wrapper">
              <FaGamepad className="project-main-icon" />
            </div>
            <div className="project-details">
              <div className="project-header-row">
                <h3>Impostor</h3>
                <span className="badge">Mobile Game</span>
              </div>
              <p className="project-bio">
                A social deduction game featuring a hybrid architecture. While
                playable offline, it intelligently fetches and syncs word packs
                from an Appwrite database to ensure fresh content.
              </p>
              <div className="tech-stack-row">
                <span>React Native</span>
                <span>Appwrite</span>
                <span>SQLite</span>
                <span>Python</span>
              </div>
              <div className="project-links disabled-links-placeholder">
                {/* Add links if available */}
              </div>
            </div>
          </div>

          {/* Project 2: Mezgeb */}
          <div className="clean-project-card">
            <div className="project-icon-wrapper">
              <FaMobile className="project-main-icon" />
            </div>
            <div className="project-details">
              <div className="project-header-row">
                <h3>Mezgeb</h3>
                <span className="badge">Finance Utility</span>
              </div>
              <p className="project-bio">
                Offline receipt manager that parses SMS, PDF, and XML bank
                receipts with 98% accuracy. Saves millions of server requests by
                processing data locally.
              </p>
              <div className="tech-stack-row">
                <span>Ionic</span>
                <span>Angular</span>
                <span>Regex</span>
                <span>SQLite</span>
              </div>
              <div className="project-links">
                <a
                  href="https://youtu.be/AKWvGY56u2U"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-btn"
                >
                  Watch Demo <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>

          {/* Project 3: MOH CPMS */}
          <div className="clean-project-card">
            <div className="project-icon-wrapper">
              <FaBuilding className="project-main-icon" />
            </div>
            <div className="project-details">
              <div className="project-header-row">
                <h3>MOH CPMS</h3>
                <span className="badge">Enterprise ERP</span>
              </div>
              <p className="project-bio">
                A large-scale Construction Project Management System for the
                Ministry of Health. Features Primavera-style scheduling and
                complex project control modules.
              </p>
              <div className="tech-stack-row">
                <span>Frappe</span>
                <span>ERPNext</span>
                <span>Python</span>
                <span>JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
