/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('days').del();

  // Inserts seed entries
  await knex('days').insert([
    { id: 1, name: 'Day 1', focus: 'Legs', image: 'legs-image.jpg' },
    { id: 2, name: 'Day 2', focus: 'Upper Body', image: 'upper-body-image.jpg' },
    { id: 3, name: 'Day 3', focus: 'Glutes', image: 'glutes-image.jpg' },
    { id: 4, name: 'Day 4', focus: 'HIIT Cardio', image: 'hiit-cardio-image.jpg' },
    { id: 5, name: 'Day 5', focus: 'Full Body', image: 'full-body-image.jpg' }
  ]);
}