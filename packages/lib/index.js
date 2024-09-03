require("dotenv").config();

const config = {
  env: process.env.ENV || "local",
  secret_key: process.env.SECRET_KEY,
  port: process.env.PORT || 5000,
};

const add = (a, b) => a + b;

const http = async (endpoint = "/users") => {
  return await fetch("https://jsonplaceholder.typicode.com" + endpoint).then(
    (response) => response.json()
  );
};

module.exports = {
  add,
  config,
  http,
};
