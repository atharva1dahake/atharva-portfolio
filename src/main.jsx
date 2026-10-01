import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { createRoot } from "react-dom/client";

import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  GraduationCap,
  Home,
  Mail,
  Menu,
  X,
  User,
  Briefcase,
  Terminal,
  Send,
  CheckCircle,
  Cpu,
  Globe,
  Layers,
  Server,
} from "lucide-react";

import "./styles.css";

/* =========================
   PROJECTS
========================= */

const projects = [
  {
    title: "AgroGuide",
    category: "AI / Full Stack",
    description:
      "A smart agriculture platform that provides crop recommendations, disease detection, weather information and farm insights.",
    tech: ["React", "Node.js", "MongoDB", "Python", "ML"],
  },
  {
    title: "ProjectMate",
    category: "Web Application",
    description:
      "A student project and hackathon team-finding platform that helps students discover teammates based on skills and project requirements.",
    tech: ["Java", "JSP", "Servlets", "PostgreSQL", "Tomcat"],
  },
];

/* =========================
   SKILLS
========================= */

const skills = [
  {
    title: "Frontend",
    icon: <Globe size={22} />,
    items: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JSP",
    ],
  },
  {
    title: "Backend",
    icon: <Server size={22} />,
    items: [
      "Node.js",
      "Express.js",
      "Java",
      "REST APIs",
      "Servlets",
    ],
  },
  {
    title: "Database",
    icon: <Database size={22} />,
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Programming",
    icon: <Code2 size={22} />,
    items: ["Java", "Python", "C", "DSA"],
  },
  {
    title: "AI / ML",
    icon: <Cpu size={22} />,
    items: [
      "scikit-learn",
      "Machine Learning",
      "RAG",
      "LangChain",
      "Computer Vision",
    ],
  },
  {
    title: "Tools",
    icon: <Terminal size={22} />,
    items: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

/* =========================
   APP
========================= */

function App() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (newPage) => {
    setPage(newPage);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const navItems = [
    {
      id: "home",
      label: "Home",
      icon: <Home size={16} />,
    },
    {
      id: "about",
      label: "About",
      icon: <User size={16} />,
    },
    {
      id: "education",
      label: "Education",
      icon: <GraduationCap size={16} />,
    },
    {
      id: "skills",
      label: "Skills",
      icon: <Code2 size={16} />,
    },
    {
      id: "projects",
      label: "Projects",
      icon: <Briefcase size={16} />,
    },
    {
      id: "contact",
      label: "Contact",
      icon: <Mail size={16} />,
    },
  ];

  return (
    <div className="app">
      {/* Background */}
      <div className="grid-background"></div>
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      {/* =========================
          NAVBAR
      ========================= */}

      <header className="navbar">
        <div className="nav-inner">

          <button
            className="logo"
            onClick={() => navigate("home")}
          >
            <span className="logo-symbol">&lt;/&gt;</span>

            <span>
              Atharva<span className="accent">.</span>
            </span>
          </button>

          <nav
            className={`nav-links ${
              menuOpen ? "mobile-open" : ""
            }`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                className={
                  page === item.id ? "active" : ""
                }
                onClick={() => navigate(item.id)}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>
      </header>

      {/* =========================
          PAGE
      ========================= */}

      <main className="page-container">
        <div
          key={page}
          className="page-transition"
        >
          {page === "home" && (
            <HomePage navigate={navigate} />
          )}

          {page === "about" && (
            <AboutPage navigate={navigate} />
          )}

          {page === "education" && (
            <EducationPage />
          )}

          {page === "skills" && (
            <SkillsPage />
          )}

          {page === "projects" && (
            <ProjectsPage />
          )}

          {page === "contact" && (
            <ContactPage />
          )}
        </div>
      </main>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">

        <div>
          <span className="terminal-green">
            ●
          </span>{" "}
          System online
        </div>

        <div>
          Built with{" "}
          <span className="accent">
            React.js
          </span>
        </div>

        <div>
          © 2026 Atharva
        </div>

      </footer>
    </div>
  );
}

/* =========================
   HOME
========================= */

function HomePage({ navigate }) {
  return (
    <section className="hero section">

      <div className="hero-content">

        <div className="status-pill">
          <span className="status-dot"></span>
          Available for opportunities
        </div>

        <p className="eyebrow">
          <span className="terminal-green">
            $
          </span>{" "}
          whoami
        </p>

        <h1>
          Hi, I'm{" "}
          <span className="gradient-text">
            Atharva
          </span>

          <br />

          <span className="outline-text">
            BCA Student & Developer
          </span>
        </h1>

        <p className="hero-description">
          I build modern web applications,
          intelligent systems and
          technology-driven solutions using
          React, Java, Python and more.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-button"
            onClick={() =>
              navigate("projects")
            }
          >
            View My Work
            <ArrowRight size={18} />
          </button>

          <button
            className="secondary-button"
            onClick={() =>
              navigate("contact")
            }
          >
            Contact Me
            <Mail size={18} />
          </button>

        </div>

        <div className="quick-stats">

          <div>
            <strong>8.5+</strong>
            <span>CGPA</span>
          </div>

          <div>
            <strong>BCA</strong>
            <span>Final Year</span>
          </div>

          <div>
            <strong>5+</strong>
            <span>Tech Areas</span>
          </div>

        </div>

      </div>

      {/* CODE TERMINAL */}

      <div className="terminal-card">

        <div className="terminal-header">

          <div className="terminal-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <span className="terminal-title">
            portfolio.js
          </span>

        </div>

        <div className="terminal-body">

          <div>
            <span className="line-number">
              01
            </span>

            <span className="purple">
              const
            </span>{" "}

            <span className="cyan">
              developer
            </span>{" "}
            = {"{"}
          </div>

          <div>
            <span className="line-number">
              02
            </span>

            &nbsp;&nbsp;name:{" "}
            <span className="green">
              "Atharva"
            </span>
            ,
          </div>

          <div>
            <span className="line-number">
              03
            </span>

            &nbsp;&nbsp;role:{" "}
            <span className="green">
              "Developer"
            </span>
            ,
          </div>

          <div>
            <span className="line-number">
              04
            </span>

            &nbsp;&nbsp;education:{" "}
            <span className="green">
              "BCA"
            </span>
            ,
          </div>

          <div>
            <span className="line-number">
              05
            </span>

            &nbsp;&nbsp;focus: [
          </div>

          <div>
            <span className="line-number">
              06
            </span>

            &nbsp;&nbsp;&nbsp;&nbsp;

            <span className="green">
              "Full Stack"
            </span>
            ,
          </div>

          <div>
            <span className="line-number">
              07
            </span>

            &nbsp;&nbsp;&nbsp;&nbsp;

            <span className="green">
              "AI / ML"
            </span>
            ,
          </div>

          <div>
            <span className="line-number">
              08
            </span>

            &nbsp;&nbsp;&nbsp;&nbsp;

            <span className="green">
              "Problem Solving"
            </span>
          </div>

          <div>
            <span className="line-number">
              09
            </span>

            &nbsp;&nbsp;]
          </div>

          <div>
            <span className="line-number">
              10
            </span>

            {"}"}
          </div>

          <div className="cursor-line">

            <span className="line-number">
              11
            </span>

            <span className="cursor"></span>

          </div>

        </div>
      </div>

    </section>
  );
}

/* =========================
   ABOUT
========================= */

function AboutPage({ navigate }) {
  return (
    <section className="content-page section">

      <PageHeading
        command="cat about.txt"
        title="About Me"
        subtitle="A little about who I am and what I do."
      />

      <div className="about-grid">

        <div className="glass-card about-main">

          <div className="card-icon">
            <User size={24} />
          </div>

          <h2>
            Hello, I'm Atharva.
          </h2>

          <p>
            I'm a final-year Bachelor of
            Computer Applications student
            passionate about software
            development, modern web
            technologies and artificial
            intelligence.
          </p>

          <p>
            I enjoy transforming ideas into
            practical applications and
            continuously improving my
            technical skills through
            academic projects and
            self-learning.
          </p>

          <p>
            My interests include full-stack
            development, AI/ML,
            problem-solving and building
            clean, useful digital experiences.
          </p>

          <button
            className="primary-button small"
            onClick={() =>
              navigate("projects")
            }
          >
            Explore Projects
            <ArrowRight size={16} />
          </button>

        </div>

        <div className="about-side">

          <InfoCard
            title="Current Status"
            value="BCA Final Year"
          />

          <InfoCard
            title="Academic Score"
            value="8.5+ CGPA"
          />

          <InfoCard
            title="Primary Focus"
            value="Software Development"
          />

          <InfoCard
            title="Next Goal"
            value="MCA • 2027"
          />

        </div>

      </div>

    </section>
  );
}

/* =========================
   INFO CARD
========================= */

function InfoCard({ title, value }) {
  return (
    <div className="glass-card info-card">

      <span>{title}</span>

      <strong>{value}</strong>

    </div>
  );
}

/* =========================
   EDUCATION
========================= */

function EducationPage() {
  return (
    <section className="content-page section">

      <PageHeading
        command="ls education/"
        title="Education"
        subtitle="My academic journey so far."
      />

      <div className="timeline">

        <EducationCard
          year="2024 — 2027"
          title="Bachelor of Computer Applications"
          institution="Modern College of Arts, Science and Commerce, Pune"
          description="Currently pursuing BCA with a focus on programming, software development, databases and modern web technologies."
          score="8.5+ CGPA"
        />

        <EducationCard
          year="2021 — 2022"
          title="Higher Secondary Education"
          institution="Maharashtra State Board"
          description="Completed higher secondary education with a strong academic foundation."
          score="86.17%"
        />

      </div>

    </section>
  );
}

/* =========================
   EDUCATION CARD
========================= */

function EducationCard({
  year,
  title,
  institution,
  description,
  score,
}) {
  return (
    <div className="education-card glass-card">

      <div className="education-year">
        {year}
      </div>

      <div className="education-content">

        <div className="card-icon">
          <GraduationCap size={22} />
        </div>

        <h2>{title}</h2>

        <h3>{institution}</h3>

        <p>{description}</p>

      </div>

      <div className="score-box">

        <span>Score</span>

        <strong>{score}</strong>

      </div>

    </div>
  );
}

/* =========================
   SKILLS
========================= */

function SkillsPage() {
  return (
    <section className="content-page section">

      <PageHeading
        command="cat skills.json"
        title="Technical Skills"
        subtitle="Technologies and tools I work with."
      />

      <div className="skills-grid">

        {skills.map((skill) => (

          <div
            className="skill-card glass-card"
            key={skill.title}
          >

            <div className="skill-header">

              <div className="card-icon">
                {skill.icon}
              </div>

              <h2>{skill.title}</h2>

            </div>

            <div className="skill-tags">

              {skill.items.map((item) => (

                <span key={item}>
                  {item}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

/* =========================
   PROJECTS
========================= */

function ProjectsPage() {
  return (
    <section className="content-page section">

      <PageHeading
        command="git log --projects"
        title="Projects"
        subtitle="Some things I've built during my academic journey."
      />

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div
            className="project-card glass-card"
            key={project.title}
          >

            <div className="project-top">

              <div className="project-number">
                0{index + 1}
              </div>

              <ArrowUpRight size={22} />

            </div>

            <span className="project-category">
              {project.category}
            </span>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <div className="project-tech">

              {project.tech.map((tech) => (

                <span key={tech}>
                  {tech}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

      <div className="project-note glass-card">

        <Layers size={22} />

        <div>

          <strong>
            Always building.
          </strong>

          <p>
            More projects and experiments
            are continuously being added as
            I learn new technologies.
          </p>

        </div>

      </div>

    </section>
  );
}

/* =========================
   CONTACT
========================= */

function ContactPage() {
  const form = useRef();

  const [sending, setSending] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  const [error, setError] =
    useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setSubmitted(false);
    setError(false);

    try {
      await emailjs.sendForm(
        "service_htihmip",
        "template_0ffkwsj",
        form.current,
        "7asjfxDE_PROoth6l"
      );

      setSubmitted(true);

      form.current.reset();

    } catch (err) {

      console.error(
        "Email failed:",
        err
      );

      setError(true);

    } finally {

      setSending(false);

    }
  };

  return (
    <section className="content-page section">

      <PageHeading
        command="connect --with-atharva"
        title="Contact"
        subtitle="Have an idea, opportunity or just want to say hello?"
      />

      <div className="contact-grid">

        {/* CONTACT INFORMATION */}

        <div className="glass-card contact-info">

          <div className="card-icon">
            <Mail size={24} />
          </div>

          <h2>
            Let's connect.
          </h2>

          <p>
            I'm open to discussing
            projects, internships,
            technology and interesting
            opportunities.
          </p>

          <div className="contact-links">

            <a
              href="mailto:atharvaukd@gmail.com"
            >
              <Mail size={18} />

              <span>
                atharvaukd@gmail.com
              </span>
            </a>

            <a
              href="https://github.com/atharva1dahake/"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={18} />

              <span>
                GitHub
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/atharva-dahake-040421248/"
              target="_blank"
              rel="noreferrer"
            >
              <Briefcase size={18} />

              <span>
                LinkedIn
              </span>
            </a>

          </div>

        </div>

        {/* CONTACT FORM */}

        <form
          ref={form}
          className="glass-card contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">

            <label>
              Name
            </label>

            <input
              type="text"
              name="from_name"
              placeholder="Your name"
              required
            />

          </div>

          <div className="form-group">

            <label>
              Email
            </label>

            <input
              type="email"
              name="from_email"
              placeholder="your@email.com"
              required
            />

          </div>

          <div className="form-group">

            <label>
              Message
            </label>

            <textarea
              name="message"
              placeholder="Write your message..."
              rows="6"
              required
            ></textarea>

          </div>

          <button
            className="primary-button"
            type="submit"
            disabled={sending}
          >

            {sending ? (
              <>
                Sending...
              </>
            ) : submitted ? (
              <>
                <CheckCircle size={18} />
                Message Sent
              </>
            ) : (
              <>
                Send Message
                <Send size={18} />
              </>
            )}

          </button>

          {error && (
            <p className="form-error">
              Something went wrong.
              Please try again.
            </p>
          )}

          {submitted && (
            <p className="form-success">
              Thanks! Your message has
              been sent successfully.
            </p>
          )}

        </form>

      </div>

    </section>
  );
}

/* =========================
   PAGE HEADING
========================= */

function PageHeading({
  command,
  title,
  subtitle,
}) {
  return (
    <div className="page-heading">

      <div className="command-line">

        <span className="terminal-green">
          $
        </span>

        {command}

      </div>

      <h1>
        {title}
      </h1>

      <p>
        {subtitle}
      </p>

      <div className="heading-line"></div>

    </div>
  );
}

/* =========================
   RENDER APP
========================= */

createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);