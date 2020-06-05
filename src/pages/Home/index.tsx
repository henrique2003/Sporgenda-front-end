import React from 'react'
import Introduction from './components/introduction'
import Schedule from './components/Schedule'

import './style.css'

const Home: React.FC = () => {
  return (
    <div className="wrapper_home">
      <div className="container">
        <Introduction />
        <Schedule />
      </div>
    </div>
  )
}

export default Home
