import React from "react"
import styled from "styled-components"
import axios from "axios"

export default class VerMusicas extends React.Component {

render(){
    return(
        <div>
            <button onClick={this.props.irParaAddMusica}>Ir para Adicionar Músicas</button>
            <h2>Listas</h2>
            <p>Nome:</p>
            <p>Músicas</p>
            <button>X</button>
        </div>
    )
}

}