# terminal-ansi-colors

Esse pacote exporta uma função utilitária para aplicar cores ANSI em strings, permitindo personalizar saídas coloridas no terminal. Ele suporta cores predefinidas, valores RGB personalizados e também estilos como negrito, itálico e sublinhado.

## Instalação

Você pode instalar este pacote via npm:
```shell
npm install terminal-ansi-colors
```

## Uso

### Importando

```js
const { c } = require('terminal-ansi-colors');
```

### Aplicando Cores de texto
Você pode encadear as funções para aplicar cores e estilos a uma string.
```js
// Aplicando cores de texto e fundo
console.log(c("Olá").txtName("green").bgName("yellow").str);

// Alterando cores de texto repetidamente
console.log(c("Texto").txtName("green").txtName("black").txtName("red").str);

// Usando cores RGB personalizadas
console.log(c("Texto com cor RGB").txtRGB([180, 180, 180]).str);

// Aplicando estilo itálico e removendo fundo
console.log(c("Texto estilizado").style("italic").txtName("green").bgName("white").bgName("default").str);
```

### Métodos Disponíveis
**txtName**: Define a cor do texto com um nome de cor predefinido.
```js
console.log(c("Texto").txtName("blue") + ".");
```
**txtRGB**: Define a cor do texto usando um valor RGB.
```js
console.log(c("Texto").txtRGB([255, 0, 0]).str); // Texto em vermelho
```
**bgName**: Define a cor de fundo com um nome de cor predefinido ou restaura o fundo padrão com "default".
```js
console.log(c("Texto").bgName("yellow").str);
```
**bgRGB**: Define a cor de fundo usando um valor RGB.
```js
console.log(c("Texto").bgRGB([255, 255, 0]).str); // Fundo amarelo
```
**style**: Aplica um estilo ao texto. Estilos disponíveis:
- bold (negrito)
- dim (escurecido)
- italic (itálico)
- underline (sublinhado)
- blink (piscar)
- rapidBlink (piscar rápido)
- reverse (inverter cores)
- hidden (oculto)
- strikethrough (tachado)
- doubleUnderline (duplo sublinhado)

```js
console.log(c("Texto estilizado").style("bold").str);
```
### Cores Predefinidas
As seguintes cores podem ser usadas como valores para txtName e bgName:

- **Vermelhos:**
    - **red**
    - **darkRed**
    - **lightRed**
- **Verdes:**
    - **green**
    - **darkGreen**
    - **lightGreen**
- **Azuis:**
    - **blue**
    - **darkBlue**
    - **lightBlue**
- **Amarelos**:
    - **yellow**
    - **darkYellow**
    - **lightYellow**
- **Ciano:**
    - **cyan**
    - **darkCyan**
    - **lightCyan**
- **Magenta:**
    - **magenta**
    - **darkMagenta**
    - **lightMagenta**
- **Neutros:**
    - **black**
    - **white**
    - **gray**
    - **darkGray**
    - **lightGray**
- **Laranjas:**
    - **orange**
    - **darkOrange**
    - **lightOrange**
- **Roxos:**
    - **purple**
    - **darkPurple**
    - **lightPurple**
- **Marrons:**
    - **brown**
    - **darkBrown**
    - **lightBrown**
- **Rosas:**
    - **pink**
    - **darkPink**
    - **lightPink**
- **Outros:**
    - **navy**
    - **teal**
    - **olive**
    - **maroon**
    - **lime**

## Exemplo Completo:
```js
const { c } = require('terminal-ansi-colors');

// String com texto verde, fundo amarelo, e em negrito
const message = c("Alerta!")
  .txtName("green")
  .bgName("yellow")
  .style("bold");

console.log(message.str);

// A mesma mensagem porém com o fundo padrão do terminal
console.log(message.bgName("default").str);
```

