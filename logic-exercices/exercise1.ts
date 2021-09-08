export function  indexOf (source:any, query:any) {
    for (let index = 0; index < source.length; index++) {
        const element = source[index];
        if (element==query) {
            return index
        }
    }
    return -1
}
