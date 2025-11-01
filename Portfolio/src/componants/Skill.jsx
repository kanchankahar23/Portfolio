import { FlagTriangleLeft } from "lucide-react";
import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub, FaDatabase, FaGitAlt, FaBootstrap, FaUniversity, FaExclamationTriangle, FaVideoSlash, FaStudiovinari } from "react-icons/fa";
import { SiTailwindcss, SiVercel, SiVirustotal, SiVsco } from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500", desc: "Markup structure of web pages" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500", desc: "Design and layout styling" },
  { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-400", desc: "Logic and interactivity" },
  { name: "React", icon: FaReact, color: "text-cyan-400", desc: "Dynamic and reusable UI" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400", desc: "Fast, utility-first styling" },
  { name: "Git", icon: FaGitAlt, color: "text-pink-400", desc: "Version control & collaboration" },
   { name: "Github", icon: FaGithub, color: "text-orange-400", desc: "Version control & collaboration" },
  { name: "Database", icon: FaDatabase, color: "text-red-400", desc: "Data storage and management" },
    { name: "Vercel", icon: SiVercel, color: "text-green-400", desc: "Deployment" },
    //   { name: "VS code", icon: SiVisualstudiocode, color: "text-green-400", desc: "Data storage and management" },
];

const Skill = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6 md:px-12">
      <div className="text-center mb-14">
        <h2 className="text-5xl font-bold text-pink-500 mb-4">My Skills</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          I enjoy building responsive, interactive, and user-friendly web applications using these technologies.
        </p>
      </div>

      {/* Skill Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 justify-items-center">
        {skills.map(({ name, icon: Icon, color, desc }) => (
          <div
            key={name}
            className="card w-40 h-44 bg-gray-800 shadow-lg hover:shadow-pink-500/30 hover:bg-gray-700 transition-all duration-500 transform hover:scale-110"
          >
            <div className="card-body flex flex-col items-center justify-center text-center">
              <Icon className={`w-12 h-12 ${color} mb-2 group-hover:animate-bounce`} />
              <h3 className="text-lg font-semibold text-white">{name}</h3>
              <p className="text-xs text-gray-400">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
