const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/albums", require("./routes/albums"));
app.use("/api/songs", require("./routes/songs"));
app.use("/api/singers", require("./routes/singers"));
app.use("/api/sales-managers", require("./routes/salesManagers"));
app.use("/api/instruments", require("./routes/instruments"));
app.use("/api/instrumentalists", require("./routes/instrumentalists"));
app.use("/api/song-singers", require("./routes/songSingers"));

// Sample POST route for testing JSON body fields
app.post("/api/test-post", (req, res) => {
  const {
    album_name,
    production_year,
    production_country,
    sales_manager_id
  } = req.body;

  res.json({
    message: "Received POST data successfully",
    data: {
      album_name,
      production_year,
      production_country,
      sales_manager_id
    }
  });
});

// Root route
app.get("/", (req, res) => {
  res.send("🎵 Music API is running!");
});

// Swagger UI (disabled by comment)
// const swaggerUi = require("swagger-ui-express");
// const YAML = require("yamljs");
// const swaggerDocument = YAML.load("./docs/openapi.yaml");
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
