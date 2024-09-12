import express from 'express';
import knex from 'knex';
import knexConfig from "../knexfile.js";

const router = express.Router();
const db = knex(knexConfig);

//Fetch all workout days
router.get('/days', async (req, res) => {
  try {
    const days = await db('days').select('id', 'name', 'focus as target_area', 'image');
    res.json(days);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch workout days' }); // Use 500 for server errors
  }
});

// Fetch details of a specific workout day
router.get('/days/:day_id', async (req, res) => {
  const dayId = req.params.day_id;
  
  try {
    // Fetch day details
    const day = await db('days').where({ id: dayId }).first();
    if (!day) {
      return res.status(404).json({ error: 'Day not found' });
    }

    // Fetch exercises for the specific day
    const exercises = await db('exercises').where({ day_id: dayId }).select('id', 'name', 'sets', 'reps', 'weight', 'image', 'video_url');

    // Combine day details with exercises
    res.json({
      id: day.id,
      name: day.name,
      target_area: day.target_area,
      image: day.image,
      exercises: exercises
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch workout day details' }); // Use 500 for server errors
  }
});

export default router;