import React from 'react'

const Menu = () => {
  return (
    <div className="to-transparent absolute inset-0 block h-screen bg-gradient-to-b from-primary md:hidden">
      <div className="mt-12 rounded-md bg-white">
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
  )
}

export default Menu
