import { useState, useEffect } from "react";

const NAV_LINKS = ["About", "Projects", "Skills", "Experience", "Contact"];

const PROJECTS = [
  {
    name: "AlertEye",
    subtitle: "Real-Time Driver Monitoring System",
    tags: ["Python", "FastAPI", "YOLOv5", "dlib", "OpenCV", "Flutter"],
    desc: "Detects drowsiness, yawning, phone usage, and head-tilt distraction from a single camera feed at 25 FPS with sub-400ms latency.",
    highlights: ["< 400ms latency", "25 FPS", "4 detection modes"],
    github: "https://github.com/syedadilbukhari4/AlertEye",
    featured: true,
    color: "#00D4FF",
  },
  {
    name: "ResumeIQ",
    subtitle: "AI-Powered Resume Analyzer",
    tags: ["Python", "FastAPI", "Gemini API", "PyPDF2", "NLP", "SQL"],
    desc: "Matches resumes against job descriptions to surface skill gaps, generate tailored interview questions, and produce personalized learning roadmaps.",
    highlights: ["92% accuracy", "Skill gap analysis", "LLM-powered"],
    github: "https://github.com/syedadilbukhari4",
    featured: true,
    color: "#7C3AED",
  },
  {
    name: "RAG Document Assistant",
    subtitle: "Retrieval-Augmented Generation",
    tags: ["LangChain", "ChromaDB", "HuggingFace", "FastAPI", "Gemini"],
    desc: "Natural language PDF querying with source-referenced, context-aware answers built on vector embeddings and semantic search.",
    highlights: ["Semantic search", "Source citations", "RAG pipeline"],
    github: "https://github.com/syedadilbukhari4",
    featured: false,
    color: "#10B981",
  },
  {
    name: "DRS Stream Analysis",
    subtitle: "Decision Review System · 2025",
    tags: ["FastAPI", "OpenCV", "Python", "Jira", "Mobile Integration"],
    desc: "Stream analysis and overlay module for a mobile DRS. Receives ball trajectory data, overlays it on video frames, and returns processed video with OUT/NOT OUT verdict.",
    highlights: ["Async processing", "Real-time overlay", "Mobile-ready"],
    github: "https://github.com/mabdullahsaqib/Mobile-DRS-System",
    featured: false,
    color: "#EC4899",
  },
  {
    name: "Facial Recognition System",
    subtitle: "Real-Time Face Detection",
    tags: ["Python", "OpenCV", "Deep Learning", "Computer Vision"],
    desc: "Real-time face detection and identification using deep learning with live webcam feed and optimized inference speed.",
    highlights: ["Real-time feed", "Deep learning", "Optimized inference"],
    github: "https://github.com/syedadilbukhari4",
    featured: false,
    color: "#F59E0B",
  },
  {
    name: "AI Chatbot",
    subtitle: "Gemini 1.5 Flash · 2025",
    tags: ["Python", "Gemini 1.5 Flash", "Streamlit", "LLM", "NLP"],
    desc: "Conversational AI chatbot with multi-turn memory powered by Gemini 1.5 Flash, built on a lightweight Streamlit interface with no heavy backend required.",
    highlights: ["Multi-turn memory", "LLM-powered", "Streamlit UI"],
    github: "https://github.com/syedadilbukhari4",
    featured: false,
    color: "#6366F1",
  },
];

const SKILLS = [
  { category: "Languages", items: ["Python", "SQL", "C++", "C", "Dart", "Bash"] },
  { category: "Frameworks", items: ["FastAPI", "Django", "Flutter", "React", "Streamlit", "TensorFlow", "OpenCV"] },
  { category: "AI / ML", items: ["YOLOv5/v8", "dlib", "LangChain", "RAG", "Gemini API", "LLM Integration", "HuggingFace", "NLP", "CNNs"] },
  { category: "Databases", items: ["MySQL", "ChromaDB", "Vector DBs", "Query Optimization"] },
  { category: "Cloud & Security", items: ["AWS EC2", "S3", "IAM", "VPC", "Cybersecurity", "Ethical Hacking"] },
  { category: "Tools", items: ["Git", "Jira", "VS Code", "Linux", "REST API Testing", "SDLC"] },
];

const EXPERIENCE = [
  {
    role: "Machine Learning Intern",
    org: "Digital Empowerment Network",
    period: "2024",
    type: "Remote",
    points: [
      "Contributed to end-to-end ML pipelines covering data collection, preprocessing, feature engineering, cross-validation, and model training.",
      "Documented processes and reported performance metrics to team leads.",
    ],
  },
  {
    role: "Cloud & Security Training",
    org: "AWS Academy",
    period: "2024",
    type: "Lab-based",
    points: [
      "Hands-on lab work with EC2, S3, IAM, and VPC configurations.",
      "Covered network security fundamentals, system monitoring, and cybersecurity best practices.",
    ],
  },
];

const ROLES = [
  "Software Engineer",
  "AI/ML Engineer",
  "Computer Vision Developer",
  "Backend API Developer",
  "Generative AI Builder",
];

function useTypewriter(words, speed = 75, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = words[wordIdx];
    let t;
    if (!deleting && charIdx < current.length) t = setTimeout(() => setCharIdx(c => c + 1), speed);
    else if (!deleting && charIdx === current.length) t = setTimeout(() => setDeleting(true), pause);
    else if (deleting && charIdx > 0) t = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    else { setDeleting(false); setWordIdx(i => (i + 1) % words.length); }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);
  return display;
}

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Inter:wght@400;500;600&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; font-size: 16px; }
  body { background: #080C18; color: #C9D1E0; }
  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: #080C18; }
  ::-webkit-scrollbar-thumb { background: #00D4FF44; border-radius: 2px; }
  @keyframes blink { 50% { opacity: 0; } }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

  .nav-link {
    background: none; border: none; color: #8892A4;
    font-family: 'Inter', sans-serif; font-size: 13px;
    cursor: pointer; letter-spacing: 0.3px;
    transition: color 0.2s; padding: 4px 0;
  }
  .nav-link:hover, .nav-link.active { color: #E8EDF5; }
  .nav-link.active { color: #00D4FF; font-weight: 600; }

  .hire-btn {
    background: transparent; border: 1px solid #00D4FF44;
    color: #00D4FF; padding: 7px 20px; border-radius: 3px;
    font-size: 13px; text-decoration: none;
    font-family: 'Inter', sans-serif; letter-spacing: 0.3px;
    transition: all 0.2s;
  }
  .hire-btn:hover { background: #00D4FF12; border-color: #00D4FF; }

  .mobile-menu-btn {
    display: none; background: none; border: none;
    color: #C9D1E0; cursor: pointer; padding: 4px;
    flex-direction: column; gap: 5px;
  }
  .mobile-menu-btn span {
    display: block; width: 22px; height: 1.5px;
    background: currentColor; transition: all 0.2s;
  }

  .hero-cta {
    display: inline-block;
    padding: 11px 26px; border-radius: 3px;
    font-family: 'Inter', sans-serif; font-weight: 600;
    font-size: 14px; text-decoration: none;
    transition: all 0.2s; letter-spacing: 0.3px;
  }
  .hero-cta-primary {
    background: #00D4FF; color: #080C18;
  }
  .hero-cta-primary:hover { background: #00BFEB; }
  .hero-cta-secondary {
    background: transparent;
    border: 1px solid #8892A430;
    color: #C9D1E0;
  }
  .hero-cta-secondary:hover { border-color: #8892A4; color: #E8EDF5; }

  .project-card {
    background: #0D1220; border: 1px solid #1E2640;
    border-radius: 6px; padding: 24px;
    display: flex; flex-direction: column; gap: 14px;
    transition: all 0.22s ease; cursor: default;
  }
  .project-card:hover {
    border-color: #2A3458;
    transform: translateY(-3px);
    box-shadow: 0 16px 40px rgba(0,0,0,0.4);
  }
  .project-card-large { padding: 28px; }

  .tag-highlight {
    font-family: 'Space Mono', monospace;
    font-size: 10px; padding: 3px 8px; border-radius: 2px;
    letter-spacing: 0.3px;
  }
  .tag-tech {
    font-family: 'Inter', sans-serif;
    font-size: 11px; color: #8892A4;
    background: #1A2035; padding: 3px 9px;
    border-radius: 2px;
  }
  .skill-pill {
    font-family: 'Inter', sans-serif; font-size: 12px;
    color: #8892A4; background: #0D1220;
    border: 1px solid #1E2640;
    padding: 5px 12px; border-radius: 2px;
    transition: all 0.15s;
  }
  .skill-pill:hover { color: #C9D1E0; border-color: #2A3458; }

  .section-eyebrow {
    font-family: 'Space Mono', monospace;
    font-size: 10px; color: #00D4FF;
    letter-spacing: 3px; text-transform: uppercase;
    margin-bottom: 10px;
  }
  .section-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(26px, 4vw, 40px);
    font-weight: 700; color: #E8EDF5;
    margin-bottom: 40px; line-height: 1.15;
  }
  .divider {
    width: 32px; height: 2px; background: #00D4FF;
    margin: 12px 0 40px; border-radius: 1px;
  }

  .github-link {
    font-family: 'Space Mono', monospace; font-size: 11px;
    color: #8892A4; text-decoration: none;
    border: 1px solid #1E2640; padding: 4px 10px;
    border-radius: 2px; transition: all 0.2s;
    white-space: nowrap;
  }
  .github-link:hover { color: #C9D1E0; border-color: #2A3458; }

  .contact-email {
    display: inline-block;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700; font-size: clamp(14px, 2.5vw, 18px);
    color: #080C18; background: #00D4FF;
    padding: 13px 32px; border-radius: 3px;
    text-decoration: none; transition: background 0.2s;
    word-break: break-all; text-align: center;
  }
  .contact-email:hover { background: #00BFEB; }

  .social-link {
    font-family: 'Inter', sans-serif; font-size: 13px;
    color: #8892A4; text-decoration: none;
    border: 1px solid #1E2640; padding: 9px 22px;
    border-radius: 3px; transition: all 0.2s;
    letter-spacing: 0.3px;
  }
  .social-link:hover { color: #C9D1E0; border-color: #2A3458; }

  /* ── RESPONSIVE ── */
  @media (max-width: 768px) {
    .desktop-nav { display: none !important; }
    .mobile-menu-btn { display: flex !important; }
    .mobile-nav-open { display: flex !important; }
    .hero-ctas { flex-direction: column !important; }
    .hero-cta { text-align: center; }
    .projects-featured { grid-template-columns: 1fr !important; }
    .projects-grid { grid-template-columns: 1fr !important; }
    .skills-grid { grid-template-columns: 1fr !important; }
    .contact-socials { flex-direction: column !important; align-items: center !important; }
  }
  @media (max-width: 480px) {
    .section-pad { padding: 70px 20px !important; }
    .hero-pad { padding: 90px 20px 50px !important; }
    .nav-pad { padding: 0 20px !important; }
    .project-card { padding: 18px !important; }
    .project-card-large { padding: 20px !important; }
  }
`;

function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const goto = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };
  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        background: scrolled ? "rgba(8,12,24,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid #1E264055" : "none",
        transition: "all 0.3s",
      }}>
        <div className="nav-pad" style={{ maxWidth: 1080, margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <span style={{ fontFamily: "'Space Mono', monospace", color: "#00D4FF", fontSize: 16, fontWeight: 700, letterSpacing: 1 }}>
            SAB
          </span>
          <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {NAV_LINKS.map(l => (
              <button key={l} className={`nav-link${active === l.toLowerCase() ? " active" : ""}`} onClick={() => goto(l)}>{l}</button>
            ))}
            <a href="mailto:syedadilbukhari4444@gmail.com" className="hire-btn">Hire Me</a>
          </div>
          <button className="mobile-menu-btn" onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
        {/* Mobile dropdown */}
        {mobileOpen && (
          <div style={{ background: "#0D1220", borderTop: "1px solid #1E2640", padding: "16px 24px 20px", display: "flex", flexDirection: "column", gap: 4 }}>
            {NAV_LINKS.map(l => (
              <button key={l} className="nav-link" onClick={() => goto(l)} style={{ textAlign: "left", padding: "10px 0", fontSize: 15, borderBottom: "1px solid #1E264040" }}>{l}</button>
            ))}
            <a href="mailto:syedadilbukhari4444@gmail.com" className="hire-btn" style={{ marginTop: 12, textAlign: "center" }}>Hire Me</a>
          </div>
        )}
      </nav>
    </>
  );
}

function Hero() {
  const role = useTypewriter(ROLES);
  return (
    <section id="about" className="hero-pad" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px 40px 60px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px)", backgroundSize: "64px 64px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "15%", right: "10%", width: 480, height: 480, background: "radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 68%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1080, margin: "0 auto", width: "100%", position: "relative", animation: "fadeUp 0.6s ease both" }}>
        <div className="section-eyebrow" style={{ marginBottom: 24 }}>CS Graduate · FAST-NUCES Lahore · 2026</div>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(42px, 7vw, 80px)", fontWeight: 700, color: "#E8EDF5", lineHeight: 1.05, marginBottom: 16 }}>
          Syed Adil<br /><span style={{ color: "#00D4FF" }}>Bukhari</span>
        </h1>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(15px, 2.2vw, 22px)", color: "#8892A4", marginBottom: 28, minHeight: 32, display: "flex", alignItems: "center", gap: 2 }}>
          <span style={{ color: "#C9D1E0" }}>{role}</span>
          <span style={{ color: "#00D4FF", animation: "blink 1s step-end infinite" }}>_</span>
        </div>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(14px, 1.6vw, 16px)", color: "#8892A4", maxWidth: 520, lineHeight: 1.85, marginBottom: 36 }}>
          CS graduate specializing in AI/ML, computer vision, and backend engineering.
          I build production-grade systems — real-time CV pipelines, LLM-powered tools, and REST APIs.
          Open to Software Engineering and AI/ML roles in Lahore.
        </p>
        <div className="hero-ctas" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="#projects" className="hero-cta hero-cta-primary"
            onClick={e => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}>
            View Projects
          </a>
          <a href="https://github.com/syedadilbukhari4" target="_blank" rel="noreferrer" className="hero-cta hero-cta-secondary">GitHub</a>
          <a href="https://www.linkedin.com/in/syed-adil-bukhari-a988142b7" target="_blank" rel="noreferrer" className="hero-cta hero-cta-secondary">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const featured = PROJECTS.filter(p => p.featured);
  const others = PROJECTS.filter(p => !p.featured);
  return (
    <section id="projects" className="section-pad" style={{ padding: "100px 40px", background: "#0A0E1A" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div className="section-eyebrow">Selected Work</div>
        <h2 className="section-title">Projects</h2>
        <div className="projects-featured" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginBottom: 16 }}>
          {featured.map(p => <ProjectCard key={p.name} p={p} large />)}
        </div>
        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          {others.map(p => <ProjectCard key={p.name} p={p} />)}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, large }) {
  const [hov, setHov] = useState(false);
  return (
    <div className={`project-card${large ? " project-card-large" : ""}`}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ borderColor: hov ? p.color + "44" : undefined }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <div>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: large ? 20 : 17, fontWeight: 700, color: "#E8EDF5", marginBottom: 3 }}>{p.name}</h3>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: p.color, opacity: 0.85 }}>{p.subtitle}</div>
        </div>
        <a href={p.github} target="_blank" rel="noreferrer" className="github-link">GitHub ↗</a>
      </div>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#8892A4", lineHeight: 1.75 }}>{p.desc}</p>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {p.highlights.map(h => (
          <span key={h} className="tag-highlight" style={{ color: p.color, background: p.color + "14" }}>{h}</span>
        ))}
      </div>
      <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginTop: "auto", paddingTop: 4 }}>
        {p.tags.map(t => <span key={t} className="tag-tech">{t}</span>)}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-pad" style={{ padding: "100px 40px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div className="section-eyebrow">Capabilities</div>
        <h2 className="section-title">Tech Stack</h2>
        <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 16 }}>
          {SKILLS.map(s => (
            <div key={s.category} style={{ background: "#0D1220", border: "1px solid #1E2640", borderRadius: 6, padding: 22 }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 600, color: "#E8EDF5", marginBottom: 14, letterSpacing: 0.3 }}>{s.category}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {s.items.map(item => <span key={item} className="skill-pill">{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-pad" style={{ padding: "100px 40px", background: "#0A0E1A" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div className="section-eyebrow">Background</div>
        <h2 className="section-title">Experience & Education</h2>

        {/* Education */}
        <div style={{ background: "#0D1220", border: "1px solid #00D4FF22", borderRadius: 6, padding: "24px 28px", marginBottom: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
            <div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#00D4FF", letterSpacing: 2, marginBottom: 8 }}>EDUCATION</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 700, color: "#E8EDF5", marginBottom: 3 }}>BS Computer Science</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#8892A4" }}>FAST-NUCES Lahore &nbsp;·&nbsp; 2022 – 2026</div>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            {["DSA", "DBMS", "Operating Systems", "Artificial Intelligence", "Machine Learning", "Cloud Computing", "Cybersecurity", "Software Engineering"].map(c => (
              <span key={c} className="tag-tech">{c}</span>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {EXPERIENCE.map(e => (
            <div key={e.role} style={{ background: "#0D1220", border: "1px solid #1E2640", borderRadius: 6, padding: "22px 28px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                <div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#00D4FF", letterSpacing: 2, marginBottom: 8 }}>EXPERIENCE</div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: "#E8EDF5", marginBottom: 3 }}>{e.role}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#8892A4" }}>{e.org}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "#8892A4", marginBottom: 6 }}>{e.period}</div>
                  <span className="tag-tech">{e.type}</span>
                </div>
              </div>
              <ul style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 5 }}>
                {e.points.map(pt => (
                  <li key={pt} style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#8892A4", lineHeight: 1.7 }}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-pad" style={{ padding: "100px 40px 80px" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <div className="section-eyebrow" style={{ textAlign: "center" }}>Get in Touch</div>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, color: "#E8EDF5", marginBottom: 14, lineHeight: 1.15 }}>
          Let's Work Together
        </h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "#8892A4", lineHeight: 1.8, marginBottom: 40 }}>
          Actively looking for Software Engineering and AI/ML roles in Lahore.
          If you have an opportunity or want to connect — reach out.
        </p>
        <a href="mailto:syedadilbukhari4444@gmail.com" className="contact-email" style={{ marginBottom: 32, display: "inline-block" }}>
          syedadilbukhari4444@gmail.com
        </a>
        <div className="contact-socials" style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
          <a href="https://github.com/syedadilbukhari4" target="_blank" rel="noreferrer" className="social-link">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/syed-adil-bukhari-a988142b7" target="_blank" rel="noreferrer" className="social-link">LinkedIn ↗</a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.25 }
    );
    ["about", "projects", "skills", "experience", "contact"].forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return (
    <div style={{ background: "#080C18", minHeight: "100vh" }}>
      <style>{css}</style>
      <Navbar active={active} />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <footer style={{ textAlign: "center", padding: "20px", fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#8892A455", borderTop: "1px solid #1E264033", letterSpacing: 1 }}>
        SYED ADIL BUKHARI · 2026
      </footer>
    </div>
  );
}