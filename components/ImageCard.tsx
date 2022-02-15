import React from 'react'

const ImageCard = (props) => {
  return (
    <div className=" group overflow-hidden rounded-lg bg-white">
      <div className="h-1/2 w-auto ">
        <img className=" h-full object-cover" src={props.src} />
      </div>
      <div className="p-8">
        <p className="text-xs font-light text-secondary">{props.author}</p>
        <h3 className="my-4 text-lg font-light text-primary group-hover:text-green">
          {' '}
          {props.title}{' '}
        </h3>
        <p className="text-sm font-light text-secondary">{props.text}</p>
      </div>
    </div>
  )
}

export default ImageCard
