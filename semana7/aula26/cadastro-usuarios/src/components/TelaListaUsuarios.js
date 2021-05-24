import axios from "axios"
import React from "react"
import styled from "styled-components"

const CardUsuario = styled.div `
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`

export default class TelaListaUsuarios extends React.Component{
    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: "bruna-barlach-paiva"
            }
        })
        .then((res) => {
            this.setState({usuarios: res.data})
        })
        .catch((err) => {
            alert("Ocorreu um problema, tente novamente.")
        })
    }
    
    deletaUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "bruna-barlach-paiva"
            }

        })
        .then((res) =>{
            alert("Deletado com sucesso.")
            this.pegarUsuarios()
        })
        .catch((err) => {
            alert("ocorreu um erro.")
        })
    }

    render(){

        const listaUsuarios = this.state.usuarios.map((user) =>{
            return (
                <CardUsuario key={user.id}>
                {user.name}
                <button onClick={() => this.deletaUsuario(user.id)}>X</button>
                </CardUsuario>
            )
        })

        return(
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para cadastro</button>
                <h2>Lista de usuários</h2>
                {listaUsuarios}
            </div>
        )
    }
}