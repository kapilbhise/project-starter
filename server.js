const express = require("express");
const cors = require("cors");

const app = express();

app.get("/api/cricketers", cors(), (req, res) => {
  const cricketers = [
    { id: 1, firstName: "Sachin", lastName: "Tendulkar" },
    { id: 2, firstName: "Virat", lastName: "Kohli" },
    { id: 3, firstName: "Steve", lastName: "Smith" },
  ];

  res.json(cricketers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
