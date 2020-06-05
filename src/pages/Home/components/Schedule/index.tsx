import React from 'react'
import './style.css'
import ScheduleItem from './components/ScheduleItem/index'

const Schedule: React.FC = () => {
  return (
    <div className="wrapper_schedules">
      <div className="wrapper_title">
        <h3>Agenda</h3>
      </div>
      <div className="row">
        <ScheduleItem schedule={{
          _id: '1j35o',
          day: 2,
          month: 'Fevereiro',
          time: '19:30',
          title: 'Corrida para jovens'
        }} />
        <ScheduleItem schedule={{
          _id: '1j35o',
          day: 2,
          month: 'Fevereiro',
          time: '19:30',
          title: 'Corrida para jovens'
        }} />
        <ScheduleItem schedule={{
          _id: '1j35o',
          day: 2,
          month: 'Fevereiro',
          time: '19:30',
          title: 'Corrida para jovens'
        }} />
        <ScheduleItem schedule={{
          _id: '1j35o',
          day: 2,
          month: 'Fevereiro',
          time: '19:30',
          title: 'Corrida para jovens'
        }} />
      </div>
    </div>
  )
}

export default Schedule
