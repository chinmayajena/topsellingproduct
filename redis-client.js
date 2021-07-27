const client = require("redis").createClient({
  host: "localhost",
  port: 6379,
});
const { promisify } = require("util");

client.on("connect", () => {
  console.log("Redis client connected");
});

client.on("error", (error) => {
  console.error(error);
});

const getValue = promisify(client.get).bind(client);
const setValue = promisify(client.set).bind(client);
const getList = promisify(client.lrange).bind(client);

module.exports = {
  getValue,
  setValue,
  getList,
};
