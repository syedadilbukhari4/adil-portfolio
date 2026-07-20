import { useState } from "react";

const SOCIALS = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/syed-adil-bukhari-a988142b7", color: "#0A66C2", bg: "#0A66C215" },
  { label: "GitHub", url: "https://github.com/syedadilbukhari4", color: "#E8EDF5", bg: "#E8EDF510" },
  { label: "Email", url: "mailto:syedadilbukhari4444@gmail.com", color: "#EA4335", bg: "#EA433515" },
];

const CATEGORIES = [
  {
    id: "cv",
    title: "Computer Vision",
    accent: "#00D4FF",
    summary: "I've built real-time computer vision systems that run under production constraints — low latency, multi-threaded pipelines, and accurate detection using dlib and YOLO. These projects came out of wanting to solve real safety problems, not just demonstrate techniques.",
    bullets: [
      "AlertEye is my most complete project — four detection modes running simultaneously at 25 FPS.",
      "DRS Stream Analysis was built as part of a team with Jira-managed sprints and GitHub version control.",
    ],
    projects: [
      {
        name: "AlertEye",
        subtitle: "Real-Time Driver Monitoring · Final Year Project",
        desc: "Detects drowsiness, yawning, phone usage, and dangerous head tilt from a single webcam at 25 FPS with under 400ms latency. FastAPI backend streams processed frames to a Flutter mobile UI with audio alerts.",
        tags: ["Python", "FastAPI", "YOLOv5", "dlib", "OpenCV", "Flutter"],
        github: "https://github.com/syedadilbukhari4/AlertEye",
      },
      {
        name: "DRS Stream Analysis & Overlay",
        subtitle: "Decision Review System · Mar–May 2025",
        desc: "Built the overlay module for a mobile cricket DRS — receives ball trajectory data, overlays it on video frames using OpenCV, and returns OUT/NOT OUT verdict video via FastAPI.",
        tags: ["FastAPI", "OpenCV", "Python", "Jira", "GitHub"],
        github: "https://github.com/mabdullahsaqib/Mobile-DRS-System",
      },
    ],
  },
  {
    id: "ai",
    title: "AI & LLMs",
    accent: "#7C3AED",
    summary: "I've worked with large language models for practical applications — resume analysis and document querying. The focus has always been on building something genuinely useful rather than just integrating an API.",
    bullets: [
      "ResumeIQ combines LLM reasoning with structured document parsing to give actionable career feedback.",
      "RAG Document Assistant shows my understanding of vector search and retrieval pipelines.",
    ],
    projects: [
      {
        name: "ResumeIQ",
        subtitle: "AI Resume Analyzer",
        desc: "Matches resumes against job descriptions using the Gemini API — surfaces skill gaps, generates tailored interview questions, and builds personalized learning roadmaps. Built with FastAPI and PyPDF2.",
        tags: ["Python", "FastAPI", "Gemini API", "RAG", "NLP", "PyPDF2"],
        github: "https://github.com/syedadilbukhari4",
      },
      {
        name: "RAG Document Assistant",
        subtitle: "Retrieval-Augmented Generation",
        desc: "Natural language PDF querying with source-referenced, context-aware answers. Built on LangChain, ChromaDB vector store, and HuggingFace embeddings.",
        tags: ["LangChain", "ChromaDB", "HuggingFace", "FastAPI", "Gemini"],
        github: "https://github.com/syedadilbukhari4",
      },
    ],
  },
];

const ALL_SKILLS = [
  { group: "Languages", items: ["Python", "SQL", "C++", "C", "Dart"] },
  { group: "Frameworks & Libraries", items: ["FastAPI", "Django", "Flutter", "React", "Streamlit", "OpenCV", "TensorFlow"] },
  { group: "AI / ML", items: ["YOLOv5/v8", "dlib", "LangChain", "RAG", "Gemini API", "HuggingFace", "CNNs", "NLP"] },
  { group: "Databases", items: ["MySQL", "ChromaDB", "Vector DBs"] },
  { group: "Cloud & Tools", items: ["AWS EC2", "S3", "IAM", "Git", "Jira", "Linux", "VS Code"] },
];

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: #111118; color: #C4CADA; font-family: 'Inter', sans-serif; }
  a { color: inherit; text-decoration: none; }

  .page { max-width: 700px; margin: 0 auto; padding: 64px 28px 100px; }

  .hero {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 28px;
    margin-bottom: 28px;
    flex-wrap: wrap;
  }
  .hero-text { flex: 1; min-width: 200px; }

  .name {
    font-family: 'Syne', sans-serif;
    font-size: clamp(38px, 8vw, 68px);
    font-weight: 800;
    color: #F0F4FF;
    line-height: 1.0;
    letter-spacing: -1px;
    margin-bottom: 0;
  }

  .photo {
    width: 120px;
    height: 148px;
    object-fit: cover;
    object-position: center top;
    border-radius: 8px;
    border: 2px solid #1E2130;
    flex-shrink: 0;
    display: block;
  }

  .intro {
    font-size: 14.5px;
    line-height: 1.88;
    color: #9AA3B2;
    margin-bottom: 32px;
    border-left: 2px solid #1E2130;
    padding-left: 16px;
  }

  .connect-title {
    font-family: 'Syne', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #F0F4FF;
    margin-bottom: 12px;
  }

  .social-btn {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-radius: 6px;
    border: 1px solid #1E2130;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.18s ease;
    width: 100%;
  }
  .social-btn:hover {
    border-color: #2E3148;
    background: #1A1D28 !important;
    transform: translateX(3px);
  }
  .social-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

  .divider { border: none; border-top: 1px solid #1E2130; margin: 52px 0; }

  .section-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(26px, 5vw, 42px);
    font-weight: 800;
    color: #F0F4FF;
    letter-spacing: -0.5px;
    margin-bottom: 36px;
  }

  .cat-label {
    display: inline-block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 3px;
    margin-bottom: 10px;
  }

  .cat-box {
    border-radius: 8px;
    padding: 18px 20px 14px;
    margin-bottom: 18px;
  }

  .cat-summary {
    font-size: 13.5px;
    line-height: 1.82;
    color: #9AA3B2;
    margin-bottom: 10px;
  }

  .cat-bullets { list-style: none; display: flex; flex-direction: column; gap: 5px; }
  .cat-bullets li {
    font-size: 13px; color: #9AA3B2; padding-left: 16px;
    position: relative; line-height: 1.7;
  }
  .cat-bullets li::before { content: "–"; position: absolute; left: 0; color: #3A3F50; }

  .projects-label {
    font-family: 'Syne', sans-serif;
    font-size: 14px; font-weight: 700;
    color: #F0F4FF; margin-bottom: 10px;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
    gap: 10px;
    margin-bottom: 6px;
  }

  .project-card {
    background: #16181F;
    border: 1px solid #1E2130;
    border-radius: 8px;
    padding: 18px;
    display: flex;
    flex-direction: column;
    gap: 9px;
    transition: all 0.18s ease;
  }
  .project-card:hover {
    border-color: #2E3148;
    background: #1C1E28;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.35);
  }

  .project-name {
    font-family: 'Syne', sans-serif;
    font-size: 15px; font-weight: 700;
    color: #F0F4FF; line-height: 1.2;
  }
  .project-subtitle {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px; color: #4A5060; letter-spacing: 0.3px;
    margin-top: -3px;
  }
  .project-desc {
    font-size: 12.5px; color: #8892A4;
    line-height: 1.72; flex: 1;
  }
  .project-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-top: auto; padding-top: 4px; }
  .tag {
    font-size: 10px; font-family: 'JetBrains Mono', monospace;
    color: #4A5060; background: #1E2130;
    padding: 3px 7px; border-radius: 2px;
  }
  .click-hint { font-size: 11px; color: #3A3F50; font-style: italic; margin-top: 2px; }

  .skills-groups { display: flex; flex-direction: column; gap: 16px; }
  .skill-group-name {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px; color: #4A5060;
    letter-spacing: 2px; text-transform: uppercase; margin-bottom: 7px;
  }
  .skill-pills { display: flex; flex-wrap: wrap; gap: 6px; }
  .skill-pill {
    font-size: 12px; color: #9AA3B2;
    background: #16181F; border: 1px solid #1E2130;
    padding: 5px 11px; border-radius: 4px; transition: all 0.15s;
  }
  .skill-pill:hover { color: #C4CADA; border-color: #2E3148; }

  .exp-card {
    border-left: 2px solid #1E2130;
    padding-left: 20px; margin-bottom: 26px;
  }
  .exp-role {
    font-family: 'Syne', sans-serif;
    font-size: 15px; font-weight: 700;
    color: #F0F4FF; margin-bottom: 2px;
  }
  .exp-meta {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10.5px; color: #4A5060;
    margin-bottom: 9px; letter-spacing: 0.3px;
  }
  .exp-points { list-style: none; display: flex; flex-direction: column; gap: 5px; }
  .exp-points li {
    font-size: 13px; color: #9AA3B2; line-height: 1.72;
    padding-left: 14px; position: relative;
  }
  .exp-points li::before { content: "–"; position: absolute; left: 0; color: #2E3148; }

  .footer {
    margin-top: 72px; padding-top: 22px;
    border-top: 1px solid #1E2130;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10.5px; color: #2E3148; letter-spacing: 0.5px;
  }

  @media (max-width: 500px) {
    .page { padding: 40px 18px 80px; }
    .hero { flex-direction: row; align-items: flex-start; }
    .photo { width: 100px; height: 124px; }
    .projects-grid { grid-template-columns: 1fr; }
    .name { font-size: clamp(32px, 10vw, 52px); }
  }
`;

function SocialBtn({ label, url, color, bg }) {
  return (
    <a href={url} target={url.startsWith("mailto") ? undefined : "_blank"}
      rel="noreferrer" className="social-btn" style={{ background: bg, color }}>
      <span className="social-dot" style={{ background: color }} />
      {label}
    </a>
  );
}

function CategorySection({ cat }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <span className="cat-label" style={{ color: cat.accent, background: cat.accent + "16" }}>
        {cat.title}
      </span>
      <div className="cat-box" style={{ background: "#16181F", border: `1px solid ${cat.accent}20` }}>
        <p className="cat-summary">{cat.summary}</p>
        <ul className="cat-bullets">
          {cat.bullets.map(b => <li key={b}>{b}</li>)}
        </ul>
      </div>
      <div className="projects-label">Featured {cat.title} Projects</div>
      <div className="projects-grid">
        {cat.projects.map(p => (
          <a key={p.name} href={p.github} target="_blank" rel="noreferrer" className="project-card">
            <div>
              <div className="project-name">{p.name}</div>
              <div className="project-subtitle">{p.subtitle}</div>
            </div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
              {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </a>
        ))}
      </div>
      <div className="click-hint">Click on each card to view on GitHub</div>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ background: "#111118", minHeight: "100vh" }}>
      <style>{css}</style>
      <div className="page">

        {/* Hero */}
        <div className="hero">
          <div className="hero-text">
            <h1 className="name">Syed Adil<br />Bukhari</h1>
          </div>
          <img src="/adil.jpeg" alt="Syed Adil Bukhari" className="photo" />
        </div>

        {/* Intro */}
        <p className="intro">
          CS graduate from FAST-NUCES Lahore with a strong interest in Artificial Intelligence,
          Machine Learning, and software development. My learning has come from a combination of
          coursework, self-study, and hands-on projects — I enjoy applying concepts to solve real
          problems. Experienced with Python, C++, and SQL, and comfortable picking up new
          technologies and working through challenges. Currently focused on growing my expertise
          in AI and software engineering while seeking opportunities to contribute and build
          meaningful things through technology.
        </p>

        {/* Connect */}
        <div className="connect-title">Connect with Me</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 9, maxWidth: 380, marginBottom: 8 }}>
          {SOCIALS.map(s => <SocialBtn key={s.label} {...s} />)}
        </div>

        <hr className="divider" />

        {/* Work */}
        <div className="section-title">My Work</div>
        {CATEGORIES.map(cat => <CategorySection key={cat.id} cat={cat} />)}

        <hr className="divider" />

        {/* Skills */}
        <div className="section-title" style={{ marginBottom: 24 }}>Skills</div>
        <div className="skills-groups">
          {ALL_SKILLS.map(sg => (
            <div key={sg.group}>
              <div className="skill-group-name">{sg.group}</div>
              <div className="skill-pills">
                {sg.items.map(i => <span key={i} className="skill-pill">{i}</span>)}
              </div>
            </div>
          ))}
        </div>

        <hr className="divider" />

        {/* Experience & Education */}
        <div className="section-title" style={{ marginBottom: 24 }}>Experience & Education</div>

        <div className="exp-card" style={{ borderColor: "#00D4FF33" }}>
          <div className="exp-role">Machine Learning Intern</div>
          <div className="exp-meta">Digital Empowerment Network · 2024 · Remote</div>
          <ul className="exp-points">
            <li>Contributed to end-to-end ML pipelines — data collection, preprocessing, feature engineering, cross-validation, and model training.</li>
            <li>Documented processes and reported performance metrics to team leads.</li>
          </ul>
        </div>

        <div className="exp-card" style={{ borderColor: "#F59E0B33" }}>
          <div className="exp-role">Cloud & Security Training</div>
          <div className="exp-meta">AWS Academy · 2026 · Lab-based</div>
          <ul className="exp-points">
            <li>Hands-on lab work with EC2, S3, IAM, and VPC configurations.</li>
            <li>Covered network security fundamentals and cybersecurity best practices.</li>
          </ul>
        </div>

        <div className="exp-card" style={{ borderColor: "#7C3AED33" }}>
          <div className="exp-role">BS Computer Science</div>
          <div className="exp-meta">FAST-NUCES Lahore · 2022 – 2026</div>
          <ul className="exp-points">
            <li>Core coursework: DSA, DBMS, Operating Systems, AI, Machine Learning, Cloud Computing, Cybersecurity, Software Engineering.</li>
            <li>Final Year Project: AlertEye — real-time driver monitoring system using computer vision and deep learning.</li>
          </ul>
        </div>

        {/* Footer */}
        <div className="footer">
          2026 · Syed Adil Bukhari · Lahore, Pakistan
        </div>

      </div>
    </div>
  );
}