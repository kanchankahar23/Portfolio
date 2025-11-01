import React from 'react'
import photo from '../assets/MyPhoto.jpg'
import { Facebook, Instagram, Github, Linkedin, Mail, TwitchIcon, X, XCircleIcon, Twitter } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gray-900 flex flex-col items-center text-center p-8 min-h-screen justify-center">
      <img
        src={photo}
        alt="Kanchan Kahar"
        className="w-72 h-72 rounded-full object-cover mb-4 shadow-lg"
      />

      <h1 className="text-4xl font-bold text-white">
        <span className="text-pink-400 ">I'm Kanchan Kahar,</span> Frontend Developer based in India
      </h1>

      <p className="text-gray-400 mt-3 max-w-md">
        I am a frontend developer from Jabalpur, India with 1 year of experience.
      </p>

      <div className="flex gap-4 mt-5">
        <button className="bg-pink-600  text-white px-4 py-2 rounded-lg hover:bg-pink-500 transition">Explore my Work</button>
        <button className="border border-pink-500 text-pink-500 px-4 py-2 rounded-lg hover:bg-pink-500 hover:text-white transition">My Resume</button>
      </div>
      <div className="flex gap-4 justify-center mt-5 ">
        <a href="https://facebook.com" className="btn btn-square btn-outline border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition ">
          <Mail className="w-5 h-5" />
        </a>
        <a href="https://instagram.com" className="btn btn-square btn-outline border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="https://github.com" className="btn btn-square btn-outline border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://github.com" className="btn btn-square btn-outline border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition">
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  )
}

export default Hero
