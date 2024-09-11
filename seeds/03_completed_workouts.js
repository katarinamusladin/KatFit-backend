/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {

  await knex('completed_workouts').del();

  await knex('completed_workouts').insert([
    { id: 1, day_id: 1, completed_at: knex.fn.now() }, 
    { id: 2, day_id: 2, completed_at: knex.fn.now() }, 
  ]);
}