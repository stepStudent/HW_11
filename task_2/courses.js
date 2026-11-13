/**
 * Каталог онлайн-курсів
 */
export const courses = [
  { id: 1, title: "Python Basics", category: "Programming", price: 1200, students: 150 },
  { id: 2, title: "UI/UX Design", category: "Design", price: 1800, students: 90 },
  { id: 3, title: "JavaScript", category: "Programming", price: 1500, students: 200 },
  { id: 4, title: "Photoshop", category: "Design", price: 900, students: 110 },
  { id: 5, title: "Data Science", category: "Programming", price: 2500, students: 75 }
];

/**
 * Знаходить середню ціну всіх курсів за допомогою циклу for...of.
 *
 * @param {Array<{id: number, title: string, category: string, price: number, students: number}>} coursesList
 * @returns {number} Середня ціна курсів
 */
export function calculateAveragePrice(coursesList) {
  if (!coursesList || coursesList.length === 0) {
    return 0;
  }

  let totalPrice = 0;

  for (const course of coursesList) {
    totalPrice += course.price;
  }

  return totalPrice / coursesList.length;
}

