import React from "react";
import AddPlay from "./components/AddPlay"
import VerMusicas from "./components/VerMusicas"

export default class App extends React.Component {

  state = {
    telaAtual: "cadastroPlay"
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastroPlay":
        return <AddPlay irParaAddMusica={this.irParaAddPlay}/>
      case "lista":
        return <VerMusicas irParaVerMusicas={this.irParaVerMusicas}/>
      default:
        return <div>Erro! Página não encontrada :(</div>
    }
  }

  irParaAddPlay = () => {
    this.setState({telaAtual: "cadastroPlay"})
  }

  irParaVerMusicas = () => {
    this.setState({telaAtual: "lista"})
  }

  render(){

    return(
      <div>
      {this.escolheTela()}
      </div>
    )
  }

}