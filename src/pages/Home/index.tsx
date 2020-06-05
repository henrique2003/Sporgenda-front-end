import React from 'react'
import Sport from '../../assets/images/sport-1.png'

import './style.css'

const Home: React.FC = () => {
  return (
    <div className="wrapper_home">
      <div className="container">
        <div className="row">
          <div className="warapper_text">
            <div className="content">
              <h1>Querendo se exercitar ?</h1>
              <p>Escolha qualquer horário e vá praticar esportes com outras pessoas. É de graça e sem qualquer restrição</p>
            </div>
          </div>
          <div className="wrapper_image">
            <img src={Sport} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
