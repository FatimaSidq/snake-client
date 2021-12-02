const net = require("net");
const { ip, port } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: ip, // IP address here,
    port: port// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server!")
    conn.write("Name: FaS");
  });
  return conn;
};

module.exports = {connect};