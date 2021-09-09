import {checaParenteses} from "./exercise2"

describe("Testando a função checaParenteses", () => {
    test("Válido", () => {
        let source ="(Bruna)";
        expect(checaParenteses(source)).toBe(true)
        source ="[(Bruna)]";
        expect(checaParenteses(source)).toBe(true)
        source ="()";
        expect(checaParenteses(source)).toBe(true)
        source ="[()]";
        expect(checaParenteses(source)).toBe(true)
        source ="[()]{}";
        expect(checaParenteses(source)).toBe(true)
    })
    test("Inválido", () => {
        let source ="(Bruna";
        expect(checaParenteses(source)).toBe(false)
        source ="(Bruna]";
        expect(checaParenteses(source)).toBe(false)
        source ="(Bruna))";
        expect(checaParenteses(source)).toBe(false)
        source ="(Bruna){";
        expect(checaParenteses(source)).toBe(false)
        source ="](Bruna)";
        expect(checaParenteses(source)).toBe(false)
    })
})
