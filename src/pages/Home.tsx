//import React from 'react'

import Card from "../components/Card"
import Hero from "../components/Hero"
import  Neighbourhood  from "../components/Neighbourhood"
import Leadership from "../components/Leadership"

const Home = () => {
  return (
    <div className="">
        <Hero />
        <Card />
        <Neighbourhood /> 
        <Leadership />
    </div>
  )
}

export default Home