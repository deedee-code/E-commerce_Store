const Restaurant = require("../model/restaurant.model")

const getAllRestaurant = async (req, res) => {
    try {
        const restaurants = await Restaurant.find()
        res.status(200).json({ success: true, data: restaurants })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
}


const searchRestaurant = async (req, res) => {
    const { query } = req.query

    if (!query || query.trim() === '') {
        return res.status(400).json({ error: 'Search query is required' });
    }

    try {
        const restaurants = await Restaurant.find({ $text: { $search: query } })
        res.status(200).json({ success: true, data: restaurants })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
}


const filterRestaurant = async (req, res) => {
    const { tag } = req.params;
    try {
        const restaurants = await Restaurant.find({ tags: tag });
        res.status(200).json({ succcess: true, data: restaurants });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

module.exports = { getAllRestaurant, searchRestaurant, filterRestaurant }