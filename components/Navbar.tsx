import React from 'react'

const Navbar = () => {
  return (
    <nav className="  flex items-center justify-between px-6 py-7 md:px-12 lg:px-32 ">
      <a href="/">
        <img src="/images/logo.svg" alt="Logo" />
      </a>
      <div className="hidden justify-between space-x-8 text-secondary md:flex">
        <a
          className=" border-b-2 border-white transition duration-300 hover:border-b-2 hover:border-green hover:text-primary"
          href="/"
        >
          Home
        </a>
        <a
          className="  border-b-2 border-white transition duration-300 hover:border-b-2 hover:border-green hover:text-primary"
          href="/about"
        >
          About
        </a>
        <a
          className=" border-b-2 border-white transition duration-300 hover:border-b-2 hover:border-green hover:text-primary"
          href="/"
        >
          Contact
        </a>
        <a
          className=" border-b-2 border-white transition duration-300 hover:border-b-2 hover:border-green hover:text-primary"
          href="/"
        >
          Blog
        </a>
        <a
          className="  border-b-2 border-white transition duration-300 hover:border-b-2 hover:border-green hover:text-primary"
          href="/"
        >
          Careers
        </a>
      </div>
      <div className=" hidden rounded-full bg-gradient-to-r from-green1 to-green2 py-2 px-6  text-white hover:bg-gradient-to-l md:block ">
        <a href="/">Request Invite</a>
      </div>
    </nav>
  )
}

export default Navbar
