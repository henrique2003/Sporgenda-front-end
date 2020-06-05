import React from 'react'
import './style.css'

const Schedule: React.FC = () => {
  return (
    <div className="wrapper_schedules">
      <div className="wrapper_title">
        <h3>Agenda</h3>
      </div>
      <div className="row">
        <div className="row_schedules">
          <div className="card">
            <div className="content">
              <h4>Fevereiro</h4>
              <p>Corrida livre e rápida</p>
              <div className="row">
                <span>Dia: 02</span>
                <span>Horário: 18:20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule
