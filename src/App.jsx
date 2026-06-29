import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Projects", "Skills", "Experience", "Contact"];

const PROJECTS = [
  {
    name: "AlertEye",
    subtitle: "Real-Time Driver Monitoring System",
    tags: ["Python", "FastAPI", "YOLOv5", "dlib", "OpenCV", "Flutter"],
    desc: "Detects drowsiness (EAR), yawning (MAR), phone usage, and head tilt distraction from a single camera feed at 25 FPS with minimal false positives.",
    highlights: ["<400ms latency", "25 FPS real-time", "4 detection modes"],
    github: "https://github.com/syedadilbukhari4/AlertEye",
    featured: true,
    icon: "🚗",
    color: "#00D4FF",
  },
  {
    name: "ResumeIQ",
    subtitle: "AI-Powered Resume Analyzer",
    tags: ["Python", "FastAPI", "Gemini API", "PyPDF2", "NLP", "SQL"],
    desc: "Analyzes resumes against job descriptions to identify skill gaps, generate tailored interview questions, and create personalized learning roadmaps.",
    highlights: ["92% accuracy", "Skill gap analysis", "LLM-powered"],
    github: "https://github.com/syedadilbukhari4",
    featured: true,
    icon: "📄",
    color: "#7C3AED",
  },
  {
    name: "RAG Document Assistant",
    subtitle: "Retrieval-Augmented Generation System",
    tags: ["LangChain", "ChromaDB", "HuggingFace", "FastAPI", "Gemini"],
    desc: "Enables natural language PDF querying with source-referenced, context-aware answers using vector embeddings and semantic search.",
    highlights: ["Semantic search", "Source citations", "RAG pipeline"],
    github: "https://github.com/syedadilbukhari4",
    featured: false,
    icon: "🔍",
    color: "#10B981",
  },
  {
    name: "Facial Recognition System",
    subtitle: "Real-Time Face Detection & ID",
    tags: ["Python", "OpenCV", "Deep Learning", "Computer Vision"],
    desc: "Real-time face detection and identification using deep learning architectures with live webcam feed and optimized inference speed.",
    highlights: ["Real-time feed", "Deep learning", "Optimized inference"],
    github: "https://github.com/syedadilbukhari4",
    featured: false,
    icon: "👁️",
    color: "#F59E0B",
  },
  {
    name: "DRS Stream Analysis & Overlay",
    subtitle: "Decision Review System · Mar–May 2025",
    tags: ["FastAPI", "OpenCV", "Python", "Jira", "GitHub", "Mobile Integration"],
    desc: "Built the Stream Analysis and Overlay Module for a mobile Decision Review System. Receives ball trajectory and decision data, overlays it on video frames, and returns processed video with OUT/NOT OUT visual feedback.",
    highlights: ["Async video processing", "Real-time overlay", "Mobile compatible"],
    github: "https://github.com/mabdullahsaqib/Mobile-DRS-System",
    featured: false,
    icon: "🏏",
    color: "#EC4899",
  },
  {
    name: "AI Chatbot — Gemini 1.5 Flash",
    subtitle: "Conversational AI · Jan–Feb 2025",
    tags: ["Python", "Gemini 1.5 Flash", "Streamlit", "LLM", "NLP", "Google AI Studio"],
    desc: "Conversational AI chatbot powered by Gemini 1.5 Flash with multi-turn memory, built on a lightweight Streamlit interface. Demonstrates fast, context-aware LLM integration with no heavy backend setup.",
    highlights: ["Multi-turn memory", "LLM-powered", "Rapid deployment"],
    github: "https://github.com/syedadilbukhari4",
    featured: false,
    icon: "💬",
    color: "#6366F1",
  },
];

const SKILLS = [
  {
    category: "Languages",
    icon: "⌨️",
    items: ["Python", "SQL", "C++", "C", "Dart", "Bash"],
  },
  {
    category: "Frameworks",
    icon: "🏗️",
    items: ["FastAPI", "Django", "Flutter", "React", "Streamlit", "TensorFlow", "OpenCV"],
  },
  {
    category: "AI / ML",
    icon: "🤖",
    items: ["YOLOv5/v8", "dlib", "LangChain", "RAG", "Gemini API", "LLM Integration", "HuggingFace", "NLP", "CNNs"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    items: ["MySQL", "ChromaDB", "Query Optimization", "Vector DBs"],
  },
  {
    category: "Cloud & Security",
    icon: "☁️",
    items: ["AWS EC2", "S3", "IAM", "VPC", "Cybersecurity", "Ethical Hacking"],
  },
  {
    category: "Tools & Ops",
    icon: "🔧",
    items: ["Git", "Jira", "VS Code", "Linux", "REST API Testing", "SDLC"],
  },
];

const EXPERIENCE = [
  {
    role: "Machine Learning Intern",
    org: "Digital Empowerment Network",
    period: "2024",
    type: "Remote",
    points: [
      "End-to-end ML pipelines: data collection, preprocessing, feature engineering, cross-validation, and model training",
      "Documented processes and reported performance metrics to team leads",
    ],
    icon: "🧠",
  },
  {
    role: "Cloud & Security Training",
    org: "AWS Academy",
    period: "2024",
    type: "Certification",
    points: [
      "Hands-on with EC2, S3, IAM, and VPC configurations",
      "Network security fundamentals, system monitoring, and cybersecurity best practices",
    ],
    icon: "☁️",
  },
];

const ROLES = [
  "Software Engineer",
  "AI/ML Engineer",
  "Computer Vision Developer",
  "Backend API Developer",
  "Generative AI Builder",
];

function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(10,15,30,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(0,212,255,0.1)" : "none",
      transition: "all 0.3s ease",
      padding: "0 5%",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <span style={{ fontFamily: "'Space Mono', monospace", color: "#00D4FF", fontSize: 18, fontWeight: 700, letterSpacing: 1 }}>
          {"<Adil />"}
        </span>
        {/* Desktop */}
        <div style={{ display: "flex", gap: 32 }} className="desktop-nav">
          {NAV_LINKS.map((l) => (
            <button key={l} onClick={() => scrollTo(l)}
              style={{ background: "none", border: "none", color: active === l.toLowerCase() ? "#00D4FF" : "#8892A4", fontFamily: "'Inter', sans-serif", fontSize: 14, cursor: "pointer", letterSpacing: 0.5, transition: "color 0.2s", fontWeight: active === l.toLowerCase() ? 600 : 400 }}>
              {l}
            </button>
          ))}
          <a href="mailto:syedadilbukhari4444@gmail.com"
            style={{ background: "transparent", border: "1px solid #00D4FF", color: "#00D4FF", padding: "6px 18px", borderRadius: 4, fontSize: 13, textDecoration: "none", fontFamily: "'Inter', sans-serif", transition: "all 0.2s" }}>
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px 5% 60px", position: "relative", overflow: "hidden" }}>
      {/* bg grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
      {/* glow */}
      <div style={{ position: "absolute", top: "20%", left: "60%", width: 500, height: 500, background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", position: "relative" }}>
        <div style={{ fontFamily: "'Space Mono', monospace", color: "#00D4FF", fontSize: 13, marginBottom: 20, letterSpacing: 2 }}>
          {"// CS GRADUATE · FAST-NUCES LAHORE · 2026"}
        </div>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 700, color: "#E8EDF5", lineHeight: 1.1, margin: "0 0 12px" }}>
          Syed Adil<br />
          <span style={{ color: "#00D4FF" }}>Bukhari</span>
        </h1>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(16px, 2.5vw, 24px)", color: "#8892A4", marginBottom: 32, minHeight: 36 }}>
          <span style={{ color: "#E8EDF5" }}>{role}</span>
          <span style={{ color: "#00D4FF", animation: "blink 1s step-end infinite" }}>|</span>
        </div>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#8892A4", maxWidth: 560, lineHeight: 1.8, marginBottom: 40 }}>
          CS graduate specializing in AI/ML, computer vision, and backend engineering.
          I build production-grade systems — real-time CV pipelines, LLM-powered tools, and REST APIs that ship.
          Open to Software Engineering and AI/ML roles in Lahore.
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{ background: "#00D4FF", color: "#0A0F1E", padding: "12px 28px", borderRadius: 4, fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 14, textDecoration: "none", letterSpacing: 0.5 }}>
            View Projects →
          </a>
          <a href="https://github.com/syedadilbukhari4" target="_blank" rel="noreferrer"
            style={{ background: "transparent", border: "1px solid rgba(232,237,245,0.2)", color: "#E8EDF5", padding: "12px 28px", borderRadius: 4, fontFamily: "'Inter', sans-serif", fontSize: 14, textDecoration: "none" }}>
            GitHub ↗
          </a>
          <a href="https://linkedin.com/in/syed-adil-bukhari" target="_blank" rel="noreferrer"
            style={{ background: "transparent", border: "1px solid rgba(232,237,245,0.2)", color: "#E8EDF5", padding: "12px 28px", borderRadius: 4, fontFamily: "'Inter', sans-serif", fontSize: 14, textDecoration: "none" }}>
            LinkedIn ↗
          </a>
        </div>


      </div>

      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Space+Mono:wght@400;700&family=Inter:wght@400;500;600;700&display=swap');
      `}</style>
    </section>
  );
}

function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" style={{ padding: "100px 5%", background: "rgba(26,32,53,0.3)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel label="Projects" />
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#E8EDF5", marginBottom: 48 }}>
          Things I've Built
        </h2>

        {/* Featured */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(460px, 1fr))", gap: 24, marginBottom: 24 }}>
          {featured.map((p) => <ProjectCard key={p.name} project={p} large />)}
        </div>

        {/* Others */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {others.map((p) => <ProjectCard key={p.name} project={p} />)}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, large }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? "rgba(26,32,53,0.9)" : "rgba(26,32,53,0.6)", border: `1px solid ${hovered ? p.color : "rgba(232,237,245,0.06)"}`, borderRadius: 8, padding: large ? 32 : 24, transition: "all 0.25s ease", transform: hovered ? "translateY(-4px)" : "none", boxShadow: hovered ? `0 20px 40px rgba(0,0,0,0.3)` : "none", display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span style={{ fontSize: large ? 32 : 24 }}>{p.icon}</span>
        <a href={p.github} target="_blank" rel="noreferrer"
          style={{ color: "#8892A4", fontSize: 12, fontFamily: "'Space Mono', monospace", textDecoration: "none", border: "1px solid rgba(136,146,164,0.3)", padding: "4px 10px", borderRadius: 3, transition: "all 0.2s", ...(hovered ? { color: p.color, borderColor: p.color } : {}) }}>
          GitHub ↗
        </a>
      </div>
      <div>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: large ? 22 : 18, fontWeight: 700, color: "#E8EDF5", margin: "0 0 4px" }}>{p.name}</h3>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: p.color, marginBottom: 10 }}>{p.subtitle}</div>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#8892A4", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {p.highlights.map((h) => (
          <span key={h} style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: p.color, background: `${p.color}15`, padding: "3px 8px", borderRadius: 3 }}>{h}</span>
        ))}
      </div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: "auto" }}>
        {p.tags.map((t) => (
          <span key={t} style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#8892A4", background: "rgba(136,146,164,0.08)", padding: "3px 8px", borderRadius: 3 }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" style={{ padding: "100px 5%" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel label="Skills" />
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#E8EDF5", marginBottom: 48 }}>
          Tech Stack
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {SKILLS.map((s) => (
            <div key={s.category} style={{ background: "rgba(26,32,53,0.6)", border: "1px solid rgba(232,237,245,0.06)", borderRadius: 8, padding: 24 }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 600, color: "#E8EDF5", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
                <span>{s.icon}</span> {s.category}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {s.items.map((item) => (
                  <span key={item} style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#8892A4", background: "rgba(0,212,255,0.05)", border: "1px solid rgba(0,212,255,0.12)", padding: "5px 10px", borderRadius: 4 }}>{item}</span>
                ))}
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
    <section id="experience" style={{ padding: "100px 5%", background: "rgba(26,32,53,0.3)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel label="Experience" />
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#E8EDF5", marginBottom: 12 }}>
          Background
        </h2>

        {/* Education */}
        <div style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.06), rgba(124,58,237,0.06))", border: "1px solid rgba(0,212,255,0.15)", borderRadius: 8, padding: 28, marginBottom: 32, marginTop: 32 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
            <div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#00D4FF", letterSpacing: 2, marginBottom: 8 }}>EDUCATION</div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, color: "#E8EDF5", margin: "0 0 4px" }}>BS Computer Science</h3>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#8892A4" }}>FAST-NUCES Lahore · 2022–2026</div>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
            {["DSA", "DBMS", "Operating Systems", "AI", "ML", "Cloud Computing", "Cybersecurity", "Software Engineering"].map((c) => (
              <span key={c} style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#8892A4", background: "rgba(136,146,164,0.08)", padding: "4px 10px", borderRadius: 3 }}>{c}</span>
            ))}
          </div>
        </div>

        {/* Experience cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {EXPERIENCE.map((exp) => (
            <div key={exp.role} style={{ background: "rgba(26,32,53,0.6)", border: "1px solid rgba(232,237,245,0.06)", borderRadius: 8, padding: 24, display: "flex", gap: 20 }}>
              <div style={{ fontSize: 28, flexShrink: 0 }}>{exp.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 4, marginBottom: 8 }}>
                  <div>
                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 17, fontWeight: 600, color: "#E8EDF5", margin: "0 0 2px" }}>{exp.role}</h3>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#00D4FF" }}>{exp.org}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "#8892A4" }}>{exp.period}</span>
                    <div><span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#8892A4", background: "rgba(136,146,164,0.1)", padding: "2px 8px", borderRadius: 3 }}>{exp.type}</span></div>
                  </div>
                </div>
                <ul style={{ margin: 0, padding: "0 0 0 16px" }}>
                  {exp.points.map((pt) => (
                    <li key={pt} style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#8892A4", lineHeight: 1.7, marginBottom: 4 }}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ padding: "100px 5% 80px" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <SectionLabel label="Contact" center />
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#E8EDF5", marginBottom: 16 }}>
          Let's Work Together
        </h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#8892A4", lineHeight: 1.8, marginBottom: 48 }}>
          I'm actively looking for Software Engineering and AI/ML roles in Lahore.
          If you have an opportunity or just want to connect, reach out.
        </p>
        <a href="mailto:syedadilbukhari4444@gmail.com"
          style={{ display: "inline-block", background: "#00D4FF", color: "#0A0F1E", padding: "14px 36px", borderRadius: 4, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 16, textDecoration: "none", marginBottom: 48 }}>
          syedadilbukhari4444@gmail.com
        </a>

        <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
          {[
            ["GitHub", "https://github.com/syedadilbukhari4"],
            ["LinkedIn", "https://linkedin.com/in/syed-adil-bukhari"],
          ].map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#8892A4", textDecoration: "none", border: "1px solid rgba(136,146,164,0.2)", padding: "8px 20px", borderRadius: 4 }}>
              {label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ label, center }) {
  return (
    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#00D4FF", letterSpacing: 3, textTransform: "uppercase", marginBottom: 12, textAlign: center ? "center" : "left" }}>
      {"// " + label}
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.3 }
    );
    ["about", "projects", "skills", "experience", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: "#0A0F1E", minHeight: "100vh", color: "#E8EDF5" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Space+Mono:wght@400;700&family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0A0F1E; }
        ::-webkit-scrollbar-thumb { background: #00D4FF33; border-radius: 2px; }
      `}</style>
      <Navbar active={activeSection} />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <footer style={{ textAlign: "center", padding: "24px", fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#8892A4", borderTop: "1px solid rgba(232,237,245,0.05)" }}>
        {"// Built by Syed Adil Bukhari · 2026"}
      </footer>
    </div>
  );
}
