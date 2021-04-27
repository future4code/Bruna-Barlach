function inserirTarefa() {
    const addTarefa = document.getElementById('tarefa')
    const diaSemana = document.getElementById('dias-semana')
    if (addTarefa.value ==="") {
    }
    else {
        switch (diaSemana.value){
            case "segunda":
                segunda.innerHTML += `<li>${tarefa.value}`
            break
            case "terça":
                segunda.innerHTML += `<li>${tarefa.value}`
            break
            case "quarta":
                segunda.innerHTML += `<li>${tarefa.value}`
            break
            case "quinta":
                segunda.innerHTML += `<li>${tarefa.value}`
            break
            case "sexta":
                segunda.innerHTML += `<li>${tarefa.value}`
            break
            case "sabado":
                segunda.innerHTML += `<li>${tarefa.value}`
            break
            case "domingo":
                segunda.innerHTML += `<li>${tarefa.value}`
            break
            default
            break
        }
    }
}
