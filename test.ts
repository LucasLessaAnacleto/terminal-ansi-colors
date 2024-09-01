import { c } from "./index";

// String com texto verde, fundo amarelo, e em negrito
const message = c("Alerta!")
  .txtName("green")
  .bgName("yellow")
  .style("bold");

console.log(message.str);

// String com cor de texto RGB e fundo padrão
console.log(message.bgName("default").str);