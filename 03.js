/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

import FakeJson from "./fake.json";

const valores = Object.values(FakeJson);

const menor = Math.min(...valores);
const maior = Math.max(...valores);

const total = valores.reduce((acc, cur) => acc + cur, 0);
const media = total / valores.length;

const diasAcimaDaMedia = valores.filter((valor) => valor > media).length;

console.log(`Menor valor de faturamento: ${menor}`);
console.log(`Maior valor de faturamento: ${maior}`);
console.log(`Dias acima da média: ${diasAcimaDaMedia}`);
