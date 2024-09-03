const express = require("express");

const { config, http } = require("lib");

const app = express();

app.get("/users", async (_, res) => {
  try {
    const data = await http("/users");
    res.send(data);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).send(error);
  }
});

app.listen(config.port, () =>
  console.log(
    `Server running on port ${config.port} on ${config.env} environment`
  )
);
