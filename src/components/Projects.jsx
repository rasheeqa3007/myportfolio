import React, { useState } from "react";
import {
  Sparkles,
  ExternalLink,
  Eye,
  Cpu,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { Github } from "./SocialIcons";
import { projectsData } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { label: "All Projects", value: "all" },
    { label: "Featured Showcase", value: "featured" },
    { label: "AI & Embedded", value: "ai" },
    { label: "Software & Web", value: "software" },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return p.featured;
    if (activeFilter === "ai")
      return (
        p.category.includes("Artificial Intelligence") ||
        p.category.includes("Embedded")
      );
    if (activeFilter === "software")
      return (
        p.category.includes("Software") ||
        p.category.includes("Web")
      );
    return true;
  });

  return (
    <section id="projects" className="section-container">
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <Sparkles size={14} />
          <span>// 04. INNOVATION LAB</span>
        </div>
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">
          Intelligent voice systems, offline embedded microcontrollers, and structured object-oriented software engineering.
        </p>
      </div>

      {/* Filter Tabs */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "48px",
        }}
      >
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className="btn"
            style={{
              padding: "8px 18px",
              borderRadius: "9999px",
              fontSize: "0.85rem",
              background:
                activeFilter === f.value
                  ? "linear-gradient(135deg, rgba(56, 189, 248, 0.25), rgba(129, 140, 248, 0.25))"
                  : "rgba(15, 23, 42, 0.6)",
              border:
                activeFilter === f.value
                  ? "1px solid var(--aurora-cyan)"
                  : "1px solid var(--glass-border)",
              color: activeFilter === f.value ? "#ffffff" : "var(--text-secondary)",
              boxShadow:
                activeFilter === f.value
                  ? "0 0 20px rgba(56, 189, 248, 0.25)"
                  : "none",
            }}
          >
            <span>{f.label}</span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "28px",
        }}
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-panel interactive-card"
            style={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "22px",
              overflow: "hidden",
              background: "rgba(15, 23, 42, 0.7)",
              border: project.featured
                ? "1px solid rgba(56, 189, 248, 0.35)"
                : "1px solid var(--glass-border)",
              boxShadow: project.featured
                ? "0 10px 30px -10px rgba(56, 189, 248, 0.2)"
                : "var(--shadow-sm)",
            }}
          >
            {/* Project Image Banner */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "200px",
                overflow: "hidden",
                background: "#080d21",
                cursor: "pointer",
              }}
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform var(--transition-smooth)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />

              {/* Scrim Gradient */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, transparent 60%)",
                }}
              />

              {/* Top Badges */}
              <div
                style={{
                  position: "absolute",
                  top: "14px",
                  left: "14px",
                  right: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  zIndex: 2,
                }}
              >
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    background: "rgba(5, 8, 20, 0.75)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(56, 189, 248, 0.3)",
                    color: "var(--aurora-cyan)",
                  }}
                >
                  {project.category}
                </span>

                {project.featured && (
                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      background:
                        "linear-gradient(135deg, rgba(232, 121, 249, 0.25), rgba(168, 85, 247, 0.25))",
                      border: "1px solid rgba(232, 121, 249, 0.4)",
                      color: "#f472b6",
                    }}
                  >
                    Featured
                  </span>
                )}
              </div>
            </div>

            {/* Project Content */}
            <div
              style={{
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3
                  onClick={() => setSelectedProject(project)}
                  style={{
                    fontSize: "1.25rem",
                    marginBottom: "8px",
                    color: "#ffffff",
                    cursor: "pointer",
                    transition: "color var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--aurora-cyan)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#ffffff";
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    color: "var(--text-secondary)",
                    marginBottom: "18px",
                  }}
                >
                  {project.shortDescription}
                </p>

                {/* Technology Tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "24px",
                  }}
                >
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="tag-badge">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tag-badge">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                {/* View Details Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn btn-secondary"
                  style={{
                    flexGrow: 1,
                    padding: "9px 16px",
                    fontSize: "0.85rem",
                    borderRadius: "10px",
                  }}
                >
                  <Eye size={15} color="var(--aurora-cyan)" />
                  <span>View Details</span>
                </button>

                {/* GitHub Link Button */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                    style={{
                      padding: "9px 14px",
                      borderRadius: "10px",
                    }}
                    aria-label={`View ${project.title} on GitHub`}
                    title="View GitHub Repository"
                  >
                    <Github size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal View */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
