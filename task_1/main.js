import { calculateSalary, calculatePayroll } from './salary.js';

// Початкові дані
const employees = [
  { name: "Олег", hours: 160, rate: 200 },
  { name: "Марія", hours: 145, rate: 250 },
  { name: "Іван", hours: 180, rate: 180 },
  { name: "Анна", hours: 170, rate: 220 }
];

// Виведення у консоль зарплати кожного працівника за допомогою циклу for...of
for (const employee of employees) {
  const salary = calculateSalary(employee.hours, employee.rate);
  const bonus = employee.hours > 160 ? " (з бонусом)" : "";
  console.log(`${employee.name}: ${salary} грн${bonus}`);
}

// Загальні витрати
const totalExpenses = calculatePayroll(employees);
console.log(`Загальні витрати: ${totalExpenses} грн`);

