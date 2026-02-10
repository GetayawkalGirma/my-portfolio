import { FaExternalLinkAlt } from "react-icons/fa";
import impostorLogo from "../assets/Impostor.png";
import mezgebLogo from "../assets/Mezgeb.webp";

const Projects = () => {
  return (
    <div className="page-container padding-top">
      <div className="container">
        <h2 className="page-title">Personal Projects</h2>

        <div className="projects-vertical-list">
          {/* Project 1: Impostor (Red/Purple Theme) */}
          <div
            className="clean-project-card"
            style={{
              borderColor: "rgba(226, 67, 67, 0.4)", // Red glow
              background:
                "linear-gradient(145deg, rgba(220, 38, 38, 0.05) 0%, var(--card-bg) 40%)",
            }}
          >
            <div className="project-icon-wrapper image-icon">
              <img
                src={impostorLogo}
                alt="Impostor Logo"
                className="project-img-icon"
                style={{ width: "68px", height: "68px" }}
              />
            </div>
            <div className="project-details">
              <div className="project-header-row">
                <h3 style={{ color: "#f87171" }}>Impostor</h3>
                <span
                  className="badge"
                  style={{
                    background: "rgba(220, 38, 38, 0.15)",
                    color: "#f87171",
                  }}
                >
                  Mobile Game
                </span>
              </div>
              <p className="project-bio">
                A social deduction game featuring a hybrid architecture. While
                playable offline, it intelligently fetches and syncs word packs
                from an Appwrite database to ensure fresh content.
              </p>
              <div className="tech-stack-row">
                <span style={{ borderColor: "rgba(220,38,38,0.3)" }}>
                  React Native
                </span>
                <span style={{ borderColor: "rgba(220,38,38,0.3)" }}>
                  Appwrite
                </span>
                <span style={{ borderColor: "rgba(220,38,38,0.3)" }}>
                  SQLite
                </span>
                <span style={{ borderColor: "rgba(220,38,38,0.3)" }}>
                  Python
                </span>
                <span style={{ borderColor: "rgba(220,38,38,0.3)" }}>
                  Vercel
                </span>
              </div>

              {/* Details always visible */}
              <div
                className="project-visible-details"
                style={{ borderTopColor: "rgba(220, 38, 38, 0.2)" }}
              >
                <ul className="project-details-list">
                  <li className="custom-bullet-red">
                    Designed and built a cross-platform mobile game using React
                    Native (Expo) with a fully offline-first architecture backed
                    by SQLite.
                  </li>
                  <li className="custom-bullet-red">
                    Architected a hybrid data strategy combining local SQLite
                    storage with Appwrite (BaaS), enabling seamless offline
                    gameplay with incremental cloud synchronization.
                  </li>
                  <li className="custom-bullet-red">
                    Implemented an optimized SQL-based content selection
                    algorithm that prioritizes least-used records while
                    maintaining randomness, reducing repetition and improving
                    replayability.
                  </li>
                  <li className="custom-bullet-red">
                    Built an incremental sync mechanism that fetches only newly
                    verified records from the cloud, minimizing bandwidth usage
                    and cold-start latency.
                  </li>
                  <li className="custom-bullet-red">
                    Developed an automated Python-based ETL pipeline that
                    scrapes external datasets, deduplicates entries, enriches
                    content using LLMs, and loads verified data into production.
                  </li>
                  <li className="custom-bullet-red">
                    Integrated AI-powered translation and semantic
                    categorization workflows to support bilingual
                    (English/Amharic) gameplay content.
                  </li>
                  <li className="custom-bullet-red">
                    Implemented human-in-the-loop verification by gating
                    AI-generated content with review flags before client
                    distribution.
                  </li>
                </ul>
                <div className="project-links">
                  <a
                    href="https://ethioimpostor.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-game"
                  >
                    Play Online <FaExternalLinkAlt />
                  </a>
                  <a
                    href="https://github.com/GetayawkalGirma/my-app-releases/releases/tag/v20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-game btn-game-blue"
                  >
                    Download APK <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: Mezgeb (Green/Teal Theme) */}
          <div
            className="clean-project-card"
            style={{
              borderColor: "rgba(16, 185, 129, 0.4)", // Green glow
              background:
                "linear-gradient(145deg, rgba(16, 185, 129, 0.05) 0%, var(--card-bg) 40%)",
            }}
          >
            <div className="project-icon-wrapper image-icon">
              <img
                src={mezgebLogo}
                alt="Mezgeb Logo"
                className="project-img-icon"
              />
            </div>
            <div className="project-details">
              <div className="project-header-row">
                <h3 style={{ color: "#34d399" }}>Mezgeb</h3>
                <span
                  className="badge"
                  style={{
                    background: "rgba(16, 185, 129, 0.15)",
                    color: "#34d399",
                  }}
                >
                  Finance Utility
                </span>
              </div>
              <p className="project-bio">
                Offline receipt manager that parses SMS, PDF, and XML bank
                receipts with 98% accuracy. Saves millions of server requests by
                processing data locally.
              </p>
              <div className="tech-stack-row">
                <span style={{ borderColor: "rgba(16,185,129,0.3)" }}>
                  Ionic
                </span>
                <span style={{ borderColor: "rgba(16,185,129,0.3)" }}>
                  Angular
                </span>
                <span style={{ borderColor: "rgba(16,185,129,0.3)" }}>
                  Regex
                </span>
                <span style={{ borderColor: "rgba(16,185,129,0.3)" }}>
                  SQLite
                </span>
              </div>

              {/* Details always visible */}
              <div
                className="project-visible-details"
                style={{ borderTopColor: "rgba(16, 185, 129, 0.2)" }}
              >
                <ul className="project-details-list">
                  <li className="custom-bullet-green">
                    Built an offline-first mobile app that parses and organizes
                    SMS, PDF, and XML bank receipts (CBE, Telebirr, BoA) into a
                    structured SQLite database.
                  </li>
                  <li className="custom-bullet-green">
                    By storing all transactions locally, Mezgeb can eliminate up
                    to 10 million old receipt server requests per month for a
                    mid-sized bank if fully adopted.
                  </li>
                  <li className="custom-bullet-green">
                    Implemented 40+ regex patterns for multilingual
                    (English/Amharic) parsing, achieving 98% accuracy on 4,000+
                    real receipts.
                  </li>
                  <li className="custom-bullet-green">
                    Engineered ultra-fast query logic capable of loading
                    thousands of receipts in milliseconds, maintaining smooth
                    performance even on low-end Android devices.
                  </li>
                  <li className="custom-bullet-green">
                    Designed a modular architecture with 9 services and 72
                    source files (7.8K+ LOC) following clean architecture and
                    dependency injection principles.
                  </li>
                  <li className="custom-bullet-green">
                    Created interactive analytics dashboards with Chart.js,
                    providing spending insights and visual breakdowns by
                    category.
                  </li>
                  <li className="custom-bullet-green">
                    Integrated a custom Capacitor native plugin to bypass
                    SSL/CORS issues for PDF parsing, enabling seamless
                    enrichment workflows.
                  </li>
                  <li className="custom-bullet-green">
                    Automated updates and releases via GitHub Actions for
                    continuous delivery.
                  </li>
                </ul>

                <div className="project-links">
                  <a
                    href="https://youtu.be/AKWvGY56u2U"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-game btn-game-green"
                  >
                    Watch Demo <FaExternalLinkAlt />
                  </a>

                  <a
                    href="https://github.com/GetayawkalGirma/my-app-releases/releases/tag/v20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-game btn-game-blue"
                  >
                    Download APK <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
