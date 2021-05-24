import axios from "axios"
import React from "react"

export default class TelaCadastro extends React.Component{
    state = {
        nome: "",
        email: ""
    }

    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }

    fazerCadastro = () => {
        const url ="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }

        axios.post(url, body, {
            headers: {
                Authorization: "bruna-barlach-paiva"
            }
        })
        .then((res) => {
            alert("Cadastrado com sucesso!")
            this.setState({nome: "", email: ""})
        })
        .catch((err) => {
            //alert(err.reponse.data.message)
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.props.irParaLista}>Ir para lista de Usuários</button>
                <h2>Cadastro</h2>
                <input 
                    placeholder={"Nome"}
                    value={this.state.nome}
                    onChange={this.handleNome}/>
                <input 
                    placeholder={"email"}
                    value={this.state.email}
                    onChange={this.handleEmail}/>
                <button onClick={this.fazerCadastro}>Cadastrar</button>
            </div>
        )
    }
}