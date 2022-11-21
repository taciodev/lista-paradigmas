const readline = require("readline-sync");
const qtdSalary = Number(readline.question("Quantos salários eu vou ler: "));
const salaryArray = [];

for (let i = 0; i < qtdSalary; i++) {
  // Validação do número que o usuário mandou: FAZER
  const salary = readline.question("Qual o seu salário: ");
  console.log(`O seu salário de ${salary} foi adicionado !`);
  salaryArray.push(parseFloat(salary));
}

const result = Math.max(...salaryArray);
console.log(`O maior salário é ${result}`);

// ---------------------------------------

// const salary = [20.0, 34, 50.0, 950.0, 40.0, 900.0];
// console.log(Math.max(...salary));
