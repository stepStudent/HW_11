import { courses, calculateAveragePrice } from './courses.js';

console.log("=== Завдання 2. Каталог онлайн-курсів ===\n");

// 1. За допомогою filter() знайдіть усі курси категорії Programming
const programmingCourses = courses.filter(course => course.category === "Programming");
console.log("1. Курси категорії 'Programming':", programmingCourses);

// 2. За допомогою map() створіть масив назв курсів із ціною
const courseTitlesWithPrices = courses.map(course => `${course.title} - ${course.price} грн`);
console.log("2. Назви курсів із ціною:", courseTitlesWithPrices);

// 3. За допомогою find() знайдіть курс з id = 4
const courseWithId4 = courses.find(course => course.id === 4);
console.log("3. Курс з id = 4:", courseWithId4);

// 4. Відсортуйте курси за кількістю студентів — від найбільшої до найменшої, не змінюючи початковий масив
const sortedByStudents = [...courses].sort((a, b) => b.students - a.students);
console.log("4. Курси, відсортовані за спаданням кількості студентів:", sortedByStudents);
console.log("   (Перевірка) Початковий масив courses залишився без змін:", courses);

// 5. Функція, яка знаходить середню ціну всіх курсів за допомогою циклу for...of
const averagePrice = calculateAveragePrice(courses);
console.log(`\n5. Середня ціна всіх курсів: ${averagePrice} грн`);

