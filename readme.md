### Projeto test unitários com Jest TypeScript

#### Criando o projeto
* <b>1.</b> criando o projeto
```
npm init -y
```

* <b>2.</b> instalando dependências
```
npm i typescript jest @types/jest ts-jest
```

* <b>3.</b> iniciando o typescript
```
npx tsc --init
```

* <b>4.</b> configurando o package.json
```
"scripts": {
    "test": "jest"
},
```

* <b>5.</b> criar arquivo na raiz jest.config.js
```
module.exports={
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/*.test.ts"]
}
```

* <b>6.</b> rodando o projeto
```
npm test
```

#### Modelo inicial
* <b>1.</b> criar pasta src
    * soma.ts
```
export function soma(a:number, b:number){
    return a+b;
}
```

* <b>2.</b> criar pasta test
    * soma.test.ts
```
import { soma } from "../src/soma";

test("Deve testar a função soma", () => {
    const resultado = soma(1,2)
    expect(resultado).toBe(3)
})
```