//Exercício 1
//a. 10, 50
//b. não apareceria nada no console.

//Exercício 2
//a. Darvas, Caio.
//b. Amanda, Caio.

//Exercício 3
const metodo = (array) => {
    let arrayFinal = [];
  
    for (let x of array) {
          if (x % 2 === 0) {
          arrayFinal.push(x * x)
          }
    }
  
    
    console.log(arrayFinal)
  }
  