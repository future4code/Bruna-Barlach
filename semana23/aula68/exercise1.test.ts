import {isOneEdit} from "./exercise1"

describe("Testando a função isOneEdit", () => {
    test("Comportamento ok", () => {
        expect(isOneEdit("banan","banana")).toBe(true)
        expect(isOneEdit("bananak","banana")).toBe(true)
        expect(isOneEdit("panana","banana")).toBe(true)
        expect(isOneEdit("bananaaa","banana")).toBe(false)
        expect(isOneEdit("Eduardo","Epuardo")).toBe(true)
    })})
