// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

function task3(length, max) {
    const arr = [];
    let sum = 0;
    let min = max;
    for (let i = 0; i < length; i++) {
        let number = Math.floor(Math.random() * (max+1));
        arr.push(number);
        sum += number;
        if (number < min) min = number;
    }
    console.log(`Полученный массив: ${arr}`);
    console.log(`Сумма элементов: ${sum}`);
    console.log(`Минимальное число: ${min}`);
    (arr.includes(3)) ? console.log(`Массив содержит число 3`) : console.log(`Массив не содержит число 3`);

}

task3(5, 9);