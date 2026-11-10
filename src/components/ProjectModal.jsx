import React, { useEffect } from "react";
import {
  X,
  ExternalLink,
  Cpu,
  Layers,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
} from "lucide-react";
import { Github } from "./SocialIcons";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    // Lock scroll on background
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(3, 6, 17, 0.85)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        overflowY: "auto",
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass-panel"
        style={{
          width: "100%",
          maxWidth: "760px",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "rgba(13, 20, 44, 0.95)",
          borderRadius: "24px",
          border: "1px solid rgba(56, 189, 248, 0.35)",
          boxShadow:
            "0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(56, 189, 248, 0.2)",
          position: "relative",
          padding: 0,
        }}
      >
        {/* Sticky Modal Header Bar with Close Button */}
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 28px",
            background: "rgba(10, 16, 36, 0.9)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "var(--aurora-cyan)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Cpu size={14} />
            <span>{project.category}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              color: "#cbd5e1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all var(--transition-fast)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.borderColor = "var(--aurora-cyan)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#cbd5e1";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Project Visual Banner */}
        <div
          style={{
            width: "100%",
            height: "240px",
            background: "#080d21",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "80px",
              background: "linear-gradient(to top, rgba(13, 20, 44, 1), transparent)",
            }}
          />
        </div>

        {/* Modal Body Content */}
        <div style={{ padding: "28px 32px 36px 32px" }}>
          {/* Title & Tagline */}
          <h2
            id="modal-project-title"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 1.85rem)",
              marginBottom: "8px",
              color: "#ffffff",
            }}
          >
            {project.title}
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--aurora-cyan)",
              fontFamily: "var(--font-mono)",
              marginBottom: "24px",
            }}
          >
            {project.tagline}
          </p>

          {/* Section: Overview */}
          <div style={{ marginBottom: "28px" }}>
            <h4
              style={{
                fontSize: "1rem",
                color: "#cbd5e1",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "8px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Lightbulb size={16} color="var(--aurora-cyan)" />
              <span>Project Overview</span>
            </h4>
            <p style={{ lineHeight: 1.75, color: "#cbd5e1" }}>
              {project.overview || project.shortDescription}
            </p>
          </div>

          {/* Two-Column Problem & Approach */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              marginBottom: "28px",
            }}
          >
            {/* Problem Statement */}
            <div
              style={{
                padding: "20px",
                borderRadius: "14px",
                background: "rgba(239, 68, 68, 0.05)",
                border: "1px solid rgba(239, 68, 68, 0.2)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#f87171",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  fontFamily: "var(--font-mono)",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                <AlertCircle size={15} />
                <span>Problem Statement</span>
              </div>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "#cbd5e1" }}>
                {project.problemStatement ||
                  "Verified engineering challenge addressing real-world workflow barriers."}
              </p>
            </div>

            {/* Approach */}
            <div
              style={{
                padding: "20px",
                borderRadius: "14px",
                background: "rgba(56, 189, 248, 0.05)",
                border: "1px solid rgba(56, 189, 248, 0.2)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "var(--aurora-cyan)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  fontFamily: "var(--font-mono)",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                <Layers size={15} />
                <span>Approach &amp; Method</span>
              </div>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "#cbd5e1" }}>
                {project.approach ||
                  "Structured algorithmic implementation following clean software architecture."}
              </p>
            </div>
          </div>

          {/* Section: Technologies Used */}
          <div style={{ marginBottom: "28px" }}>
            <h4
              style={{
                fontSize: "1rem",
                color: "#cbd5e1",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "12px",
              }}
            >
              Technologies &amp; Architecture
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {(project.technologiesUsed || project.technologies).map(
                (tech, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "6px 14px",
                      borderRadius: "8px",
                      background: "rgba(56, 189, 248, 0.08)",
                      border: "1px solid rgba(56, 189, 248, 0.25)",
                      color: "#e2e8f0",
                      fontSize: "0.85rem",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Section: Outcomes & Learnings */}
          <div
            style={{
              padding: "20px",
              borderRadius: "14px",
              background: "rgba(16, 185, 129, 0.06)",
              border: "1px solid rgba(16, 185, 129, 0.25)",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#34d399",
                fontSize: "0.85rem",
                fontWeight: 700,
                fontFamily: "var(--font-mono)",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              <CheckCircle2 size={16} />
              <span>Outcomes &amp; Learnings</span>
            </div>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "#cbd5e1" }}>
              {project.outcomes ||
                "Demonstrated verified system execution, practical hardware/software integration, and validated performance results."}
            </p>
          </div>

          {/* Modal Actions */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
              justifyContent: "flex-end",
            }}
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: "12px 24px" }}
              >
                <Github size={18} />
                <span>View on GitHub</span>
                <ExternalLink size={14} />
              </a>
            )}

            <button
              onClick={onClose}
              className="btn btn-secondary"
              style={{ padding: "12px 22px" }}
            >
              <span>Close View</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
