import React from 'react'
import Hero from './Hero'
import Cateogries from './Cateogries'

const HomePage = () => {
  return (
    <div className='p-4 md:p-8'>
        <Hero/>
        <Cateogries/>
    </div>
  )
}

export default HomePage