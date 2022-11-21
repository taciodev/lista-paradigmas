const readline = require("readline-sync");
const vet1 = [];
const vet2 = [];

for (let i = 0; i < 3; i++) {
  let number = parseFloat(
    readline.question("Fale um número int para a primeira lista: ")
  );
  console.log(`número adicionado ${number}`);
  vet1.push(number);
}

for (let i = 0; i < 3; i++) {
  let number = parseFloat(
    readline.question("Fale um número int para a segunda lista: ")
  );
  console.log(`número adicionado ${number}`);
  vet2.push(number);
}

console.log(vet1, vet2);

// ---------------------------------------

// const salary = [20.0, 34, 50.0, 950.0, 40.0, 900.0];
// console.log(Math.max(...salary));
