### Projeto test unitários com Jest TypeScript

#### Criando o projeto
* 1. criando o projeto
```
npm init -y
```

* 2. instalando dependências
```
npm i typescript jest @types/jest ts-jest
```

* 3. iniciando o typescript
```
npx tsc --init
```

* 4. configurando o package.json
```
"scripts": {
    "test": "jest"
},
```

* 5. criar arquivo na raiz jest.config.js
```
module.exports={
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/*.test.ts"]
}
```

* 6. rodando o projeto
```
npm test
```

#### Modelo inicial
* 1. criar pasta src
    * soma.ts
```
export function soma(a:number, b:number){
    return a+b;
}
```

* 2. criar pasta test
    * soma.test.ts
```
import { soma } from "../src/soma";

test("Deve testar a função soma", () => {
    const resultado = soma(1,2)
    expect(resultado).toBe(3)
})
```