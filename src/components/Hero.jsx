import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  FileDown,
  Mail,
  Sparkles,
  ChevronDown,
  Terminal,
  Cpu,
} from "lucide-react";
import { Github, Linkedin } from "./SocialIcons";
import { personalData } from "../data/portfolioData";
import AuroraOrb from "./AuroraOrb";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [textFade, setTextFade] = useState(true);

  // Cycling dynamic roles
  useEffect(() => {
    const interval = setInterval(() => {
      setTextFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % personalData.roles.length);
        setTextFade(true);
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "calc(var(--nav-height) + 20px)",
        paddingBottom: "60px",
        overflow: "hidden",
      }}
    >
      <div
        className="section-container"
        style={{
          width: "100%",
          paddingTop: 0,
          paddingBottom: 0,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column: Headline, Bio & Action Buttons */}
          <div style={{ maxWidth: "680px" }}>
            {/* Status / Availability Pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 16px",
                borderRadius: "9999px",
                background: "rgba(56, 189, 248, 0.08)",
                border: "1px solid rgba(56, 189, 248, 0.25)",
                backdropFilter: "blur(10px)",
                marginBottom: "24px",
                boxShadow: "0 0 20px rgba(56, 189, 248, 0.15)",
              }}
            >
              <span
                style={{
                  position: "relative",
                  display: "flex",
                  width: "10px",
                  height: "10px",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    display: "inline-flex",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    backgroundColor: "#10b981",
                    opacity: 0.75,
                    animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
                  }}
                />
                <span
                  style={{
                    position: "relative",
                    display: "inline-flex",
                    borderRadius: "50%",
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#10b981",
                  }}
                />
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  color: "#e2e8f0",
                  letterSpacing: "0.03em",
                }}
              >
                B.Tech AI &amp; DS 2023–2027 &bull; Achariya
              </span>
            </div>

            {/* Name Reveal */}
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: "16px",
              }}
            >
              <span style={{ display: "block", color: "#ffffff" }}>
                RASHEEQA
              </span>
              <span className="gradient-text">SABREEN Z</span>
            </h1>

            {/* Dynamic Role Tagline */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                minHeight: "36px",
                marginBottom: "20px",
              }}
            >
              <Terminal size={20} color="var(--aurora-cyan)" />
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.15rem, 2.5vw, 1.5rem)",
                  fontWeight: 600,
                  color: "#cbd5e1",
                  opacity: textFade ? 1 : 0,
                  transform: textFade ? "translateY(0)" : "translateY(6px)",
                  transition: "opacity 0.25s ease, transform 0.25s ease",
                }}
              >
                {personalData.roles[roleIndex]}
              </div>
            </div>

            {/* Introduction Statement */}
            <p
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                marginBottom: "36px",
                maxWidth: "600px",
              }}
            >
              &ldquo;{personalData.heroIntroduction}&rdquo;
            </p>

            {/* Three Prominent Functional Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                marginBottom: "36px",
              }}
            >
              {/* Button 1: Explore My Work */}
              <button
                onClick={() => scrollTo("projects")}
                className="btn btn-primary"
                style={{ padding: "14px 28px", fontSize: "1rem" }}
              >
                <span>Explore My Work</span>
                <ArrowRight size={18} />
              </button>

              {/* Button 2: Download Resume */}
              <a
                href={personalData.resumeUrl}
                download="Rasheeqa_Sabreen_Resume.pdf"
                className="btn btn-secondary"
                style={{ padding: "14px 26px", fontSize: "1rem" }}
              >
                <FileDown size={18} color="var(--aurora-cyan)" />
                <span>Download Resume</span>
              </a>

              {/* Button 3: Let's Connect */}
              <button
                onClick={() => scrollTo("contact")}
                className="btn btn-ghost"
                style={{ padding: "14px 26px", fontSize: "1rem" }}
              >
                <Mail size={18} color="var(--aurora-purple)" />
                <span>Let&apos;s Connect</span>
              </button>
            </div>

            {/* Social Profile Links */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                paddingTop: "12px",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                External Channels:
              </span>

              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rasheeqa Sabreen LinkedIn profile (opens in new tab)"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  background: "rgba(15, 23, 42, 0.6)",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                  color: "#ffffff",
                  fontSize: "0.85rem",
                  transition: "all var(--transition-fast)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--aurora-cyan)";
                  e.currentTarget.style.background = "rgba(56, 189, 248, 0.15)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.3)";
                  e.currentTarget.style.background = "rgba(15, 23, 42, 0.6)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Linkedin size={16} color="var(--aurora-cyan)" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rasheeqa Sabreen GitHub profile (opens in new tab)"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  background: "rgba(15, 23, 42, 0.6)",
                  border: "1px solid rgba(168, 85, 247, 0.3)",
                  color: "#ffffff",
                  fontSize: "0.85rem",
                  transition: "all var(--transition-fast)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--aurora-purple)";
                  e.currentTarget.style.background = "rgba(168, 85, 247, 0.15)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.3)";
                  e.currentTarget.style.background = "rgba(15, 23, 42, 0.6)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Github size={16} color="var(--aurora-purple)" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Composite with 3D Aurora Orb & Hero Portrait */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* 3D Aurora Orb in background of visual composite */}
            <div
              style={{
                position: "absolute",
                zIndex: 1,
                opacity: 0.85,
                transform: "scale(1.05)",
                pointerEvents: "none",
              }}
            >
              <AuroraOrb />
            </div>

            {/* Hero Portrait Frame */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                width: "min(340px, 80vw)",
                aspectRatio: "1 / 1",
                borderRadius: "50%",
                padding: "8px",
                background:
                  "linear-gradient(135deg, rgba(56, 189, 248, 0.8), rgba(129, 140, 248, 0.4), rgba(168, 85, 247, 0.8))",
                boxShadow:
                  "0 0 50px rgba(56, 189, 248, 0.35), 0 0 80px rgba(168, 85, 247, 0.25)",
                animation: "floatSlow 6s ease-in-out infinite",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "4px solid #050814",
                  background: "#091024",
                  position: "relative",
                }}
              >
                <img
                  src={personalData.portraitUrl}
                  alt="Rasheeqa Sabreen Z - AI & Data Science Student and Web Developer"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 20%",
                    display: "block",
                  }}
                  onError={(e) => {
                    // Fallback visual avatar if image path fails
                    e.target.style.display = "none";
                    e.target.parentNode.style.display = "flex";
                    e.target.parentNode.style.alignItems = "center";
                    e.target.parentNode.style.justifyContent = "center";
                    e.target.parentNode.innerHTML =
                      '<div style="text-align:center;color:#38bdf8;font-weight:700;font-size:2rem;">RZ</div>';
                  }}
                />
              </div>

              {/* Floating Badge 1: AI & Data Science */}
              <div
                style={{
                  position: "absolute",
                  top: "10%",
                  left: "-25px",
                  padding: "8px 16px",
                  borderRadius: "14px",
                  background: "rgba(15, 23, 42, 0.85)",
                  backdropFilter: "blur(14px)",
                  border: "1px solid rgba(56, 189, 248, 0.4)",
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#ffffff",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                <Cpu size={16} color="var(--aurora-cyan)" />
                <span>AI &amp; Data Science</span>
              </div>

              {/* Floating Badge 2: Web Developer */}
              <div
                style={{
                  position: "absolute",
                  bottom: "8%",
                  right: "-20px",
                  padding: "8px 16px",
                  borderRadius: "14px",
                  background: "rgba(15, 23, 42, 0.85)",
                  backdropFilter: "blur(14px)",
                  border: "1px solid rgba(168, 85, 247, 0.4)",
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#ffffff",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                <Sparkles size={16} color="var(--aurora-purple)" />
                <span>CGPA 8.5 &bull; Achariya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          onClick={() => scrollTo("about")}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            marginTop: "60px",
            cursor: "pointer",
            color: "var(--text-muted)",
            transition: "all var(--transition-fast)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--aurora-cyan)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--text-muted)";
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Scroll to explore
          </span>
          <ChevronDown
            size={18}
            style={{
              animation: "bounce 2s infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(8px);
          }
          60% {
            transform: translateY(4px);
          }
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
