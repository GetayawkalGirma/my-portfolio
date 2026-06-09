import { FaExternalLinkAlt } from "react-icons/fa";
import impostorLogo from "../assets/Impostor.png";
import mezgebLogo from "../assets/Mezgeb.webp";

const projects = [
  {
    id: "zdish",
    logo: null,
    logoInitials: "ZD",
    accentHex: "#6366f1",
    accentRgb: "99, 102, 241",
    title: "ZDish",
    badge: "Web Platform",
    bio: "Restaurant discovery and menu management platform for Addis Ababa — surfacing real menus, live prices, and hidden gems across 25+ venues and 555+ meals. No more outdated PDF menus.",
    stack: [
      "Next.js 16",
      "React 19",
      "PostgreSQL",
      "Prisma ORM",
      "Docker",
      "LLMs",
    ],
    bullets: [
      "Architected a 4-layer clean architecture (Actions → Services → Repositories → DB) following Domain-Driven Design, with a multi-file Prisma ORM schema isolating four data domains.",
      "Containerized the development environment with Docker, enabling fully reproducible local setup and consistent behaviour across machines without manual configuration.",
      "Implemented tag-based cache invalidation (revalidateTag) with deterministic rules per domain, ensuring predictable and testable cache state transitions across the application.",
      "Integrated LLM-powered workflows for menu content enrichment, categorization, and data quality improvements across 667+ active items.",
      "Authored structured technical documentation covering architecture decisions, domain boundaries, and data flow for independent contributor onboarding.",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://z-menu-neax.vercel.app/",
        style: "primary",
      },
      {
        label: "GitHub",
        href: "https://github.com/GetayawkalGirma",
        style: "secondary",
      },
    ],
  },
  {
    id: "impostor",
    logo: impostorLogo,
    logoInitials: null,
    accentHex: "#f87171",
    accentRgb: "220, 38, 38",
    title: "Impostor",
    badge: "Mobile Game",
    bio: "A social deduction game with a hybrid offline/cloud architecture. Playable fully offline, it intelligently syncs bilingual word packs from Appwrite for fresh content every session.",
    stack: ["React Native", "Expo", "Appwrite", "SQLite", "Python", "Vercel"],
    bullets: [
      "Designed a cross-platform mobile game with a fully offline-first architecture backed by SQLite, deployable with zero network dependency.",
      "Architected a hybrid data strategy combining local SQLite storage with Appwrite BaaS — seamless offline gameplay with incremental cloud synchronization.",
      "Implemented an optimized SQL-based content selection algorithm that prioritizes least-used records while maintaining randomness, reducing repetition and improving replayability.",
      "Developed an automated Python ETL pipeline that scrapes external datasets, deduplicates entries, enriches content using LLMs, and loads verified data into production.",
      "Integrated AI-powered translation and semantic categorization for bilingual (English/Amharic) gameplay content with human-in-the-loop verification before distribution.",
    ],
    links: [
      {
        label: "Play Online",
        href: "https://ethioimpostor.vercel.app/",
        style: "primary",
      },
      {
        label: "Download APK",
        href: "https://github.com/GetayawkalGirma/my-app-releases/releases/tag/v20",
        style: "secondary",
      },
    ],
  },
  {
    id: "mezgeb",
    logo: mezgebLogo,
    logoInitials: null,
    accentHex: "#34d399",
    accentRgb: "16, 185, 129",
    title: "Mezgeb",
    badge: "Finance Utility",
    bio: "Offline receipt manager that parses SMS, PDF, and XML bank receipts with 98% accuracy across CBE, Telebirr, and BoA. All processing happens on-device — no server needed.",
    stack: [
      "Ionic",
      "Angular",
      "TypeScript",
      "SQLite",
      "Regex",
      "GitHub Actions",
    ],
    bullets: [
      "Built an offline-first mobile app that parses and organizes SMS, PDF, and XML bank receipts into a structured SQLite database — capable of eliminating millions of server requests monthly.",
      "Implemented 40+ regex patterns for multilingual (English/Amharic) parsing, achieving 98% accuracy validated against 4,000+ real receipts.",
      "Designed a modular architecture with 9 services and 72 source files (7.8K+ LOC) following clean architecture and dependency injection principles.",
      "Engineered ultra-fast SQLite query logic loading thousands of receipts in milliseconds, maintaining smooth performance on low-end Android devices.",
      "Created interactive analytics dashboards with Chart.js providing spending insights and visual breakdowns by category.",
      "Integrated a custom Capacitor native plugin to handle PDF parsing, and automated release delivery via GitHub Actions CI/CD.",
    ],
    links: [
      {
        label: "Watch Demo",
        href: "https://youtu.be/AKWvGY56u2U",
        style: "primary",
      },
      {
        label: "Download APK",
        href: "https://github.com/GetayawkalGirma/my-app-releases/releases/tag/v20",
        style: "secondary",
      },
    ],
  },
];

const Projects = () => {
  return (
    <div className="page-container padding-top">
      <div className="container">
        <div className="projects-page-header">
          <h2 className="page-title">Projects</h2>
          <p className="projects-subtitle">
            Things I've built outside of work — production apps, real users,
            shipped code.
          </p>
        </div>

        <div className="projects-vertical-list">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="clean-project-card v2"
              style={
                {
                  "--accent-hex": project.accentHex,
                  "--accent-rgb": project.accentRgb,
                } as React.CSSProperties
              }
            >
              <div className="project-card-inner">
                {/* Left column: index + icon */}
                <div className="project-card-left">
                  <span className="project-index-label">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="project-initials-icon">
                    {project.logo ? (
                      <img
                        src={project.logo}
                        alt={project.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    ) : (
                      <span>{project.logoInitials}</span>
                    )}
                  </div>
                </div>

                {/* Right column: content */}
                <div style={{ flex: 1 }}>
                  <div className="project-header-row">
                    <div className="project-title-group">
                      <h3 className="project-title-v2">{project.title}</h3>
                      <span className="badge v2">{project.badge}</span>
                    </div>

                    <div className="project-links-top">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`btn-project ${
                            link.style === "primary"
                              ? "btn-project-primary"
                              : "btn-project-secondary"
                          }`}
                        >
                          {link.label} <FaExternalLinkAlt />
                        </a>
                      ))}
                    </div>
                  </div>

                  <p className="project-bio">{project.bio}</p>

                  <div className="tech-stack-row">
                    {project.stack.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-visible-details">
                    <ul className="project-details-list">
                      {project.bullets.map((bullet, i) => (
                        <li key={i} className="project-bullet-v2">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
