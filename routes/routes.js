import express from "express";
import knex from "knex";
import knexConfig from "../knexfile.js";

const router = express.Router();
const db = knex(knexConfig);

//Fetch all workout days
router.get("/days", async (req, res) => {
  try {
    const days = await db("days").select(
      "id",
      "name",
      "focus as target_area",
      "image"
    );
    res.json(days);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch workout days" });
  }
});

// Fetch details of a specific workout day
router.get("/days/:day_id", async (req, res) => {
  const dayId = req.params.day_id;

  try {
    // Fetch day details
    const day = await db("days").where({ id: dayId }).first();
    if (!day) {
      return res.status(404).json({ error: "Day not found" });
    }

    // Fetch exercises for the specific day
    const exercises = await db("exercises")
      .where({ day_id: dayId })
      .select("id", "name", "sets", "reps", "weight", "image", "video_url");

    res.json({
      id: day.id,
      name: day.name,
      target_area: day.target_area,
      image: day.image,
      exercises: exercises,
    });
  } catch (error) {
    res.status(404).json({ error: "Failed to fetch workout day details" });
  }
});


router.put("/days/:day_id/exercises/:exercise_id", async (req, res) => {
  const { day_id, exercise_id } = req.params;
  const { sets, reps, weight } = req.body;

  try {
    const updatedCount = await db("exercises")
      .where({ id: exercise_id, day_id })
      .update({ sets, reps, weight });

    if (updatedCount) {
      res.status(200).json({ message: "Exercise updated successfully" });
    } else {
      res.status(404).json({ error: "Exercise not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update exercise" });
  }
});

export default router;
