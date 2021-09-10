import {roubo} from "./exercise3"

describe("Testando a função checaParenteses", () => {
    test("Válido", () => {
        let casas =[1,2,3,1];
        expect(roubo(casas)).toBe(4)
        casas =[2,7,9,3,1];
        expect(roubo(casas)).toBe(12)
        casas =[2,3,6,12,3,9,11,4];
        expect(roubo(casas)).toBe(28)
        casas =[];
        expect(roubo(casas)).toBe(0)
        casas =[0];
        expect(roubo(casas)).toBe(0)
    })
})
