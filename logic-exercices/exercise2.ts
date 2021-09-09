export function  checaParenteses (source:any) {
    let fila=[]
    const abre="([{"
    const fecha=")]}"
    let caracter:string=""
    for (const caracter of source) {
        if (abre.includes(caracter)) {
            fila.push(caracter)
        }            
        else if (fecha.includes(caracter)) {
            let ultimo= fila[fila.length-1]
            if (ultimo==abre[fecha.indexOf(caracter)]){
                
                fila.pop()
            }
            else {
                return false
            }
        }
    
    }
    if (fila.length==0){
        return true
    }
    return false
}
