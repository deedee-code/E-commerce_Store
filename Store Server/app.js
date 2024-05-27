const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
const RestaurantRouter = require("./route/restaurant.route");

dotenv.config();
dbConnect();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/restaurant', RestaurantRouter)


app.get("/", (req, res) => {
    res.send("Server is running...")
})


app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
}) 