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
        <ScheduleItem />
        <ScheduleItem />
        <ScheduleItem />
        <ScheduleItem />
        <ScheduleItem />
      </div>
    </div>
  )
}

export default Schedule
