const express = require('express');
const { getAllRestaurant, searchRestaurant, filterRestaurant } = require('../controller/restaurant.controller');
const router = express.Router();

router.get("/", getAllRestaurant);
router.get("/search", searchRestaurant);
router.get("/:tag", filterRestaurant)

module.exports = router;