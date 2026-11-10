import React from "react";
import { GraduationCap, Award, Calendar, School, CheckCircle } from "lucide-react";
import { educationData } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="section-container">
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <GraduationCap size={14} />
          <span>// 02. ACADEMIC FOUNDATIONS</span>
        </div>
        <h2 className="section-title">
          Educational <span className="gradient-text">Milestones</span>
        </h2>
        <p className="section-subtitle">
          Rigorous academic journey grounded in Artificial Intelligence, Data Science, and analytical computing.
        </p>
      </div>

      {/* Timeline Container */}
      <div
        style={{
          position: "relative",
          maxWidth: "840px",
          margin: "0 auto",
        }}
      >
        {/* Glowing Central Vertical Timeline Line */}
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
          className="timeline-rail"
        />

        {/* Timeline Items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {educationData.map((item, index) => {
            const isLatest = index === 0;

            return (
              <div
                key={index}
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "28px",
                  paddingLeft: "56px",
                }}
                className="timeline-item"
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
                  className="timeline-node"
                />

                {/* Card */}
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
                  {/* Top Bar: Dates & Status */}
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
                      <span>{item.period}</span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.85rem",
                          fontWeight: 700,
                          padding: "5px 14px",
                          borderRadius: "9999px",
                          background: isLatest
                            ? "linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(56, 189, 248, 0.2))"
                            : "rgba(255, 255, 255, 0.05)",
                          border: isLatest
                            ? "1px solid rgba(16, 185, 129, 0.5)"
                            : "1px solid rgba(255, 255, 255, 0.1)",
                          color: isLatest ? "#34d399" : "#e2e8f0",
                          boxShadow: isLatest
                            ? "0 0 15px rgba(16, 185, 129, 0.2)"
                            : "none",
                        }}
                      >
                        <Award size={14} />
                        <span>{item.grade}</span>
                      </span>

                      <span className="tag-badge">{item.status}</span>
                    </div>
                  </div>

                  {/* Degree Title */}
                  <h3
                    style={{
                      fontSize: "clamp(1.2rem, 2.5vw, 1.45rem)",
                      marginBottom: "8px",
                      color: "#ffffff",
                    }}
                  >
                    {item.degree}
                  </h3>

                  {/* Institution */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "var(--aurora-violet)",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      marginBottom: "16px",
                    }}
                  >
                    <School size={16} />
                    <span>{item.institution}</span>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                      color: "var(--text-secondary)",
                      marginBottom: "18px",
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                      paddingTop: "16px",
                    }}
                  >
                    {item.highlights.map((h, hIdx) => (
                      <div
                        key={hIdx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          fontSize: "0.88rem",
                          color: "#cbd5e1",
                        }}
                      >
                        <CheckCircle size={15} color="var(--aurora-cyan)" />
                        <span>{h}</span>
                      </div>
                    ))}
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
