export function  roubo (casas:Array<number>) {
   let pares:number=0
   let impares:number=0
   for (let index = 0; index < casas.length; index++) {
       if (index % 2==0){
            pares += casas[index];
       }
   }
   for (let index = 0; index < casas.length; index++) {
        if (index % 2!=0){
            impares += casas[index];
        }
    }
    return pares > impares ? pares : impares
}
