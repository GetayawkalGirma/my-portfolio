import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light",
    );
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience",
        "projects",
        "skills",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">GG</div>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <li>
              <a
                onClick={() => scrollToSection("home")}
                className={activeSection === "home" ? "active-link" : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("about")}
                className={activeSection === "about" ? "active-link" : ""}
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("experience")}
                className={activeSection === "experience" ? "active-link" : ""}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("projects")}
                className={activeSection === "projects" ? "active-link" : ""}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("skills")}
                className={activeSection === "skills" ? "active-link" : ""}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("contact")}
                className={activeSection === "contact" ? "active-link" : ""}
              >
                Contact
              </a>
            </li>
          </ul>

          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Getayawkal Girma</h1>
          <h2 className="hero-subtitle">Full-Stack & AI Software Developer</h2>
          <p className="hero-description">
            Building offline-first mobile systems, intelligent AI environments,
            and efficient enterprise solutions
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </button>
          </div>
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
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="highlight-text">
                I'm a versatile full-stack developer with a unique blend of
                expertise in <strong>offline-first mobile systems</strong>,{" "}
                <strong>AI/LLM training environments</strong>, and{" "}
                <strong>enterprise ERP solutions</strong>.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">🏗️</div>
                  <div>
                    <h4>ERP & Enterprise Systems</h4>
                    <p>
                      Lead developer on Ministry of Health CPMS using
                      Frappe/ERPNext, delivering Primavera-style project
                      management
                    </p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🤖</div>
                  <div>
                    <h4>AI Tool Training</h4>
                    <p>
                      Built FastAPI-based "gym" environments for training LLMs
                      to safely use real-world APIs (Stripe, PayPal, Google
                      Drive)
                    </p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">📱</div>
                  <div>
                    <h4>Offline-First Mobile Apps</h4>
                    <p>
                      Designed cross-platform apps with SQLite, achieving 98%
                      parsing accuracy and millisecond-level performance
                    </p>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">Oct 2025 – Present</span>
                <h3>Lead ERP Developer</h3>
                <h4>Habtech Solutions</h4>
                <ul>
                  <li>
                    Led end-to-end design of Construction Project Management
                    System (CPMS) for Ministry of Health using Frappe
                  </li>
                  <li>
                    Architected Primavera-style scheduling system for
                    large-scale construction projects
                  </li>
                  <li>
                    Contributed open-source bug fix to Frappe Insights improving
                    analytics reliability
                  </li>
                </ul>
                <div className="tech-tags">
                  <span>Python</span>
                  <span>Frappe</span>
                  <span>ERPNext</span>
                  <span>REST APIs</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">Jan 2025 – Dec 2025</span>
                <h3>Backend Engineer / AI Tooling Contributor</h3>
                <h4>Turing (Contract)</h4>
                <ul>
                  <li>
                    Built FastAPI services simulating real APIs (Stripe, Google
                    Drive, PayPal) for LLM training
                  </li>
                  <li>
                    Created multi-API "gym" environments with realistic
                    request/response flows and failure scenarios
                  </li>
                  <li>
                    Implemented strict validation and safety constraints to
                    prevent destructive actions during training
                  </li>
                </ul>
                <div className="tech-tags">
                  <span>FastAPI</span>
                  <span>Python</span>
                  <span>Pydantic</span>
                  <span>LLM Training</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">Feb 2025 – Aug 2025</span>
                <h3>Full-Stack Developer</h3>
                <h4>Addis Ababa University</h4>
                <ul>
                  <li>
                    Developed features across 5 IMIS modules, improving task
                    completion time by 30%
                  </li>
                  <li>
                    Designed analytics dashboards with SQL star-schema queries
                    and Slowly Changing Dimensions
                  </li>
                  <li>
                    Implemented server-side pagination reducing load time by 45%
                  </li>
                </ul>
                <div className="tech-tags">
                  <span>.NET</span>
                  <span>Angular</span>
                  <span>SQL</span>
                  <span>RxJS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>Impostor</h3>
                <span className="project-type">Mobile Game</span>
              </div>
              <p className="project-description">
                Offline-first social deduction game with hybrid SQLite/Appwrite
                architecture, AI-powered content generation, and bilingual
                support
              </p>
              <div className="project-highlights">
                <div className="highlight-stat">
                  <strong>100%</strong>
                  <span>Offline Capable</span>
                </div>
                <div className="highlight-stat">
                  <strong>AI-Powered</strong>
                  <span>Content Pipeline</span>
                </div>
                <div className="highlight-stat">
                  <strong>2 Languages</strong>
                  <span>EN/AM Support</span>
                </div>
              </div>
              <div className="tech-tags">
                <span>React Native</span>
                <span>TypeScript</span>
                <span>SQLite</span>
                <span>Appwrite</span>
                <span>Python</span>
                <span>LLMs</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Mezgeb</h3>
                <span className="project-type">Mobile App</span>
              </div>
              <p className="project-description">
                Offline receipt manager parsing SMS, PDF, and XML bank receipts
                with 98% accuracy across 4,000+ real transactions
              </p>
              <div className="project-highlights">
                <div className="highlight-stat">
                  <strong>98%</strong>
                  <span>Parse Accuracy</span>
                </div>
                <div className="highlight-stat">
                  <strong>10M+</strong>
                  <span>Requests Saved/Month</span>
                </div>
                <div className="highlight-stat">
                  <strong>&lt;10ms</strong>
                  <span>Query Speed</span>
                </div>
              </div>
              <div className="tech-tags">
                <span>Ionic</span>
                <span>Angular</span>
                <span>TypeScript</span>
                <span>SQLite</span>
                <span>Regex</span>
              </div>
              <a
                href="https://youtu.be/AKWvGY56u2U"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Watch Demo <HiExternalLink />
              </a>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>MOH CPMS</h3>
                <span className="project-type">Enterprise System</span>
              </div>
              <p className="project-description">
                Construction Project Management System for Ministry of Health
                with Primavera-style scheduling and project control
              </p>
              <div className="project-highlights">
                <div className="highlight-stat">
                  <strong>Enterprise</strong>
                  <span>Scale System</span>
                </div>
                <div className="highlight-stat">
                  <strong>Full-Stack</strong>
                  <span>Python + JS</span>
                </div>
                <div className="highlight-stat">
                  <strong>Custom</strong>
                  <span>ERPNext Modules</span>
                </div>
              </div>
              <div className="tech-tags">
                <span>Frappe</span>
                <span>Python</span>
                <span>ERPNext</span>
                <span>JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skill-items">
                <span className="skill-badge">Python</span>
                <span className="skill-badge">TypeScript</span>
                <span className="skill-badge">JavaScript</span>
                <span className="skill-badge">C#</span>
                <span className="skill-badge">SQL</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-items">
                <span className="skill-badge">React</span>
                <span className="skill-badge">React Native</span>
                <span className="skill-badge">Angular</span>
                <span className="skill-badge">Ionic</span>
                <span className="skill-badge">RxJS</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-items">
                <span className="skill-badge">FastAPI</span>
                <span className="skill-badge">.NET</span>
                <span className="skill-badge">Frappe</span>
                <span className="skill-badge">REST APIs</span>
                <span className="skill-badge">Pydantic</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Databases</h3>
              <div className="skill-items">
                <span className="skill-badge">SQLite</span>
                <span className="skill-badge">PostgreSQL</span>
                <span className="skill-badge">MySQL</span>
                <span className="skill-badge">Appwrite</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>DevOps & Tools</h3>
              <div className="skill-items">
                <span className="skill-badge">Docker</span>
                <span className="skill-badge">GitHub Actions</span>
                <span className="skill-badge">CI/CD</span>
                <span className="skill-badge">Git</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Specializations</h3>
              <div className="skill-items">
                <span className="skill-badge">Offline-First Systems</span>
                <span className="skill-badge">AI Integration</span>
                <span className="skill-badge">LLM Training</span>
                <span className="skill-badge">i18n</span>
                <span className="skill-badge">TDD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's work together!</h3>
              <p>
                I'm available for freelance projects, contract work, and
                full-time opportunities. Feel free to reach out!
              </p>
              <div className="contact-methods">
                <a
                  href="mailto:getayawkalgirma36908@gmail.com"
                  className="contact-method"
                >
                  <FaEnvelope />
                  <span>getayawkalgirma36908@gmail.com</span>
                </a>
                <a
                  href="https://github.com/GetayawkalGirma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method"
                >
                  <FaGithub />
                  <span>github.com/GetayawkalGirma</span>
                </a>
                <a
                  href="https://linkedin.com/in/getayawkalgirma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method"
                >
                  <FaLinkedin />
                  <span>linkedin.com/in/getayawkalgirma</span>
                </a>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Getayawkal Girma. All rights reserved.</p>
          <p className="footer-note">Built with React & TypeScript</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
