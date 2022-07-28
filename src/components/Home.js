import React from 'react'
import Footer from './Footer';
import HeroSection from './HeroSection'
import Tours from './tours/Tours'
import Reviews from './reviews/Reviews'

function Home() {
  return (
      <div>
      <HeroSection />
      <Tours />
      <Reviews />
      <Footer />
    </div>
  )
}

export default Home