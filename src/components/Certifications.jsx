import React, { useState } from "react";
import {
  Award,
  ExternalLink,
  FileCheck,
  Building,
  Calendar,
  CheckCircle,
  Eye,
  X,
  FileDown,
} from "lucide-react";
import { certificationsData } from "../data/portfolioData";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="section-container">
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <Award size={14} />
          <span>// 06. CREDENTIALS &amp; CERTIFICATIONS</span>
        </div>
        <h2 className="section-title">
          Verified <span className="gradient-text">Certifications</span>
        </h2>
        <p className="section-subtitle">
          Officially completed diplomas and verified technical training programs spanning Robotic Process Automation, Systems Programming, and AI.
        </p>
      </div>

      {/* Certifications Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "24px",
        }}
      >
        {certificationsData.map((cert) => (
          <div
            key={cert.id}
            className="glass-panel interactive-card"
            style={{
              padding: "28px",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background: "rgba(15, 23, 42, 0.7)",
              position: "relative",
            }}
          >
            <div>
              {/* Top Row: Issuer & Badge */}
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
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    color: "var(--aurora-cyan)",
                    background: "rgba(56, 189, 248, 0.1)",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    border: "1px solid rgba(56, 189, 248, 0.25)",
                  }}
                >
                  <Building size={14} />
                  <span>{cert.issuer}</span>
                </div>

                <span className="tag-badge">{cert.badge}</span>
              </div>

              {/* Certificate Title */}
              <h3
                style={{
                  fontSize: "1.2rem",
                  marginBottom: "8px",
                  color: "#ffffff",
                  lineHeight: 1.4,
                }}
              >
                {cert.title}
              </h3>

              {/* Subtitle / Type */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.82rem",
                  color: "var(--aurora-violet)",
                  fontFamily: "var(--font-mono)",
                  marginBottom: "14px",
                }}
              >
                <FileCheck size={14} />
                <span>{cert.type}</span>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.88rem",
                  lineHeight: 1.65,
                  color: "var(--text-secondary)",
                  marginBottom: "18px",
                }}
              >
                {cert.description}
              </p>

              {/* Skills Tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  marginBottom: "24px",
                }}
              >
                {cert.skills.map((s, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: "0.75rem",
                      padding: "3px 8px",
                      borderRadius: "6px",
                      background: "rgba(255, 255, 255, 0.04)",
                      color: "#cbd5e1",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions: View PDF / Open Certificate */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "16px",
                borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                gap: "12px",
              }}
            >
              <a
                href={cert.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  flexGrow: 1,
                  padding: "9px 14px",
                  fontSize: "0.82rem",
                  borderRadius: "10px",
                }}
              >
                <Eye size={15} color="var(--aurora-cyan)" />
                <span>View Certificate</span>
                <ExternalLink size={13} />
              </a>

              <a
                href={cert.fileUrl}
                download
                className="btn btn-ghost"
                style={{
                  padding: "9px 14px",
                  borderRadius: "10px",
                }}
                title="Download Certificate File"
                aria-label={`Download ${cert.title}`}
              >
                <FileDown size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
