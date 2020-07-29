const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.use("/api/sample", require("./api/routes/sample-route")); //localhost:PORT/api/sample

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
