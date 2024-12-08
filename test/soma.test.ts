import { soma } from "../src/soma";

test("Deve testar a função soma", () => {
    const resultado = soma(1,2)
    expect(resultado).toBe(3)
})

it("Deve testar a função soma", () => {
    const resultado = soma(10,10)
    expect(resultado).toBe(20)
})

test("Deve verificar se é um valor nullo", () => {
    expect(null).toBe(null)
})

it("Deve verificar se é um valor nullo 2", () => {
    expect(null).toBeNull()
})

test("não pode ser nullo", () => {
    expect(1).not.toBeNull()
})

test("Deve verificar se um valor está definido ou não nulo", () => {
    expect(3).toBeDefined()
    expect(3).not.toBeUndefined()
    expect(null).not.toBe(undefined)
})

test("Deve verificar se um valor está indefinido", () => {
    expect(undefined).toBe(undefined)
    expect(undefined).toBeUndefined()
})

test("Deve verificar se um valor é falsy", () => {
    expect(undefined).toBeFalsy()
    expect(null).toBeFalsy()
    expect("").toBeFalsy()
    expect(0).toBeFalsy()
    expect(-0).toBeFalsy()
    expect(false).toBeFalsy()
})

test("Deve verificar se um valor é truthy", () => {
    expect(4).toBeTruthy()
    expect(true).toBeTruthy()
    expect("oi").toBeTruthy()
    expect(-22).toBeTruthy()
})

test("Deve verificar se um valor é maior que outro", () => {
    expect(10).toBeGreaterThan(5)
})

test("Deve verificar se um valor é maior ou igual a outro", () => {
    expect(10).toBeGreaterThanOrEqual(10)
    expect(10).toBeGreaterThanOrEqual(5)
})

test("Deve verificar se um valor é menor que outro", () => {
    expect(10).toBeLessThan(20)
})

test("Deve verificar se um valor é menor ou igual a outro", () => {
    expect(10).toBeLessThanOrEqual(20)
    expect(10).toBeLessThanOrEqual(10)
})

test("Deve verificar se um valor é próximo de outro", () => {
    expect(0.2222223).toBeCloseTo(0.22, 2)
})



