import React from 'react'

const ImageCard = (props: any) => {
  return (
    <div className=" group  overflow-hidden rounded-lg bg-white lg:w-1/4">
      <div className="w-full ">
        <img
          className="  w-full object-cover duration-300 ease-in-out hover:scale-105"
          src={props.src}
        />
      </div>
      <div className="p-6">
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
