import { numeroSozinho } from "./index"

describe("Testando a função numeroSozinho", () => {
    test("ok", () => {
        expect(numeroSozinho([1,1,2,2,3])).toBe(3)
        expect(numeroSozinho([1,1,2,3,3])).toBe(2)
    })
})
