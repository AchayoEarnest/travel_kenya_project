import React from 'react'
import HeroSection from './HeroSection'
import Read from './read/Read'
import Reviews from './reviews/Reviews'

function Home() {
  return (
      <div>
      <HeroSection />
      <Read />
      <Reviews />
    </div>
  )
}

export default Home