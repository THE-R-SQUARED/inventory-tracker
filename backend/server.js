const express = require('express');
const cors = require('cors');
// Mongoose helps connect to MongoDB
const mongoose = require('mongoose');

require('dotenv').config();

// Express server
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connects to database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const itemsRouter = require('./routes/items');

app.use('/api/items', itemsRouter);

// Starts the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});