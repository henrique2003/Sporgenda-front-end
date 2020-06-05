import React from 'react'
import BackArrow from '../../components/BackArrow'
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
    </div>
  )
}

export default More
