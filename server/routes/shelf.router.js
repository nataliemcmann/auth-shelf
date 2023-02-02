const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */

// Items GET Route
router.get('/', (req, res) => {
  res.sendStatus(200); // For testing only, can be removed
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
 

  const queryText = `INSERT INTO "item" (description, image_url, user_id)
    VALUES ($1, $2, $3) `;
  pool
    .query(queryText, [])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('ITEM POST  failed: ', err);
      res.sendStatus(500);
    });
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  const sqlValue = [req.params.id, req.user.id];
  const sqlQuery = `
  DELETE FROM "item"
    WHERE "id" = $1 AND "user_id" = $2;
  `;
  pool.query(sqlQuery, sqlValue)
  .then(() => res.sendStatus(200))
  .catch((err) => {
    console.log('Item Delete Failed', err);
    res.sendStatus(500);
  });
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
