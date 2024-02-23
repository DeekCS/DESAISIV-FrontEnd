import React from 'react'

interface ImageProps {
  src: string
}

const Image: React.FC<ImageProps> = ({ src }) => {
  return (
    <div className="flex justify-center">
      <div
        className=" rounded-full overflow-hidden
        shadow-lg border-4 border-primary
        h-44
         w-44 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-60 xl:h-60 2xl:w-52 2xl:h-52
      "
      >
        <img className="object-cover w-full h-full" src={src} alt="Image" />
      </div>
    </div>
  )
}

export default Image
