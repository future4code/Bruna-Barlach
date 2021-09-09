import {indexOf} from "./exercise1"

describe("Testando a função indexOf", () => {
    test("Comportamento ok", () => {
        const source ="Bruna";
        expect(indexOf(source,"B")).toBe(0)
        
    })
    test("Não encontrada", () => {
        const source ="Bruna";
        expect(indexOf(source,"Z")).toBe(-1)
    })
})
