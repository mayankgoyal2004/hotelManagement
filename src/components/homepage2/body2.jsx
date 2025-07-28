import React from 'react'
import NavBar from '../NavBar'
import HomeMain from './homeM'
import Discover from './Discover'
import Roomc from './Room2'
import Clientm from './Client2'
import TeamM from './Team2'
import News from './News'
import Experience from './Experience'
import Footer from "../Footer"
// import AddButton from '../AddButton'

const Body2 = () => {
  return (
    <div>
        <NavBar />
        <HomeMain/>
        {/* <AddButton /> */}
        <Discover />
        <Roomc />
        <Clientm />
        <TeamM />
        <News />
        <Experience />
        <Footer />
      
    </div>
  )
}

export default Body2