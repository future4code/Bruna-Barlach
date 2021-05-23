import React from "react"
import styled from "styled-components"
import axios from "axios"

export default class AddPlay extends React.Component {
    state = {
        name: ""
    }

    handleNome = (event) => {
        this.setState({name: event.target.value})
    }

    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.name
        }

        axios.post(url, body, {
            headers: {
                Authorization: "bruna-barlach-paiva"
            }
        })
        .then((res) => {
            alert("Nova lista criada")
            this.setState({name: ""})
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.props.irParaVerMusicas}>Ir para Lista de Músicas</button>
                <h2>Cadastrar música</h2>
                <input 
                placeholder={"nome"}
                value={this.state.name}
                onChange={this.handleNome}
                />
                <button onClick={this.fazerCadastro}>Cadastrar</button>
            </div>
        )
    }
}