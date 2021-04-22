//Exercício interpretação 1
//a. false
//b. false
//c. true
//e. boolean

//Exercício interpretação 2
//a. undefinied
//b. null
//c. 11
//d. 3
//e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//f. 9

//Exercício de escrita 1
let idade = Number(prompt("Qual sua idade?"))
let idadeAmigue = Number(prompt("Qual de sue melhor amigue?"))
console.log("Sua idade é maior do que a idade de sue amigue?" + idade > idadeAmigue)
let diferencaIdades = idade - idadeAmigue
console.log(diferencaIdades)

//Exercício de escrita 2
let numeroPar = Number(prompt("Diga um número par"))
console.log(numeroPar % 2)
//c. o resto é sempre zero.
//d. resta 1

//Exercício de escrita 3
let listaDeTarefas

//Exercício de escrita 4
let nomeUsuario = prompt("Qual seu nome?")
let email = prompt("Qual seu e-mail?")
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}! `)