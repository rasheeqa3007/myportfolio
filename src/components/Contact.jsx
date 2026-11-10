import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  FileDown,
  Copy,
  Check,
  Sparkles,
  AlertCircle,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { Github, Linkedin } from "./SocialIcons";
import confetti from "canvas-confetti";
import { personalData } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = "Please enter a subject (at least 3 characters).";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please write a message of at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#38bdf8", "#818cf8", "#c084fc", "#10b981"],
      });
    } catch {
      // Ignore if canvas-confetti is not loaded
    }

    // Format mailto link with encoded parameters
    const mailtoUrl = `mailto:${personalData.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;

    // Open mail client
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyMessage = () => {
    const text = `Subject: ${formData.subject}\nFrom: ${formData.name} <${formData.email}>\n\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  return (
    <section id="contact" className="section-container">
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <Mail size={14} />
          <span>// 07. GET IN TOUCH</span>
        </div>
        <h2 className="section-title">
          Let&apos;s Build <span className="gradient-text">Something Meaningful</span>
        </h2>
        <p className="section-subtitle">
          Open to software internships, frontend development roles, research collaborations, and creative technical dialogues.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "40px",
          maxWidth: "1050px",
          margin: "0 auto",
        }}
        className="contact-grid"
      >
        {/* Left Column: Direct Contact Details & Links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Email Card */}
          <div
            className="glass-panel"
            style={{
              padding: "24px",
              borderRadius: "18px",
              background: "rgba(15, 23, 42, 0.75)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "var(--aurora-cyan)",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(56, 189, 248, 0.12)",
                    border: "1px solid rgba(56, 189, 248, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    Direct Email
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      color: "#ffffff",
                    }}
                  >
                    Email Inbox
                  </div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="btn btn-ghost"
                style={{
                  padding: "6px 12px",
                  fontSize: "0.78rem",
                  borderRadius: "8px",
                }}
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check size={14} color="#10b981" />
                    <span style={{ color: "#10b981" }}>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <a
              href={`mailto:${personalData.email}`}
              style={{
                display: "inline-block",
                color: "var(--aurora-cyan)",
                fontSize: "0.95rem",
                fontFamily: "var(--font-mono)",
                wordBreak: "break-all",
              }}
            >
              {personalData.email}
            </a>
          </div>

          {/* Social Profiles Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
            }}
          >
            {/* LinkedIn */}
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel interactive-card"
              style={{
                padding: "20px",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
                background: "rgba(15, 23, 42, 0.7)",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "rgba(56, 189, 248, 0.12)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--aurora-cyan)",
                }}
              >
                <Linkedin size={22} />
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  LinkedIn <ExternalLink size={12} />
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  /in/rasheeqa-sabreen-z
                </div>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel interactive-card"
              style={{
                padding: "20px",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
                background: "rgba(15, 23, 42, 0.7)",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "rgba(168, 85, 247, 0.12)",
                  border: "1px solid rgba(168, 85, 247, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--aurora-purple)",
                }}
              >
                <Github size={22} />
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  GitHub <ExternalLink size={12} />
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  @rasheeqa3007
                </div>
              </div>
            </a>
          </div>

          {/* Location & Resume Download CTA */}
          <div
            className="glass-panel"
            style={{
              padding: "24px",
              borderRadius: "18px",
              background:
                "linear-gradient(135deg, rgba(56, 189, 248, 0.08), rgba(168, 85, 247, 0.08))",
              border: "1px solid rgba(56, 189, 248, 0.25)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "14px",
              }}
            >
              <MapPin size={18} color="var(--aurora-cyan)" />
              <span style={{ fontSize: "0.9rem", color: "#cbd5e1" }}>
                Puducherry, India &bull; Open to Remote &amp; On-Site Opportunities
              </span>
            </div>

            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--text-secondary)",
                marginBottom: "20px",
              }}
            >
              Need a comprehensive breakdown of coursework, projects, and credentials for your recruitment pipeline?
            </p>

            <a
              href={personalData.resumeUrl}
              download="Rasheeqa_Sabreen_Resume.pdf"
              className="btn btn-primary"
              style={{ width: "100%", padding: "12px" }}
            >
              <FileDown size={18} />
              <span>Download Official Resume PDF</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form with Validation */}
        <div
          className="glass-panel"
          style={{
            padding: "36px",
            borderRadius: "24px",
            background: "rgba(13, 20, 44, 0.8)",
            border: "1px solid rgba(56, 189, 248, 0.3)",
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
            <MessageSquare size={18} color="var(--aurora-cyan)" />
            <h3 style={{ fontSize: "1.3rem", color: "#ffffff" }}>
              Send a Direct Message
            </h3>
          </div>
          <p
            style={{
              fontSize: "0.88rem",
              color: "var(--text-muted)",
              marginBottom: "24px",
            }}
          >
            Fill out the details below. This will validate your inputs and prepare your email dispatch.
          </p>

          {submitted && (
            <div
              style={{
                padding: "16px 20px",
                borderRadius: "14px",
                background: "rgba(16, 185, 129, 0.12)",
                border: "1px solid rgba(16, 185, 129, 0.4)",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#34d399",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  marginBottom: "6px",
                }}
              >
                <Sparkles size={18} />
                <span>Ready to Dispatch!</span>
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "#e2e8f0",
                  lineHeight: 1.6,
                  marginBottom: "12px",
                }}
              >
                Your mail application has been triggered with your prefilled message. Since this static portfolio has no backend database, you can also copy your message below to send via your preferred email tool.
              </p>
              <button
                type="button"
                onClick={handleCopyMessage}
                className="btn btn-secondary"
                style={{
                  padding: "8px 16px",
                  fontSize: "0.82rem",
                  borderRadius: "8px",
                }}
              >
                {copiedMessage ? (
                  <>
                    <Check size={14} color="#10b981" />
                    <span>Message Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Form Text to Clipboard</span>
                  </>
                )}
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            {/* Name Field */}
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  color: "#cbd5e1",
                  marginBottom: "8px",
                }}
              >
                Your Name <span style={{ color: "var(--aurora-cyan)" }}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Alex Morgan"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "12px",
                  background: "rgba(10, 16, 36, 0.8)",
                  border: errors.name
                    ? "1px solid #ef4444"
                    : "1px solid rgba(255, 255, 255, 0.12)",
                  color: "#ffffff",
                  fontSize: "0.95rem",
                  fontFamily: "var(--font-body)",
                }}
              />
              {errors.name && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#f87171",
                    fontSize: "0.78rem",
                    marginTop: "6px",
                  }}
                >
                  <AlertCircle size={13} />
                  <span>{errors.name}</span>
                </div>
              )}
            </div>

            {/* Email Field */}
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  color: "#cbd5e1",
                  marginBottom: "8px",
                }}
              >
                Your Email Address{" "}
                <span style={{ color: "var(--aurora-cyan)" }}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. alex@company.com"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "12px",
                  background: "rgba(10, 16, 36, 0.8)",
                  border: errors.email
                    ? "1px solid #ef4444"
                    : "1px solid rgba(255, 255, 255, 0.12)",
                  color: "#ffffff",
                  fontSize: "0.95rem",
                  fontFamily: "var(--font-body)",
                }}
              />
              {errors.email && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#f87171",
                    fontSize: "0.78rem",
                    marginTop: "6px",
                  }}
                >
                  <AlertCircle size={13} />
                  <span>{errors.email}</span>
                </div>
              )}
            </div>

            {/* Subject Field */}
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="subject"
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  color: "#cbd5e1",
                  marginBottom: "8px",
                }}
              >
                Subject <span style={{ color: "var(--aurora-cyan)" }}>*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Internship Opportunity / Technical Collaboration"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "12px",
                  background: "rgba(10, 16, 36, 0.8)",
                  border: errors.subject
                    ? "1px solid #ef4444"
                    : "1px solid rgba(255, 255, 255, 0.12)",
                  color: "#ffffff",
                  fontSize: "0.95rem",
                  fontFamily: "var(--font-body)",
                }}
              />
              {errors.subject && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#f87171",
                    fontSize: "0.78rem",
                    marginTop: "6px",
                  }}
                >
                  <AlertCircle size={13} />
                  <span>{errors.subject}</span>
                </div>
              )}
            </div>

            {/* Message Field */}
            <div style={{ marginBottom: "28px" }}>
              <label
                htmlFor="message"
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  color: "#cbd5e1",
                  marginBottom: "8px",
                }}
              >
                Message <span style={{ color: "var(--aurora-cyan)" }}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Share project goals, timeline, or inquiries..."
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: "12px",
                  background: "rgba(10, 16, 36, 0.8)",
                  border: errors.message
                    ? "1px solid #ef4444"
                    : "1px solid rgba(255, 255, 255, 0.12)",
                  color: "#ffffff",
                  fontSize: "0.95rem",
                  fontFamily: "var(--font-body)",
                  resize: "vertical",
                }}
              />
              {errors.message && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#f87171",
                    fontSize: "0.78rem",
                    marginTop: "6px",
                  }}
                >
                  <AlertCircle size={13} />
                  <span>{errors.message}</span>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: "100%",
                padding: "14px 28px",
                fontSize: "1rem",
                borderRadius: "14px",
              }}
            >
              <Send size={18} />
              <span>Send Message</span>
            </button>
          </form>

          {/* Backend Fallback Explanation Note */}
          <div
            style={{
              marginTop: "20px",
              paddingTop: "16px",
              borderTop: "1px solid rgba(255, 255, 255, 0.06)",
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              fontFamily: "var(--font-mono)",
              lineHeight: 1.6,
            }}
          >
            Note: As a client-side portfolio, this form triggers an authenticated mailto action. To configure backend email delivery directly, connect an API key via Formspree or EmailJS.
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
