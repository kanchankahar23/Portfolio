import React from 'react'
import photo from '../assets/MyPhoto.jpg' 

const Hero = () => {
  return (
    <div className="bg-gray-900 flex flex-col items-center text-center p-10 min-h-screen justify-center">
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
        <button className="bg-pink-600  text-white px-4 py-2 rounded-lg hover:bg-pink-500 transition">Connect with Me</button>
        <button className="border border-pink-500 text-pink-500 px-4 py-2 rounded-lg hover:bg-pink-500 hover:text-white transition">My Resume</button>
      </div>
    </div>
  )
}

export default Hero
