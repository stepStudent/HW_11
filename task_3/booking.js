import { rooms } from './rooms.js';

/**
 * 1. Повертає лише доступні номери через filter().
 * @returns {Array<object>} Масив доступних номерів
 */
export function getAvailableRooms() {
  return rooms.filter(room => room.available);
}

/**
 * 2. Пошук номера за id через find().
 * @param {number} id - Ідентифікатор номера
 * @returns {object|undefined} Знайдений номер або undefined
 */
export function findRoom(id) {
  return rooms.find(room => room.id === id);
}

/**
 * 3. Бронювання номера:
 * - Перевіряє, чи існує номер.
 * - Перевіряє його доступність.
 * - Обчислює вартість проживання.
 * - Надає знижку 15% при бронюванні від 5 ночей.
 * - Після успішного бронювання змінює available на false.
 *
 * @param {number} id - Ідентифікатор номера
 * @param {number} nights - Кількість ночей
 * @returns {string} Вартість проживання або статус
 */
export function bookRoom(id, nights) {
  const room = findRoom(id);

  // Перевірка, чи існує номер
  if (!room) {
    const errorMsg = `❌ Номер з id ${id} не знайдено в каталозі готелю!`;
    console.log(errorMsg);
    return errorMsg;
  }

  // Перевірка доступності номера
  if (!room.available) {
    const errorMsg = `❌ Номер #${room.id} (${room.type}) недоступний (вже зайнятий).`;
    console.log(errorMsg);
    return "Номер недоступний";
  }

  // Розрахунок вартості
  const basePrice = room.price * nights;
  const hasDiscount = nights >= 5;
  const finalPrice = hasDiscount ? basePrice * 0.85 : basePrice;

  // Зміна статусу номера на зайнятий
  room.available = false;

  // Красиве та зрозуміле виведення результату
  console.log(`✅ УСПІШНО ЗАБРОНЬОВАНО:`);
  console.log(`   • Номер:       #${room.id} [${room.type}]`);
  console.log(`   • Період:      ${nights} ${nights === 1 ? 'ніч' : nights < 5 ? 'ночі' : 'ночей'}`);
  console.log(`   • Тариф:       ${room.price} грн / ніч`);
  if (hasDiscount) {
    console.log(`   • Знижка 15%:  -${basePrice * 0.15} грн (за тривале бронювання від 5 ночей)`);
  }
  console.log(`   💳 До сплати:  ${finalPrice} грн`);

  return `${finalPrice} грн`;
}

/**
 * Допоміжна функція: красивий вивід картки одного номера
 * @param {object} room
 */
export function printRoomInfo(room) {
  if (!room) {
    console.log("❌ Номер не знайдено.");
    return;
  }

  const status = room.available 
    ? "🟢 Вільний (доступний до бронювання)" 
    : "🔴 Зайнятий";

  console.log(`🏨 Інформація про номер #${room.id}:`);
  console.log(`   ┌ Категорія:  ${room.type}`);
  console.log(`   ├ Ціна/доба:  ${room.price} грн`);
  console.log(`   └ Статус:     ${status}`);
}

/**
 * Допоміжна функція: вивід номерів у вигляді зручної та читабельної таблиці (console.table)
 * @param {Array<object>} roomsList
 * @param {string} title
 */
export function printRoomsTable(roomsList, title = "Каталог номерів") {
  console.log(`\n📋 ${title} (${roomsList.length}):`);
  
  const formatted = roomsList.map(r => ({
    "ID": `#${r.id}`,
    "Категорія": r.type,
    "Ціна за добу": `${r.price} грн`,
    "Статус": r.available ? "🟢 Вільний" : "🔴 Зайнятий"
  }));

  console.table(formatted);
}
