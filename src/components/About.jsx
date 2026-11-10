import React, { useState } from "react";
import {
  Cpu,
  Code2,
  Sparkles,
  Music,
  Compass,
  GraduationCap,
  Briefcase,
  Target,
  CheckCircle2,
} from "lucide-react";
import { personalData } from "../data/portfolioData";

export default function About() {
  const [selectedInterest, setSelectedInterest] = useState(0);

  const interestIcons = {
    Cpu: Cpu,
    Code2: Code2,
    Sparkles: Sparkles,
    Music: Music,
  };

  const quickStats = [
    { label: "Academic Standing", value: "8.5 CGPA", sub: "Achariya Engineering" },
    { label: "Graduation Cohort", value: "2023–2027", sub: "B.Tech AI & Data Science" },
    { label: "Internships Completed", value: "3 Roles", sub: "Frontend, Java & Web Dev" },
    { label: "Verified Certs", value: "5 Verified", sub: "UiPath, IBM, VRK, MongoDB" },
  ];

  return (
    <section id="about" className="section-container">
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <Compass size={14} />
          <span>// 01. IDENTITY &amp; VISION</span>
        </div>
        <h2 className="section-title">
          My Story &amp; <span className="gradient-text">Creative Vision</span>
        </h2>
        <p className="section-subtitle">
          Merging algorithmic precision with creative design to engineer meaningful, human-centered digital experiences.
        </p>
      </div>

      {/* Main Grid: Portrait with distinct treatment + Narrative */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "48px",
          alignItems: "center",
          marginBottom: "56px",
        }}
        className="about-grid"
      >
        {/* Left Column: Distinct Portrait Treatment (Cyber-Glass Shield) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Glass Card Housing the Portrait */}
          <div
            className="glass-panel"
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "380px",
              padding: "20px",
              borderRadius: "24px",
              background:
                "linear-gradient(145deg, rgba(15, 23, 42, 0.8), rgba(8, 13, 33, 0.9))",
              border: "1px solid rgba(129, 140, 248, 0.25)",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(129, 140, 248, 0.15)",
            }}
          >
            {/* Corner Decorative Brackets */}
            <div
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                width: "14px",
                height: "14px",
                borderTop: "2px solid var(--aurora-cyan)",
                borderLeft: "2px solid var(--aurora-cyan)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                width: "14px",
                height: "14px",
                borderTop: "2px solid var(--aurora-purple)",
                borderRight: "2px solid var(--aurora-purple)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "10px",
                width: "14px",
                height: "14px",
                borderBottom: "2px solid var(--aurora-purple)",
                borderLeft: "2px solid var(--aurora-purple)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                right: "10px",
                width: "14px",
                height: "14px",
                borderBottom: "2px solid var(--aurora-cyan)",
                borderRight: "2px solid var(--aurora-cyan)",
              }}
            />

            {/* Inner Portrait Container */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "360px",
                borderRadius: "18px",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                background: "#0a0f24",
              }}
            >
              <img
                src={personalData.portraitUrl}
                alt="Rasheeqa Sabreen Z - Professional Portrait"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 20%",
                  display: "block",
                  filter: "contrast(1.03) brightness(1.02)",
                  transition: "transform var(--transition-smooth)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />

              {/* Gradient Scrim Overlay at Bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "120px",
                  background:
                    "linear-gradient(to top, rgba(5, 8, 20, 0.95), transparent)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "16px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#ffffff",
                  }}
                >
                  Rasheeqa Sabreen Z
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--aurora-cyan)",
                  }}
                >
                  AI &amp; Data Science Student
                </div>
              </div>
            </div>

            {/* Verification Tag underneath photo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 6px 4px 6px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.78rem",
                  color: "#cbd5e1",
                  fontFamily: "var(--font-mono)",
                }}
              >
                <CheckCircle2 size={14} color="#10b981" />
                <span>Verified Candidate</span>
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                ID: ACET-AIDS-27
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative & Academic Focus */}
        <div>
          {/* Resume Introduction Quote Card */}
          <div
            className="glass-panel"
            style={{
              padding: "32px",
              marginBottom: "32px",
              borderLeft: "4px solid var(--aurora-cyan)",
              background: "rgba(15, 23, 42, 0.75)",
            }}
          >
            <div
              style={{
                fontSize: "0.8rem",
                fontFamily: "var(--font-mono)",
                color: "var(--aurora-cyan)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "12px",
              }}
            >
              // Professional Summary
            </div>
            <p
              style={{
                fontSize: "clamp(1.05rem, 1.8vw, 1.18rem)",
                color: "#ffffff",
                lineHeight: 1.8,
                fontWeight: 400,
              }}
            >
              &ldquo;{personalData.aboutIntroduction}&rdquo;
            </p>
          </div>

          {/* Academic & Professional Journey Overview */}
          <div style={{ marginBottom: "32px" }}>
            <h3
              style={{
                fontSize: "1.35rem",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <GraduationCap size={20} color="var(--aurora-violet)" />
              <span>Academic &amp; Professional Trajectory</span>
            </h3>
            <p style={{ lineHeight: 1.75, marginBottom: "16px" }}>
              Currently advancing through undergraduate studies in Artificial
              Intelligence and Data Science at Achariya College of Engineering
              and Technology (maintaining an <strong>8.5 CGPA</strong>). Alongside
              academic research, I have gained practical industry experience
              through progressive internships at <strong>Twilight IT Solutions</strong>{" "}
              (Java and Front-End Development) and <strong>Ignite Labs</strong>{" "}
              (Web Development).
            </p>
          </div>

          {/* Career Aspirations Card */}
          <div
            className="glass-panel"
            style={{
              padding: "24px",
              background:
                "linear-gradient(135deg, rgba(56, 189, 248, 0.06), rgba(168, 85, 247, 0.06))",
              border: "1px solid rgba(56, 189, 248, 0.25)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "8px",
              }}
            >
              <Target size={18} color="var(--aurora-cyan)" />
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#ffffff",
                }}
              >
                Career Aspiration
              </div>
            </div>
            <p style={{ fontSize: "0.95rem", color: "#cbd5e1", lineHeight: 1.65 }}>
              {personalData.careerAspiration}
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Visual Composition: Four Pillars of Interest */}
      <div>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h3 style={{ fontSize: "1.6rem", marginBottom: "8px" }}>
            Creative &amp; Technical <span className="gradient-text">Pillars</span>
          </h3>
          <p style={{ maxWidth: "600px", margin: "0 auto", fontSize: "0.95rem" }}>
            The unique blend of analytical science, development, aesthetics, and acoustic harmony that fuels my work.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {personalData.interests.map((interest, idx) => {
            const Icon = interestIcons[interest.icon] || Sparkles;
            const isSelected = selectedInterest === idx;

            return (
              <div
                key={interest.id}
                onClick={() => setSelectedInterest(idx)}
                className="glass-panel interactive-card"
                style={{
                  padding: "28px 24px",
                  cursor: "pointer",
                  borderRadius: "18px",
                  border: isSelected
                    ? "1px solid var(--aurora-cyan)"
                    : "1px solid var(--glass-border)",
                  background: isSelected
                    ? "linear-gradient(145deg, rgba(15, 23, 42, 0.85), rgba(56, 189, 248, 0.12))"
                    : "rgba(15, 23, 42, 0.6)",
                  boxShadow: isSelected
                    ? "0 0 30px rgba(56, 189, 248, 0.25)"
                    : "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: isSelected
                        ? "linear-gradient(135deg, rgba(56, 189, 248, 0.3), rgba(168, 85, 247, 0.3))"
                        : "rgba(255, 255, 255, 0.04)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <Icon
                      size={24}
                      color={isSelected ? "var(--aurora-cyan)" : "var(--aurora-violet)"}
                    />
                  </div>
                  <span
                    className="tag-badge"
                    style={{
                      color: isSelected ? "var(--aurora-cyan)" : "var(--text-muted)",
                      borderColor: isSelected ? "rgba(56, 189, 248, 0.3)" : "rgba(255, 255, 255, 0.06)",
                    }}
                  >
                    {interest.badge}
                  </span>
                </div>

                <h4
                  style={{
                    fontSize: "1.15rem",
                    marginBottom: "8px",
                    color: isSelected ? "#ffffff" : "#e2e8f0",
                  }}
                >
                  {interest.title}
                </h4>

                <p style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
                  {interest.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Verified Metrics Bar */}
      <div
        className="glass-panel"
        style={{
          marginTop: "48px",
          padding: "24px 32px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "24px",
          background: "rgba(10, 16, 36, 0.8)",
          borderRadius: "18px",
        }}
      >
        {quickStats.map((stat, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.6rem",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "4px",
              }}
              className="gradient-text"
            >
              {stat.value}
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.88rem",
                fontWeight: 600,
                color: "#cbd5e1",
              }}
            >
              {stat.label}
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                marginTop: "2px",
              }}
            >
              {stat.sub}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
