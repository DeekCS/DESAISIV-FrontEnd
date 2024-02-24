import React from 'react'

interface InstructionsProps {
  instructions: string
}

const Instructions: React.FC<InstructionsProps> = ({ instructions }) => (
  <div className="text-left w-full">
    <h3 className="text-left w-full font-bold text-gray-700 text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4">
      Instructions
    </h3>
    <p
      className="text-left w-full font-light text-gray-700 text-sm md:text-base lg:text-lg xl:text-xl leading-7 overflow-y-auto h-48 md:h-64 lg:h-80 xl:h-96"
      dangerouslySetInnerHTML={{ __html: instructions || '' }}
    ></p>
  </div>
)

export default Instructions
