const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const locationRoutes = require('./routes/locationRoutes');
const PORT = process.env.PORT || 5001;
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
//app.use('/api/locations', locationRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
