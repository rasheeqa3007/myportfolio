import React from "react";
import { Briefcase, Calendar, MapPin, Building, ArrowRight, Code } from "lucide-react";
import { experienceData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <Briefcase size={14} />
          <span>// 05. PROFESSIONAL JOURNEY</span>
        </div>
        <h2 className="section-title">
          Internship <span className="gradient-text">Experience</span>
        </h2>
        <p className="section-subtitle">
          Practical industry internships sharpening front-end architecture, Java logic, and modern web delivery.
        </p>
      </div>

      {/* Experience Timeline */}
      <div
        style={{
          position: "relative",
          maxWidth: "840px",
          margin: "0 auto",
        }}
      >
        {/* Continuous Timeline Rail */}
        <div
          style={{
            position: "absolute",
            top: "24px",
            bottom: "24px",
            left: "24px",
            width: "3px",
            background:
              "linear-gradient(180deg, var(--aurora-cyan) 0%, var(--aurora-violet) 50%, var(--aurora-purple) 100%)",
            boxShadow: "0 0 12px rgba(56, 189, 248, 0.4)",
            borderRadius: "2px",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {experienceData.map((exp, idx) => {
            const isLatest = idx === 0;

            return (
              <div
                key={idx}
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "28px",
                  paddingLeft: "56px",
                }}
              >
                {/* Glowing Node Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "14px",
                    top: "14px",
                    width: "23px",
                    height: "23px",
                    borderRadius: "50%",
                    background: isLatest ? "var(--aurora-cyan)" : "#0f172a",
                    border: `3px solid ${
                      isLatest ? "#ffffff" : "var(--aurora-violet)"
                    }`,
                    boxShadow: isLatest
                      ? "0 0 18px var(--aurora-cyan), 0 0 30px rgba(56, 189, 248, 0.5)"
                      : "0 0 10px rgba(129, 140, 248, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                  }}
                />

                {/* Glass Experience Card */}
                <div
                  className="glass-panel interactive-card"
                  style={{
                    width: "100%",
                    padding: "32px",
                    borderRadius: "20px",
                    background: isLatest
                      ? "linear-gradient(145deg, rgba(15, 23, 42, 0.85), rgba(56, 189, 248, 0.08))"
                      : "rgba(15, 23, 42, 0.65)",
                    border: isLatest
                      ? "1px solid rgba(56, 189, 248, 0.35)"
                      : "1px solid var(--glass-border)",
                  }}
                >
                  {/* Top Bar: Dates & Duration */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.82rem",
                        color: "var(--aurora-cyan)",
                        background: "rgba(56, 189, 248, 0.1)",
                        padding: "5px 12px",
                        borderRadius: "8px",
                        border: "1px solid rgba(56, 189, 248, 0.2)",
                      }}
                    >
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span className="tag-badge">{exp.duration}</span>
                      <span
                        style={{
                          fontSize: "0.78rem",
                          fontFamily: "var(--font-mono)",
                          padding: "4px 10px",
                          borderRadius: "6px",
                          background: isLatest
                            ? "rgba(56, 189, 248, 0.15)"
                            : "rgba(255, 255, 255, 0.05)",
                          color: isLatest ? "var(--aurora-cyan)" : "var(--text-muted)",
                          border: isLatest
                            ? "1px solid rgba(56, 189, 248, 0.3)"
                            : "1px solid rgba(255, 255, 255, 0.08)",
                        }}
                      >
                        {exp.badge}
                      </span>
                    </div>
                  </div>

                  {/* Role Title */}
                  <h3
                    style={{
                      fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
                      marginBottom: "6px",
                      color: "#ffffff",
                    }}
                  >
                    {exp.role}
                  </h3>

                  {/* Company & Location */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "16px",
                      color: "var(--aurora-violet)",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      marginBottom: "16px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <Building size={16} />
                      <span>{exp.company}</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        color: "var(--text-muted)",
                        fontSize: "0.85rem",
                      }}
                    >
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                      color: "var(--text-secondary)",
                      marginBottom: "20px",
                    }}
                  >
                    {exp.description}
                  </p>

                  {/* Skills Applied / Acquired */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      paddingTop: "16px",
                      borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      Technical Areas Practiced:
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {exp.skillsGained.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          style={{
                            padding: "4px 10px",
                            borderRadius: "6px",
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.78rem",
                            background: "rgba(129, 140, 248, 0.1)",
                            border: "1px solid rgba(129, 140, 248, 0.2)",
                            color: "#e2e8f0",
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
