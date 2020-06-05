import React, { useEffect, useState } from 'react'
import BackArrow from '../../components/BackArrow'
import LineInformation from './components/LineInformation/index'
import './style.css'
import api from '../../services/api'

interface Props {
  match: {
    params: {
      id: string
    }
  }
}

interface Schedule {
  _id: string
  title: string
  location: string
  month: string
  day: number
  time: string
  users: string[]
}

const More: React.FC<Props> = ({ match }) => {
  const [Schedule, setSchedule] = useState<Schedule>({
    _id: '123m23jmj123',
    title: 'Lotem ipsum',
    location: 'Parque são judas',
    month: 'Janero',
    day: 1,
    time: '16:30',
    users: []
  })
  const { _id, title, time, users, month, day, location } = Schedule

  useEffect(() => {
    async function loadSchedule (): Promise<void> {
      try {
        const res = await api.get(`agenda/${match.params.id}`)
        setSchedule(res.data)
      } catch (error) {
        console.log(error.message)
      }
    }

    loadSchedule()
  }, [match.params.id])

  return (
    <div className="wrapper_more">
      <BackArrow to="/" text="Voltar para o início" />
      <div className="wrapper_more_card">
        <div className="wrapper_more_header">
          <h3>{title}</h3>
        </div>
        <div className="wrapper_more_body">
          <div className="wraper_information">
            <LineInformation text={`Mês: ${month}`} />
            <LineInformation text={`Dia: ${day <= 10 ? `0${day}` : day}`} />
            <LineInformation text={`Local: ${location}`} />
            <LineInformation text={`Horário: ${time}`} />
            <LineInformation text={`Pessoas confirmadas: ${users.length}`} />
          </div>
        </div>
        <form>
          <div className="wrapper_more_form_header">
            <div></div><p>Nome completo:</p>
          </div>
          <div className="wrapper_more_form_input">
            <input
              type="text"
              placeholder="Ex: Henrique de melo Cristioglu"
            /> <button type="submit">Participar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default More
