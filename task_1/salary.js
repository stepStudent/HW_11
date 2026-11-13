/**
 * Розраховує заробітну плату працівника.
 * Якщо відпрацьовано більше 160 годин, додається бонус 10% до всієї зарплати.
 *
 * @param {number} hours - Відпрацьовані години
 * @param {number} rate - Погодинна ставка (грн/год)
 * @returns {number} Заробітна плата
 */
export function calculateSalary(hours, rate) {
  let salary = hours * rate;

  if (hours > 160) {
    salary *= 1.1; // бонус 10%
  }

  return salary;
}

/**
 * Розраховує та повертає загальну суму виплат усім працівникам.
 *
 * @param {Array<{name: string, hours: number, rate: number}>} employees - Список працівників
 * @returns {number} Загальна сума виплат
 */
export function calculatePayroll(employees) {
  let total = 0;

  for (const employee of employees) {
    total += calculateSalary(employee.hours, employee.rate);
  }

  return total;
}

