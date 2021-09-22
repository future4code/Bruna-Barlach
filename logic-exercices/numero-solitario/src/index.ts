export function numeroSozinho(numeros:Array<number>) {
    let sozinhos: Array<number> = []
    for (const num of numeros) {
        if(sozinhos.includes(num)){
            sozinhos.splice(sozinhos.indexOf(num), 1)
        } else {
            sozinhos.push(num)
        }
    }
    return sozinhos.pop()
}