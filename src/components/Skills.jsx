import React, { useState } from "react";
import {
  Code2,
  Terminal,
  Layout,
  Wrench,
  Layers,
  FileCode,
  Coffee,
  Binary,
  Database,
  Code,
  Palette,
  Zap,
  Bot,
  PenTool,
  Image,
  Boxes,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { skillsCategories } from "../data/portfolioData";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const iconMap = {
    Terminal,
    Layout,
    Wrench,
    FileCode,
    Coffee,
    Binary,
    Database,
    Code,
    Palette,
    Zap,
    Layers,
    Bot,
    PenTool,
    Image,
    Boxes,
  };

  const allSkills = skillsCategories.flatMap((cat) =>
    cat.skills.map((skill) => ({
      ...skill,
      categoryName: cat.name,
      categoryId: cat.id,
    }))
  );

  const displayedSkills =
    selectedCategory === "all"
      ? allSkills
      : allSkills.filter((s) => s.categoryId === selectedCategory);

  return (
    <section id="skills" className="section-container">
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <Code2 size={14} />
          <span>// 03. TECHNICAL CAPABILITIES</span>
        </div>
        <h2 className="section-title">
          The Skills <span className="gradient-text">Universe</span>
        </h2>
        <p className="section-subtitle">
          Core programming fundamentals, modern web architectures, and automation tools practiced across academic curricula and industry internships.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "12px",
          marginBottom: "48px",
        }}
      >
        <button
          onClick={() => setSelectedCategory("all")}
          className="btn"
          style={{
            padding: "9px 20px",
            borderRadius: "9999px",
            fontSize: "0.88rem",
            background:
              selectedCategory === "all"
                ? "linear-gradient(135deg, rgba(56, 189, 248, 0.25), rgba(168, 85, 247, 0.25))"
                : "rgba(15, 23, 42, 0.6)",
            border:
              selectedCategory === "all"
                ? "1px solid var(--aurora-cyan)"
                : "1px solid var(--glass-border)",
            color: selectedCategory === "all" ? "#ffffff" : "var(--text-secondary)",
            boxShadow:
              selectedCategory === "all"
                ? "0 0 20px rgba(56, 189, 248, 0.25)"
                : "none",
          }}
        >
          <Sparkles size={15} color="var(--aurora-cyan)" />
          <span>All Capabilities ({allSkills.length})</span>
        </button>

        {skillsCategories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const CatIcon = iconMap[cat.icon] || Code2;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className="btn"
              style={{
                padding: "9px 20px",
                borderRadius: "9999px",
                fontSize: "0.88rem",
                background: isSelected
                  ? "linear-gradient(135deg, rgba(56, 189, 248, 0.25), rgba(168, 85, 247, 0.25))"
                  : "rgba(15, 23, 42, 0.6)",
                border: isSelected
                  ? "1px solid var(--aurora-cyan)"
                  : "1px solid var(--glass-border)",
                color: isSelected ? "#ffffff" : "var(--text-secondary)",
                boxShadow: isSelected
                  ? "0 0 20px rgba(56, 189, 248, 0.25)"
                  : "none",
              }}
            >
              <CatIcon
                size={15}
                color={isSelected ? "var(--aurora-cyan)" : "var(--text-muted)"}
              />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Tiles Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "22px",
          marginBottom: "40px",
        }}
      >
        {displayedSkills.map((skill, index) => {
          const Icon = iconMap[skill.icon] || Terminal;

          return (
            <div
              key={`${skill.name}-${index}`}
              className="glass-panel interactive-card"
              style={{
                padding: "24px",
                borderRadius: "18px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "155px",
                background: "rgba(15, 23, 42, 0.65)",
              }}
            >
              {/* Top row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "14px",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background:
                      "linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(129, 140, 248, 0.15))",
                    border: "1px solid rgba(56, 189, 248, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 15px rgba(56, 189, 248, 0.12)",
                  }}
                >
                  <Icon size={22} color="var(--aurora-cyan)" />
                </div>

                <span className="tag-badge">{skill.tag}</span>
              </div>

              {/* Skill Name */}
              <div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "4px",
                  }}
                >
                  {skill.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--text-secondary)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {skill.note}
                </p>
              </div>

              {/* Subtle Category label on card bottom */}
              <div
                style={{
                  marginTop: "14px",
                  paddingTop: "10px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "0.74rem",
                  color: "var(--text-muted)",
                }}
              >
                <span>{skill.categoryName}</span>
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "var(--aurora-cyan)",
                    opacity: 0.7,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Recruiter-Friendly Quality Note */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          padding: "14px 20px",
          borderRadius: "12px",
          background: "rgba(15, 23, 42, 0.4)",
          border: "1px dashed rgba(255, 255, 255, 0.1)",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <ShieldCheck size={16} color="var(--aurora-emerald)" />
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.78rem",
            color: "var(--text-muted)",
            textAlign: "center",
          }}
        >
          All technologies reflect verified hands-on coursework, training, or internship applications without arbitrary percentages.
        </span>
      </div>
    </section>
  );
}
