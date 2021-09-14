import {compress} from "./exercise2"

describe("Testando a função compress", () => {
    test("Comportamento ok", () => {
        expect(compress("aabbb")).toBe("a2b3")
        expect(compress("aabcccccaaa")).toBe("a2b1c5a3")
        expect(compress("accurate")).toBe("accurate")
        expect(compress("escola")).toBe("escola")
        expect(compress("accuraaaaaaaaaate")).toBe("a1c2u1r1a10t1e1")
    })})