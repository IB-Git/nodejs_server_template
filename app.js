const express = require("express");
const connectDB = require("./config/db");
const morgan = require("morgan");
const app = express();

const PORT = process.env.PORT || 8080;

//connectDB()   <- Remove comment to call function

/**
 * Routes:
 * localhost:PORT/${route_name}
 * for new routes :
 * app.use('route', require('route_file_location'))
 */
app.use("/api/sample", require("./api/routes/sample-route"));

app.use(morgan("dev"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
