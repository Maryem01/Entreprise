import React from 'react'
import Hero from './Hero'
import Service from './Service'
import Video from './Video'
import History from './History'
import PlumberPoint from './PlumberPoint'
import OurTeam from './OurTeam'
import CategoryTwo from './CategorieTwo'
import CategoryThree from './CategorieThree'
import CategoryFour from './CategoryFour'



const Home = () => {
  return (
    <div>
        <Hero/>
        <Service/>
        <Video/>
        
        <CategoryTwo/>
        
        <CategoryThree/>
        
       <CategoryFour/>
        <History/>
        <PlumberPoint/>
       
        <OurTeam/>
       
        
    </div>
  )
}

export default Home