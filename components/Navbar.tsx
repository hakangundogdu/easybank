import React from 'react'
import Layout from './ui/Layout'

const Navbar = () => {
  return (
    <Layout>
      <nav className="px-auto z-30 flex items-center justify-between">
        <a href="/">
          <img src="/images/logo.svg" alt="Logo" />
        </a>
        <div className=" flex justify-between space-x-4 text-secondary">
          <a className="  hover:text-primary" href="/">
            Home
          </a>
          <a className="  hover:text-primary" href="/">
            About
          </a>
          <a className="  hover:text-primary" href="/">
            Contact
          </a>
          <a className="  hover:text-primary" href="/">
            Blog
          </a>
          <a className="  hover:text-primary" href="/">
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
