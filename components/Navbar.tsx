import React from 'react'
import Layout from './layout'

const Navbar = () => {
  return (
    <Layout>
      <nav className="flex items-center justify-between  py-7 ">
        <a href="/">
          <img src="/images/logo.svg" alt="Logo" />
        </a>
        <div className=" flex justify-between space-x-8 text-secondary">
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
        <div className=" rounded-full bg-gradient-to-r from-green1 to-green2 py-2  px-6 text-white hover:bg-gradient-to-l ">
          <a href="/">Request Invite</a>
        </div>
      </nav>
    </Layout>
  )
}

export default Navbar
