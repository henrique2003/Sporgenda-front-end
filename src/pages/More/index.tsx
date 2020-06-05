import React from 'react'
import BackArrow from '../../components/BackArrow'
import LineInformation from './components/LineInformation/index'
import './style.css'

interface Props {
  match: {
    params: {
      id: string
    }
  }
}

const More: React.FC<Props> = ({ match }) => {
  console.log(match)
  return (
    <div className="wrapper_more">
      <BackArrow to="/" text="Voltar para o início" />
      <div className="wrapper_more_card">
        <div className="wrapper_more_header">
          <h3>Corrida livre e rápida</h3>
        </div>
        <div className="wrapper_more_body">
          <div className="wraper_information">
            <LineInformation text="Mês: Fevereiro" />
            <LineInformation text="Dia: 02" />
            <LineInformation text="Local: Quadra de basquere" />
            <LineInformation text="Horário: 18:20" />
            <LineInformation text="Pessoas confirmadas: 10" />
          </div>
        </div>
        <form>
          <div className="wrapper_more_form_header">
            <div></div><p>Nome completo:</p>
          </div>
          <div className="wrapper_more_form_content">
            <input type="text"/> <button type="submit">Participar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default More
