import { rooms } from './rooms.js';
import { getAvailableRooms, findRoom, bookRoom, printRoomInfo, printRoomsTable } from './booking.js';

console.log("=========================================================");
console.log("🏨  СИСТЕМА ПОШУКУ ТА БРОНЮВАННЯ НОМЕРІВ ГОТЕЛЮ");
console.log("=========================================================");

// 1. Пошук та перегляд усіх доступних номерів
console.log("\n🔍 КРОК 1. Пошук вільних номерів через getAvailableRooms():");
const availableRooms = getAvailableRooms();
printRoomsTable(availableRooms, "Знайдено доступні номери");

// 2. Детальний перегляд інформації про конкретний номер
console.log("\n🔍 КРОК 2. Пошук номера за id = 2 через findRoom(2):");
const foundRoom = findRoom(2);
printRoomInfo(foundRoom);

// 3. Моделювання процесу бронювання (запити від клієнтів)
console.log("\n=========================================================");
console.log("🛎️  КРОК 3. Обробка замовлень на бронювання (bookRoom)");
console.log("=========================================================\n");

console.log("👉 Замовлення 1: bookRoom(1, 3)");
bookRoom(1, 3); // 4500 грн

console.log("\n👉 Замовлення 2: bookRoom(2, 5) [Тривале бронювання — знижка 15%]");
bookRoom(2, 5); // 10625 грн

console.log("\n👉 Замовлення 3: bookRoom(3, 2) [Номер Suite спочатку був зайнятий]");
bookRoom(3, 2); // Номер недоступний

console.log("\n👉 Замовлення 4: bookRoom(1, 2) [Повторна спроба забронювати номер 1]");
bookRoom(1, 2); // Номер недоступний

// 4. Перевірка оновленого стану номерів після бронювання
console.log("\n=========================================================");
console.log("📊  КРОК 4. Підсумковий стан номерного фонду");
console.log("=========================================================");

const remainingRooms = getAvailableRooms();
printRoomsTable(remainingRooms, "Залишилися вільними для бронювання");

printRoomsTable(rooms, "Повний каталог усіх номерів готелю");
