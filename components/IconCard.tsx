import React from 'react'

const IconCard = (props) => {
  return (
    <div className="group">
      <img
        className="transition duration-200 ease-in-out group-hover:translate-y-0.5"
        src={props.src}
        alt="icon"
      />
      <h3 className="mt-6 mb-5 text-2xl font-light text-primary">
        {' '}
        {props.title}{' '}
      </h3>
      <p className="text-md my-6 font-light text-secondary">{props.text}</p>
    </div>
  )
}

export default IconCard
