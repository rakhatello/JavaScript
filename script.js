// 1числа от 1-10
console.log("=== 1. числа от 1-10 ===");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// 2 числа от 10-1
console.log("=== 2. числа от 10-1 ===");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 3 сумма всех чисел от 1-100
console.log("=== 3. сумма всех чисел от 1-100 ===");

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log("Total:", sum);

// 4 города
console.log("=== 4. города ===");

let cities = ["АЛМАТЫ", "ШЫМКЕНТ", "НЬЮ-ЙОРК", "ПЕКИН", "ДУБАЙ"];

for (let i = 0; i < cities.length; i++) {
    console.log(i + 1, cities[i]);
}

// 5 количество городов 
console.log("=== 5. количество городов ===");

for (let city of cities) {
    console.log(city);
}

// 6. четные числа ы
console.log("=== 6. четные числа  ===");

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}