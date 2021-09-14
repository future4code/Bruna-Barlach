export function  isOneEdit (stringA:string, stringB:string) {
    let contador=0
    if (stringA < stringB) {
        let temp=stringA
        stringA = stringB
        stringB = temp
    }
    for (let index = 0; index < stringA.length; index++) {
        const char = stringA[index];
        if (index >= stringB.length) {
            contador++
        } else if (char != stringB[index] ) {
            contador++
        }
        if (contador >1 ) {
            return false
        }
    }
    if (contador == 0) {
        return false
    }
    return true
}
