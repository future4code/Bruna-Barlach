export function compress (source:string){
    let compressed = ""
    let lastChar = ""
    let lastCharCount = 1
    let index = 1
    for (const char of source) {
        console.log('char:'+char+'  comp:'+ compressed)
        if (char == lastChar) {
            lastCharCount++
        }
        if ((char != lastChar) || (source.length == index)) {
            if (lastChar != "") {
                compressed = compressed + lastChar + lastCharCount
                lastCharCount = 1
            }
            lastChar = char
        }
        if (compressed.length > source.length) {
            console.log('compressed > source')
            return source
        }
        index++
    }
    return compressed  
}