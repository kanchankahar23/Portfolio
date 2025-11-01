import React from "react";
import profile from "../assets/MyPhoto.jpg"
import { FaHtml5, FaCss3Alt, FaReact, FaJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const AboutMe = () => {
  const skills = [
    { skill: "HTML", color: "#E34F26", icon: FaHtml5 },
    { skill: "CSS", color: "#1572B6", icon: FaCss3Alt },
    { skill: "JavaScript", color: "#F7DF1E", icon: FaJs },
    { skill: "React JS", color: "#61DAFB", icon: FaReact },
    { skill: "Tailwind CSS", color: "#06B6D4", icon: SiTailwindcss },
  ];

  return (
    <>
      <div className="bg-gray-900">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-white pt-10">
          About <span className="bg-pink-600 bg-clip-text ml-2 text-transparent">Me</span>
        </h2>

        <div className="text-white py-16 px-8 flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <img
              src={profile}
              alt="Kanchan Kahar"
              className="rounded-md shadow-lg w-72 h-auto object-cover transition-transform duration-300"
            />
          </div>

          <div className="md:w-1/2 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I am a passionate Frontend Developer from Jabalpur, India, who loves creating beautiful and interactive websites.
              I enjoy turning ideas into clean and responsive designs using React, JavaScript, HTML, CSS, and Tailwind CSS.
              I always try to write code that is simple, reusable, and easy to understand.<br></br>
              Learning new technologies and improving my problem-solving skills excite me every day.
              My goal is to build modern web applications that are not only attractive but also user-friendly and meaningful.
            </p>


            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8">
              {skills.map(({ skill, color, icon: Icon }, index) => (
                <div
                  key={index}
                  className="w-40 h-32 bg-gray-800 rounded-xl flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 shadow-lg"
                >
                  <div className="p-2 rounded-full" style={{ backgroundColor: `${color}22` }}>
                    <Icon className="text-3xl" style={{ color }} />
                  </div>
                  <p className="text-sm font-semibold">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default AboutMe;
