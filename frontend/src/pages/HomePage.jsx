import React from 'react'
import Hero from './Hero'
import Cateogries from './Cateogries'
import Recommendation from './Recommendation'

const HomePage = () => {
  return (
    <div className='p-4 md:p-8'>
        <Hero/>
        <Cateogries/>
        <Recommendation/>
    </div>
  )
}

export default HomePage