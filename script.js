// Задача 1.


function getComputerWord(num) {
    // Приводим число к абсолютному значению (на случай отрицательных чисел)
    const absNum = Math.abs(num);

    // Берем последние две цифры для проверки исключений (11-14)
    const lastTwoDigits = absNum % 100;

    // Если число заканчивается на 11-14, то "компьютеров"
    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return `${num} компьютеров`;
    }

    // Берем последнюю цифру для остальных случаев
    const lastDigit = absNum % 10;

    // Определяем окончание
    if (lastDigit === 1) {
        return `${num} компьютер`;
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        return `${num} компьютера`;
    } else {
        return `${num} компьютеров`;
    }
}

// Примеры использования
console.log(getComputerWord(25));   // "25 компьютеров"
console.log(getComputerWord(41));   // "41 компьютер"
console.log(getComputerWord(1048)); // "1048 компьютеров"
console.log(getComputerWord(13));   // "13 компьютеров"
console.log(getComputerWord(-21));  // "-21 компьютер"



// Задача 2.

function findCommonDivisors(numbers) {
    // Функция для нахождения НОД двух чисел
    function gcd(a, b) {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }

    // Нахождение НОД всего массива
    let overallGCD = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        overallGCD = gcd(overallGCD, numbers[i]);
        if (overallGCD === 1) {
            // Если НОД стал 1, больше проверять не нужно
            return [1];
        }
    }

    // Нахождение всех делителей НОД
    const divisors = [];
    for (let i = 1; i <= Math.sqrt(overallGCD); i++) {
        if (overallGCD % i === 0) {
            divisors.push(i);
            if (i !== overallGCD / i) {
                divisors.push(overallGCD / i);
            }
        }
    }

    // Сортировка делителей
    return divisors.sort((a, b) => a - b);
}

// Примеры использования
console.log(findCommonDivisors([42, 12, 18])); // [1, 2, 3, 6]
console.log(findCommonDivisors([60, 90, 120])); // [1, 2, 3, 5, 6, 10, 15, 30]
console.log(findCommonDivisors([7, 13, 29])); // [1]




// Задача 3.

function getPrimesInRange(min, max) {
    // Функция для проверки, является ли число простым
    function isPrime(num) {
        if (num < 2) return false; // Числа меньше 2 не являются простыми
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false; // Число делится без остатка
            }
        }
        return true; // Число простое
    }

    // Меняем границы диапазона, если нужно
    const start = Math.min(min, max);
    const end = Math.max(min, max);

    // Находим все простые числа в диапазоне
    const primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}

// Примеры использования
console.log(getPrimesInRange(11, 20)); // [11, 13, 17, 19]
console.log(getPrimesInRange(1, 10));  // [2, 3, 5, 7]
console.log(getPrimesInRange(50, 60)); // [53, 59]
console.log(getPrimesInRange(20, 11)); // [11, 13, 17, 19] (переставляет границы)



// Задача 4.

function printMultiplicationTable(n) {
    // Проверка на корректность входных данных
    if (n <= 0 || !Number.isInteger(n)) {
        console.log("Введите положительное целое число.");
        return;
    }

    // Создание заголовка таблицы
    let header = "   |";
    for (let i = 1; i <= n; i++) {
        header += `${String(i).padStart(4, " ")} `;
    }
    console.log(header);

    // Линия-разделитель
    console.log("-".repeat(header.length));

    // Формирование строк таблицы
    for (let i = 1; i <= n; i++) {
        let row = `${String(i).padStart(2, " ")} |`; // Номер строки
        for (let j = 1; j <= n; j++) {
            row += `${String(i * j).padStart(4, " ")} `;
        }
        console.log(row);
    }
}

// Пример использования
printMultiplicationTable(5);
