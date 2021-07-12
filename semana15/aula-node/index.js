//através do process.arg

const nome = process.argv[2]
const idade = Number(process.argv[3])

const numero1 = Number(process.argv[4])
const numero2 = Number(process.argv[5])
const resultado = (numero1*numero2)
const tasks = [
    "estudar",
    "trabalhar",
    "ler livro"
  ]
const task = process.argv[6]
tasks.push(task)
console.log(`"Olá, ${nome}! Você tem ${idade} anos."`)
console.log(`Em sete anos você terá ${idade+7} anos.`)

console.log(`A multiplicação de ${numero1} pelo ${numero2} é ${resultado}`)

console.log(tasks)