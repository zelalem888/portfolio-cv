/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import careerquillImg from "../assets/careerquill.png";
import flowmindImg from "../assets/flowmind.png";
import proctorlyImg from "../assets/proctorly.png";
import hiremeImg from "../assets/hireme.png";

const projects = [
  {
    title: " Dizz Blog ",
    subtitle: "blog",
    description:
      "A NextJS-powered blog website with dynamic post rendering, using a JSON-based backend (or API) to manage and display articles with routing and responsive design.",
    highlights: [
      
    ],
    tech: [
      "React",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "FastAPI",
    ],
    github: "https://github.com/zelalem888/DizzBlog.",
    live: "https://dizz-blog.vercel.app/",
    image: careerquillImg,
    accent: "from-[#27CBCB]/40",
  },
  {
    title: "Random Movies",
    subtitle: "Movies and series",
    description:
      "A React-based movie website that dynamically fetches and displays movie data from the TMDB API with search and detail features.",
    highlights: [
      
    ],
    tech: [
      "React",
      "React Flow",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "ChromaDB",
      "Gemini LLM",
      "Docker",
    ],
    github: "https://github.com/zelalem888/movie",
    live: "https://movie-swart-gamma.vercel.app/",
    image: flowmindImg,
    accent: "from-violet-400/40",
  },
  {
    title: "Mortgage Calculator",
    subtitle: "Mortgage",
    description:
      "This mortgage calculator estimates your monthly payments based on loan amount, interest rate, term, and down payment.",
    highlights: [
    ],
    tech: [
      "React",
      "Tailwind",
      "Node.js",
      
    ],
    github: "https://github.com/zelalem888/mortgage-repayment-calculator",
    live: "https://mortgage-repayment-calculator-sage-xi.vercel.app/",
    image: proctorlyImg,
    accent: "from-amber-400/40",
  },
  {
    title: "Tip Calculator",
    subtitle: "Tip",
    description:
      "A simple and responsive tip calculator built with HTML, CSS, and vanilla JavaScript that calculates tip and total per person based on user input.",
    highlights: [
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/zelalem888/tip-calculator",
    live: "https://tip-calculator-amber-eight.vercel.app/",
    image: hiremeImg,
    accent: "from-cyan-400/40",
  },
];

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group rounded-xl border border-gray-700/40 bg-gray-900/20 backdrop-blur overflow-hidden"
    >
      <div className="relative h-40 sm:h-44 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover scale-105 blur-[2px] group-hover:blur-0 group-hover:scale-100 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
        <motion.div
          initial={{ x: "-60%" }}
          whileHover={{ x: "60%" }}
          transition={{ duration: 1.2 }}
          className={`absolute inset-0 bg-linear-to-r ${project.accent} to-transparent opacity-60`}
        />
        <div className="absolute bottom-3 left-4">
          <h3 className="text-base sm:text-lg font-semibold text-white">{project.title}</h3>
          <p className="text-xs text-[#27CBCB]">{project.subtitle}</p>
        </div>
      </div>

      <div className="px-4 sm:px-5 py-3 sm:py-4 space-y-3 sm:space-y-4">
        <p className="text-gray-300 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 sm:gap-2 text-xs text-gray-400">
          {project.highlights.map((h) => (
            <span key={h} className="text-xs">• {h}</span>
          ))}
        </div>

        <div className="flex flex-wrap gap-1 sm:gap-2">
          {project.tech
            .slice(0, expanded ? project.tech.length : 4)
            .map((t) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-2 py-1 text-xs rounded-md bg-gray-950 border border-gray-700/40 text-gray-400"
              >
                {t}
              </motion.span>
            ))}
          {project.tech.length > 4 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="px-2 py-1 text-xs rounded-md border border-gray-700/40 text-[#27CBCB] hover:bg-[#27CBCB]/10 transition-colors"
            >
              {expanded ? "− less" : `+${project.tech.length - 4}`}
            </button>
          )}
        </div>

        <div className="flex gap-4 text-gray-400 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub size={16} />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="px-4 sm:px-6 md:px-8 lg:ml-65 lg:p-5 space-y-6 sm:space-y-8 max-w-6xl lg:mr-36 mx-auto"
    >
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#27CBCB] text-center lg:text-left">
          Things I&apos;ve Built
        </h2>
        <p className="mt-2 text-[#80978F] text-base sm:text-lg max-w-xl text-center lg:text-left mx-auto lg:mx-0">
          Real-world projects focused on system design, scalability, and clean engineering.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>

      <div className="flex justify-center text-[#27CBCB]">
        <a
          href="https://github.com/zelalem888"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 group"
        >
          <span className="relative">
            View all projects on GitHub
            <span className="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-[#27CBCB] transition-all duration-300 group-hover:w-full group-hover:left-0" />
          </span>
          <ExternalLink
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </motion.section>
  );
};

export default Projects;