/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('completed_workouts', (table) => {
    table.increments('id').primary();
    table.integer('day_id').unsigned().references('id').inTable('days').onUpdate('CASCADE').onDelete('CASCADE');
    table.timestamp('completed_at').notNullable(); 
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('completed_workouts');
}