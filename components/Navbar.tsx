import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuOpenHandler = (event: any) => {
    setIsOpen(true)
  }
  const menuCloseHandler = (event: any) => {
    setIsOpen(false)
  }

  return (
    <>
      <nav className="  flex items-center justify-between px-6 py-6 md:px-12 lg:px-32 ">
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
        {!isOpen && (
          <button className=" flex md:hidden   ">
            <img
              onClick={menuOpenHandler}
              src="/images/icon-hamburger.svg"
              alt="hamburger menu"
            />
          </button>
        )}
        {isOpen && (
          <button className=" flex md:hidden   ">
            <img
              onClick={menuCloseHandler}
              src="/images/icon-close.svg"
              alt="close menu"
            />
          </button>
        )}
      </nav>
      {isOpen && (
        <div className="to-transparent absolute z-10 block h-screen w-full bg-gradient-to-b from-primary md:hidden">
          <div className="mx-6 mt-6 flex h-72 flex-col items-center justify-center space-y-5 rounded-md bg-white">
            <a className=" text-primary" href="/">
              Home
            </a>
            <a className=" text-primary" href="/">
              About
            </a>
            <a className=" text-primary" href="/">
              Contact
            </a>
            <a className=" text-primary" href="/">
              Blog
            </a>
            <a className=" text-primary" href="/">
              Careers
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
