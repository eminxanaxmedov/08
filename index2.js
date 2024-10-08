// Создаем пустой массив для хранения введенных чисел
let numbers = [];

// Запрашиваем у пользователя ввод 10 чисел
for (let i = 0; i < 10; i++) {
    let input = prompt(`Введите число ${i + 1}:`);
    // Преобразуем ввод в число и добавляем в массив
    numbers.push(Number(input));
}

// Находим минимальное и максимальное значения с использованием метода apply()
let minNumber = Math.min.apply(null, numbers);
let maxNumber = Math.max.apply(null, numbers);

// Выводим результаты на экран
alert(`Минимальное число: ${minNumber}`);
alert(`Максимальное число: ${maxNumber}`);
