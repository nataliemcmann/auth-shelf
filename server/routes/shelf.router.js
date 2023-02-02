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
 
  const newItem = req.body;
  const queryText = `INSERT INTO "item" (description, image_url, user_id)
    VALUES ($1, $2, $3) `;
  const queryValues =[newItem.description, newItem.url, newItem.user_id]
  pool
    .query(queryText, queryValues)
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
  const sqlValue = [req.params.id];
  const sqlQuery = `
  DELETE FROM "item"
    WHERE "user_id" = $1;
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
