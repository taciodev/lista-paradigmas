const num = [10, 20, 30, 40, 50, 60, 70];
let sum = 0;

for (let item of num) {
  sum += item;
}

const average = sum / num.length;
console.log(average);
