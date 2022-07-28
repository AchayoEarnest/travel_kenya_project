import React from 'react'
import Footer from './Footer';
import HeroSection from './HeroSection'
import Read from './read/Read'
import Reviews from './reviews/Reviews'

function Home() {
  return (
      <div>
      <HeroSection />
      <Read />
      <Reviews />
      <Footer />
    </div>
  )
}

export default Home