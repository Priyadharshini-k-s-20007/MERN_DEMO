const express = require("express");
const ProductRoute = require("./routes/ProductRoute");
const dotenv = require("dotenv");
const connectdb = require("./config/db");
const cors = require("cors");

dotenv.config();
connectdb(); // Connect to MongoDB

const app = express();

app.use(cors());
app.use(express.json()); // Needed to parse JSON body

app.use("/sleeping", ProductRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
