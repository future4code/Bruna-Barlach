import React from "react"
import axios from "axios"
import styled from 'styled-components'

const CardAtividade = styled.div `
border: 1px dotted gray;
width: 300px;
margin: 10px;
padding: 10px;
`

export default class App extends React.Component {
  state = {
    activity: {}
  }

pegaAtividade = () => {
  axios.get("http://www.boredapi.com/api/activity")
  .then((res) => {
    this.setState({activity: res.data})
  })
}


render() {

  const {activity, type, participants, link} = this.state.activity

  return(
    <div>
        <h1>Bora fazer alguma coisa?</h1>
        <button onClick={this.pegaAtividade}>Dá uma ideia</button>
        <hr />
      <CardAtividade>
        <h2>Atividade</h2>
        <p>Nome: {activity} </p>
        <p>Tipo: {type}</p>
        <p>Participantes: {participants}</p>
        <p>Link: {link}</p>
        </CardAtividade>
    </div>

  )
}
}