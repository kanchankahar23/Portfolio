import React from "react";
import profile from "../assets/MyPhoto.jpg"; // 🧠 use your actual image path

const AboutMe = () => {
  return (
    <>
      
      <h2 className="text-5xl md:text-6xl font-bold text-center text-white bg-gray-900 pt-8">
        About
        <span className="bg-pink-600 bg-clip-text ml-2 text-transparent">
          Me
        </span>
      </h2>


      <div className="bg-gray-900 text-white py-16 px-8 flex flex-col md:flex-row justify-center items-center gap-12">
     
        <div className="md:w-1/3 flex justify-center">
          <img
            src={profile}
            alt="Kanchan Kahar"
            className="rounded-2xl shadow-lg w-72 h-auto object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

   
        <div className="md:w-1/2 space-y-4">
          <p className="text-gray-300 leading-relaxed">
            I am a passionate Frontend Developer from Jabalpur, India.  
            I love building beautiful and interactive websites using React, JavaScript, and modern UI frameworks.
          </p>

          <p className="text-gray-400">
            My focus is on writing clean, reusable code and delivering projects that provide a great user experience.
          </p>

          <div className="space-y-4">
            <SkillBar skill="HTML & CSS" level="90%" color="bg-pink-500" />
            <SkillBar skill="React JS" level="80%" color="bg-orange-600" />
            <SkillBar skill="JavaScript" level="85%" color="bg-blue-500" />
            <SkillBar skill="Tailwind CSS" level="75%" color="bg-teal-400" />
          </div>
        </div>
      </div>
    </>
  );
};


const SkillBar = ({ skill, level, color }) => (
  <div>
    <div className="flex justify-between mb-1">
      <p className="text-sm">{skill}</p>
      <p className="text-sm text-gray-400">{level}</p>
    </div>
    <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
      <div
        className={`h-3 ${color} rounded-full`}
        style={{ width: level }}
      ></div>
    </div>
  </div>
);

export default AboutMe;
