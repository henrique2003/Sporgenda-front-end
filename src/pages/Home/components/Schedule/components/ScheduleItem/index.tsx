import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const ScheduleItem: React.FC = () => {
  return (
    <div className="schedule">
      <div className="content">
        <div className="card_header">
          <div className="green_point"></div><h4>Fevereiro</h4>
        </div>
        <p>Corrida livre e rápida</p>
        <section>
          <span>Dia: 02</span>
          <span>Horário: 18:20</span>
        </section>
        <Link to={`/mais/${12}`}>Saiba mais...</Link>
      </div>
    </div>
  )
}

export default ScheduleItem
