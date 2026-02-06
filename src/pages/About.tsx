import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBuilding,
  FaRobot,
  FaMobileAlt,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="page-container">
      {/* Hero / Intro */}
      <section className="hero small-hero">
        <div className="hero-content">
          <h1 className="hero-title">Getayawkal Girma</h1>
          <h2 className="hero-subtitle">Full-Stack & AI Software Developer</h2>
          <p className="hero-description">
            Building intelligent environments and efficient enterprise
            solutions.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/GetayawkalGirma"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/getayawkalgirma"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:getayawkalgirma36908@gmail.com"
              className="social-icon"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </section>

      {/* Main Bio Content */}
      <section className="section">
        <div className="container">
          <h3 className="section-title">Overview</h3>
          <div className="about-grid">
            <div className="highlight-card">
              <div className="card-icon">
                <FaBuilding />
              </div>
              <h4>Enterprise Systems</h4>
              <p>
                Lead developer on Ministry of Health CPMS using Frappe/ERPNext,
                delivering Primavera-style project management.
              </p>
            </div>

            <div className="highlight-card">
              <div className="card-icon">
                <FaRobot />
              </div>
              <h4>AI Tool Training</h4>
              <p>
                Built FastAPI-based "gym" environments for training LLMs to
                safely use real-world APIs like Stripe & PayPal.
              </p>
            </div>

            <div className="highlight-card">
              <div className="card-icon">
                <FaMobileAlt />
              </div>
              <h4>Mobile Engineering</h4>
              <p>
                Designed cross-platform apps with SQLite, achieving 98% parsing
                accuracy and millisecond-level responsiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section alt-bg">
        <div className="container">
          <h3 className="section-title">Experience</h3>
          <p className="section-subtitle-hint">(Hover to see details)</p>
          <div className="timeline">
            {/* Experience 1 */}
            <div className="timeline-item expandable-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">Oct 2025 – Present</span>
                <h3>Lead ERP Developer</h3>
                <h4>Habtech Solutions</h4>
                <div className="experience-tags">
                  <span>Python</span>
                  <span>JavaScript</span>
                  <span>Frappe Framework</span>
                </div>
                <p className="summary-text">
                  Leading the CPMS implementation for the Ministry of Health,
                  architecting modules for large-scale construction management.
                </p>

                <div className="expanded-details">
                  <ul>
                    <li>
                      Led the end-to-end design and implementation of a
                      Construction Project Management System (CPMS) for the
                      Ministry of Health (MOH) using the Frappe framework.
                    </li>
                    <li>
                      Architected and customized ERPNext modules to deliver a
                      Primavera-style scheduling and project control system
                      tailored for large-scale construction projects.
                    </li>
                    <li>
                      Contributed a bug fix to Frappe Insights (open-source) by
                      resolving a permission validation issue where custom
                      fields in child tables were not correctly included in
                      access checks.
                    </li>
                    <li>
                      Worked across the full stack: Python (Frappe backend),
                      REST APIs, and Frappe UI components for interactive
                      dashboards and reports.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="timeline-item expandable-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">Jan 2025 – Dec 2025</span>
                <h3>Backend Engineer / AI Contributor</h3>
                <h4>Turing (Contract)</h4>
                <div className="experience-tags">
                  <span>Python</span>
                  <span>FastAPI</span>
                </div>
                <p className="summary-text">
                  Designed safe API simulation environments for training AI
                  agents to interact with third-party tools.
                </p>

                <div className="expanded-details">
                  <ul>
                    <li>
                      Collaborated on LLM training projects focused on teaching
                      AI agents to safely and correctly use real-world developer
                      tools.
                    </li>
                    <li>
                      Designed and implemented FastAPI-based backend services
                      that simulate real APIs (Stripe, Google Drive, PayPal)
                      inside controlled training environments.
                    </li>
                    <li>
                      Built multi-API “gym” environments that allow AI agents to
                      practice tool usage with realistic request/response flows
                      and failure scenarios.
                    </li>
                    <li>
                      Implemented strict validation, permissions, and safety
                      constraints to prevent destructive actions during agent
                      training.
                    </li>
                    <li>
                      Modeled APIs using Pydantic schemas to enforce structured
                      inputs, outputs, and error handling.
                    </li>
                    <li>
                      Created task-oriented endpoints that mirror real developer
                      workflows such as payments, file management, and account
                      operations.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="timeline-item expandable-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">Feb 2025 – Aug 2025</span>
                <h3>Full-Stack Developer</h3>
                <h4>Addis Ababa University</h4>
                <div className="experience-tags">
                  <span>C#</span>
                  <span>TypeScript</span>
                  <span>.NET</span>
                  <span>Angular</span>
                </div>
                <p className="summary-text">
                  Optimized module performance by 30% and refactored monolithic
                  legacy code into modular services.
                </p>

                <div className="expanded-details">
                  <ul>
                    <li>
                      Developed and deployed full-stack features across five
                      IMIS modules (Research, Workflow, Notice, Memo,
                      Delegation) Management Systems for foreign affairs using
                      Angular and .NET Framework.
                    </li>
                    <li>
                      Designed and optimized analytics dashboards with SQL
                      star-schema queries, enabling accurate KPIs and
                      performance metrics through Slowly Changing Dimensions.
                    </li>
                    <li>
                      Implemented server-side pagination for 100+ records,
                      reducing load time by 45% and improving UI responsiveness.
                    </li>
                    <li>
                      Refactored monolithic backend into modular services for
                      maintainability and scalability.
                    </li>
                    <li>
                      Enhanced Angular state management with RxJS and
                      Observables, achieving real-time UI synchronization across
                      modules.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience 4 */}
            <div className="timeline-item expandable-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">Sep 2024 – Jan 2025</span>
                <h3>Intern (.NET, Angular)</h3>
                <h4>Addis Ababa University</h4>
                <div className="experience-tags">
                  <span>C#</span>
                  <span>TypeScript</span>
                  <span>.NET</span>
                  <span>Angular</span>
                </div>
                <p className="summary-text">
                  Adapted to large-scale codebases and built notification
                  modules.
                </p>

                <div className="expanded-details">
                  <ul>
                    <li>
                      Adapted to large-scale Angular + .NET codebases, resolving
                      20+ integration bugs and optimizing API endpoints.
                    </li>
                    <li>
                      Contributed to multilingual support (English/Amharic) by
                      implementing i18n translation features.
                    </li>
                    <li>
                      Built notification and delegation modules to streamline
                      approval workflows across departments.
                    </li>
                    <li>
                      Generated PDF reports via QuestPDF, converting
                      unstructured data into reliable formatted documents.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <div className="container">
          <h3 className="section-title">Technical Skills</h3>
          <div className="skills-simple-grid">
            <div className="skill-group">
              <h4>Languages</h4>
              <div className="tags">
                <span>Python</span>
                <span>TypeScript</span>
                <span>JavaScript</span>
                <span>C#</span>
                <span>SQL</span>
              </div>
            </div>
            <div className="skill-group">
              <h4>Stack</h4>
              <div className="tags">
                <span>React</span>
                <span>React Native</span>
                <span>FastAPI</span>
                <span>Angular</span>
                <span>.NET</span>
              </div>
            </div>
            <div className="skill-group">
              <h4>Tools & DB</h4>
              <div className="tags">
                <span>Docker</span>
                <span>Git</span>
                <span>SQLite</span>
                <span>PostgreSQL</span>
                <span>Frappe</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
