import React, { useState, SyntheticEvent } from 'react'
import BackArrow from '../../components/BackArrow'
import Sport from '../../assets/images/sport-2.png'
import FormInput from './components/FormInput'
import './style.css'

interface FormData {
  title: string
  location: string
  time: string
  day: number
  month: string
}

const Admin: React.FC = () => {
  const [FormData, setFormData] = useState<FormData>({
    title: '',
    location: '',
    time: '',
    day: 0,
    month: ''
  })
  const { day, location, title, month, time } = FormData

  const onChange = (e: SyntheticEvent): void => {
    const target = e.target as HTMLInputElement
    setFormData({ ...FormData, [target.name]: target.value })
  }

  return (
    <div className="wrapper_admin">
      <BackArrow text="Votar para o início" to="/"/>
      <div className="wrapper_admin_body">
        <article>
          <h3>Marcar uma data</h3>
        </article>
        <div className="row">
          <form>
            <FormInput
              name="title"
              placeholder="Ex: Corrida para jovens"
              title="Titulo:"
              type="text"
              value={title}
              onChange={(e: SyntheticEvent) => onChange(e)}
            />
            <FormInput
              name="location"
              placeholder="Ex: Quadra de corrida"
              title="Localização:"
              type="text"
              value={location}
              onChange={(e: SyntheticEvent) => onChange(e)}
            />
            <div className="form_row">
              <FormInput
                name="time"
                placeholder="Ex: 15:20"
                title="Horário:"
                type="text"
                value={time}
                className="input_item"
                onChange={(e: SyntheticEvent) => onChange(e)}
              />
              <FormInput
                name="day"
                placeholder="Ex: 15"
                title="Dia:"
                type="number"
                value={day}
                className="input_item"
                onChange={(e: SyntheticEvent) => onChange(e)}
              />
              <FormInput
                name="month"
                placeholder="Ex: Março"
                title="Mês:"
                type="text"
                value={month}
                className="input_item"
                onChange={(e: SyntheticEvent) => onChange(e)}
              />
              <button type="submit">Criar</button>
            </div>
          </form>
          <section>
            <img src={Sport} alt=""/>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Admin
