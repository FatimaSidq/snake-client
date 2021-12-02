console.clear();
let connection, awaiting_input;
readline = require("readline")
const rl = readline.createInterface(
  process.stdin, process.stdout);

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (awaiting_input) {
    return
  }
  switch (key) {
    case '\u0003':
      process.exit();
    case 'w':
      connection.write("Move: up");
      break
    case 'a':
      connection.write("Move: left");
      break;
    case 's':
      connection.write("Move: down");
      break;
    case 'd':
      connection.write("Move: right");
      break;
    case 't':
      awaiting_input = true;
      console.clear();
      rl.question('Enter message: ', (message) => {
        connection.write("Say: " + message);
        awaiting_input = false;
      });
  }
};

module.exports = {setupInput, handleUserInput}