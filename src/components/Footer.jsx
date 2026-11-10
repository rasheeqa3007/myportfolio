import React from "react";
import { Mail, Heart, Sparkles, ArrowUp } from "lucide-react";
import { Github, Linkedin } from "./SocialIcons";
import { personalData } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        background: "rgba(3, 6, 17, 0.95)",
        position: "relative",
        zIndex: 1,
        padding: "60px 24px 36px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
        }}
      >
        {/* Top Tier */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
            marginBottom: "40px",
          }}
        >
          {/* Brand & Monogram */}
          <div style={{ maxWidth: "380px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "8px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(135deg, rgba(56, 189, 248, 0.25), rgba(168, 85, 247, 0.25))",
                  border: "1px solid rgba(56, 189, 248, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "0.9rem",
                  color: "#ffffff",
                }}
              >
                RZ
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  letterSpacing: "0.02em",
                  color: "#ffffff",
                }}
              >
                RASHEEQA SABREEN Z
              </span>
            </div>

            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
              AI &amp; Data Science Student &bull; Web Developer &bull; Creative Technologist. Dedicated to building elegant, high-impact digital experiences.
            </p>
          </div>

          {/* Social Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rasheeqa Sabreen LinkedIn profile (opens in new tab)"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                background: "rgba(15, 23, 42, 0.7)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                color: "var(--aurora-cyan)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all var(--transition-fast)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.borderColor = "var(--aurora-cyan)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.3)";
              }}
            >
              <Linkedin size={18} />
            </a>

            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rasheeqa Sabreen GitHub profile (opens in new tab)"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                background: "rgba(15, 23, 42, 0.7)",
                border: "1px solid rgba(168, 85, 247, 0.3)",
                color: "var(--aurora-purple)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all var(--transition-fast)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.borderColor = "var(--aurora-purple)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.3)";
              }}
            >
              <Github size={18} />
            </a>

            <a
              href={`mailto:${personalData.email}`}
              aria-label="Email Rasheeqa Sabreen directly"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                background: "rgba(15, 23, 42, 0.7)",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                color: "var(--aurora-emerald)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all var(--transition-fast)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.borderColor = "var(--aurora-emerald)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.3)";
              }}
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Quick Footer Links */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "32px",
            paddingTop: "20px",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: "0.85rem",
                color: "var(--text-secondary)",
                transition: "color var(--transition-fast)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--aurora-cyan)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Bottom Tier: Copyright & Attributions */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            fontFamily: "var(--font-mono)",
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Rasheeqa Sabreen Z. All rights reserved.
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span>Crafted with React, Vite &amp; Modern Glassmorphism</span>
            <Sparkles size={13} color="var(--aurora-cyan)" />
          </div>
        </div>
      </div>
    </footer>
  );
}
