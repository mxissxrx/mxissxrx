import React from 'react'
import { FaTiktok, FaPinterest } from "react-icons/fa";
import logo from '../../assets/mxissxrx-logoT.png'
import './About.css'

const About = () => {
  return (
     <div className="bg-[#FBEAF2] flex justify-center py-16 px-4 min-h-[400px]">
  <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12 md:items-start items-center">

    <div className="flex-1 text-center md:text-left">
      <img
        src={logo}
        alt="mxissxrx logo"
        className="w-30 drop-shadow-md mb-6 mx-auto md:mx-0"
      />

      <h2 className="my-text1 text-lg font-semibold mb-4 text-black">About Me</h2>
      <p className="my-text2 text-md text-gray-700 leading-relaxed">
        Hi! I’m Maisy, a computer science student with a love for fashion, beauty, and all things inspo. 
        I created this site to bring my Pinterest boards to life. 
        Here, you can find the pieces I post about along with my favorite Amazon and DHgate finds. 
        It’s a mix of my style, creativity, and a little bit of code. ♡
      </p>
    </div>

    <div className="flex-1 text-center md:text-left mt-8 lg:ml-25 md:mt-0">
      <h3 className="text-2xl text-black mb-6 font-EpicaSansProBold">
        Follow My Socials
      </h3>
      <div className="flex justify-center md:justify-start gap-6 text-3xl text-black">
        <a
          href="https://www.tiktok.com/@mxissxrx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok />
        </a>
        <a
          href="https://ca.pinterest.com/mxissxrx/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPinterest />
        </a>
      </div>
    </div>

  </div>
</div>


  )
}

export default About
