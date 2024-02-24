import React from 'react'
import { ReactTyped } from 'react-typed'

const HeroText: React.FC = () => {
  const heroText: string[] = [
    'Discover new recipes',
    'Find your next meal',
    'Explore new flavors',
    'Learn, cook & Enjoy!',
  ]

  return (
    <div className="hero-text-container">
      <h1 className="hero-text">
        <ReactTyped
          strings={heroText}
          typeSpeed={40}
          backSpeed={50}
          loop
          loopCount={Infinity}
        />
      </h1>
    </div>
  )
}

export default HeroText
