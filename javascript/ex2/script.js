const readline = require("readline-sync");
const salaryArray = [];

for (let i = 0; i < 2; i++) {
  // Validação do número que o usuário mandou: FAZER
  let salary = parseFloat(readline.question("Qual o seu salário: "));
  if (salary < 1000) {
    salary = salary + (10 / 100) * salary;
  }
  console.log(`O seu salário de ${salary} foi adicionado !`);
  salaryArray.push(salary);
}

// const result = Math.max(...salaryArray);
console.log(salaryArray);

// ---------------------------------------

// const salary = [20.0, 34, 50.0, 950.0, 40.0, 900.0];
// console.log(Math.max(...salary));
