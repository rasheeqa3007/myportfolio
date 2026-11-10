import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  FileDown,
  Sparkles,
  ArrowUp,
  Compass,
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Mail,
  User,
} from "lucide-react";
import { personalData } from "../data/portfolioData";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { label: "Home", href: "#home", id: "home", icon: Compass },
    { label: "About", href: "#about", id: "about", icon: User },
    { label: "Education", href: "#education", id: "education", icon: GraduationCap },
    { label: "Skills", href: "#skills", id: "skills", icon: Code2 },
    { label: "Projects", href: "#projects", id: "projects", icon: Sparkles },
    { label: "Experience", href: "#experience", id: "experience", icon: Briefcase },
    { label: "Certifications", href: "#certifications", id: "certifications", icon: Award },
    { label: "Contact", href: "#contact", id: "contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      setShowBackToTop(scrollY > 400);

      // Calculate scroll progress percentage
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress((scrollY / docHeight) * 100);
      }

      // Active section detection
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Navbar */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "var(--nav-height)",
          zIndex: 100,
          transition: "all var(--transition-smooth)",
          background: isScrolled
            ? "rgba(5, 8, 20, 0.82)"
            : "rgba(5, 8, 20, 0.35)",
          backdropFilter: isScrolled ? "blur(18px)" : "blur(8px)",
          WebkitBackdropFilter: isScrolled ? "blur(18px)" : "blur(8px)",
          borderBottom: isScrolled
            ? "1px solid rgba(255, 255, 255, 0.08)"
            : "1px solid transparent",
          boxShadow: isScrolled
            ? "0 10px 30px -10px rgba(0, 0, 0, 0.5)"
            : "none",
        }}
      >
        <div
          style={{
            maxWidth: "var(--max-width)",
            margin: "0 auto",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
          }}
        >
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
              color: "#ffffff",
            }}
            aria-label="Rasheeqa Sabreen Z Portfolio"
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(168, 85, 247, 0.2))",
                border: "1px solid rgba(56, 189, 248, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 15px rgba(56, 189, 248, 0.3)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  background: "linear-gradient(135deg, #38bdf8, #c084fc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                RZ
              </span>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  letterSpacing: "0.02em",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                RASHEEQA
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "var(--aurora-cyan)",
                    boxShadow: "0 0 8px var(--aurora-cyan)",
                    display: "inline-block",
                  }}
                />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                PORTFOLIO
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "4px",
              background: "rgba(15, 23, 42, 0.55)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              padding: "4px 8px",
              borderRadius: "9999px",
              backdropFilter: "blur(12px)",
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  style={{
                    padding: "7px 14px",
                    borderRadius: "9999px",
                    fontSize: "0.85rem",
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? "#ffffff" : "var(--text-secondary)",
                    background: isActive
                      ? "linear-gradient(135deg, rgba(56, 189, 248, 0.22), rgba(129, 140, 248, 0.22))"
                      : "transparent",
                    border: isActive
                      ? "1px solid rgba(56, 189, 248, 0.4)"
                      : "1px solid transparent",
                    boxShadow: isActive
                      ? "0 0 16px rgba(56, 189, 248, 0.2)"
                      : "none",
                    transition: "all var(--transition-fast)",
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Header Action: Quick Resume */}
          <div
            style={{
              display: "none",
              alignItems: "center",
              gap: "12px",
            }}
            className="desktop-actions"
          >
            <a
              href={personalData.resumeUrl}
              download="Rasheeqa_Sabreen_Resume.pdf"
              className="btn btn-primary"
              style={{
                padding: "8px 18px",
                fontSize: "0.85rem",
                borderRadius: "9999px",
              }}
            >
              <FileDown size={15} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "42px",
              height: "42px",
              borderRadius: "12px",
              background: "rgba(15, 23, 42, 0.7)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "#ffffff",
              cursor: "pointer",
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Global Scroll Progress Bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: `${scrollProgress}%`,
            height: "2px",
            background:
              "linear-gradient(90deg, #38bdf8, #818cf8, #c084fc, #e879f9)",
            boxShadow: "0 0 8px rgba(56, 189, 248, 0.7)",
            transition: "width 0.1s ease-out",
          }}
        />
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "var(--nav-height)",
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(5, 8, 20, 0.94)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            padding: "24px",
            overflowY: "auto",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              marginBottom: "24px",
            }}
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "14px 18px",
                    borderRadius: "14px",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: isActive ? "var(--aurora-cyan)" : "#ffffff",
                    background: isActive
                      ? "rgba(56, 189, 248, 0.1)"
                      : "rgba(255, 255, 255, 0.02)",
                    border: isActive
                      ? "1px solid rgba(56, 189, 248, 0.3)"
                      : "1px solid transparent",
                  }}
                >
                  <Icon size={18} color={isActive ? "var(--aurora-cyan)" : "var(--text-secondary)"} />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          <div style={{ marginTop: "auto", paddingTop: "16px" }}>
            <a
              href={personalData.resumeUrl}
              download="Rasheeqa_Sabreen_Resume.pdf"
              className="btn btn-primary"
              style={{ width: "100%", padding: "14px", borderRadius: "14px" }}
            >
              <FileDown size={18} />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Back-to-Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          style={{
            position: "fixed",
            bottom: "28px",
            right: "28px",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "rgba(15, 23, 42, 0.8)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(56, 189, 248, 0.4)",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(56, 189, 248, 0.25)",
            zIndex: 90,
            transition: "all var(--transition-fast)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(56, 189, 248, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(56, 189, 248, 0.25)";
          }}
        >
          <ArrowUp size={20} color="var(--aurora-cyan)" />
        </button>
      )}

      {/* Responsive media query helper styles in CSS */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
