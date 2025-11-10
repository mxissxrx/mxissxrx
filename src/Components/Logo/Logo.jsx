import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/mxissxrx-logo.png'

const Logo = () => {
  return (
    <div
      className="
        w-full flex justify-center 
        py-2 sm:py-3 md:py-4      /* less padding on small screens */
        mt-4 sm:mt-2 md:mt-0     /* moves logo slightly downward on smaller screens */
      "
    >
      <Link to="/" className="cursor-pointer">
        <img
          src={logo}
          alt="mxissxrx logo"
          className="
            w-40 sm:w-36 md:w-32 lg:w-48 
            hover:scale-105 transition-all duration-300 drop-shadow-md
          "
        />
      </Link>
    </div>
  )
}

export default Logo

