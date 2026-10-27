# 📚 Estudo de JavaScript

Repositório com minhas anotações e exercícios enquanto aprendo JavaScript do zero.

## 📁 Arquivos

| Arquivo | O que tem |
|---|---|
| [exemplo.js](exemplo.js) | Anotações teóricas (comentários) sobre lógica, variáveis e tipos de dados |
| [index.js](index.js) | Código prático testando os conceitos |

## ▶️ Como rodar

Precisa ter o [Node.js](https://nodejs.org) instalado.

```bash
node index.js
```

## 🧠 O que já estudei

### 1. Lógica de programação e algoritmo
- **Lógica de programação:** entender como o computador "pensa" e como se comunicar com ele.
- **Algoritmo:** uma sequência de passos para resolver algo — ex.: o passo a passo para fazer café.
- Para ficar bom de lógica: **praticar muito**.

### 2. Variáveis
| Palavra | Uso |
|---|---|
| `let` | O valor pode mudar depois |
| `const` | O valor não pode ser reatribuído |
| `var` | Forma antiga, evitar |

### 3. Tipos de dados

**String (texto)**
```js
const idade = 40
const frase = `minha idade é ${idade}` // template string com crase
```

**Number (número)** — aceita operações `+ - * /`
```js
let preco = 50
const quantidade = 3
let total = preco * quantidade // 150
```

**Boolean** — só dois valores: `true` ou `false`.

**Object** — agrupa propriedades e valores, evitando criar várias variáveis soltas. Pode ter objeto dentro de objeto:
```js
const renan = {
  name: 'renan',
  age: 21,
  address: {
    street: 'neymar junior',
    number: 10,
    city: 'santos',
    state: 'sp',
    country: 'brasil'
  }
}
```

**Null e Undefined**
- `null` → vazio **de propósito** (como uma garrafa que você deixou vazia).
- `undefined` → algo que **não existe** ou nunca recebeu valor.

```js
const user = { nome: 'renan', idade: 21, nomeDoConjuge: null }
console.log(user.altura) // undefined
```

## 🚧 Próximos passos
- [ ] Condicionais (`if` / `else`)
- [ ] Arrays
- [ ] Funções
- [ ] Laços de repetição
