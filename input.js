// setup interface to handle user input from stdin
let connection;
const handleUserInput = function (key) {
  // your code here
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    //console.log("Move: up");
    connection.write("Move: up");
  }
  if (key === 'a') {
    //console.log("Move: left");
    connection.write("Move: left");
  }
  if (key === 's') {
    //console.log("Move: down");
    connection.write("Move: down");
  }
  if (key === 'd') {
    //console.log("Move: right");
    connection.write("Move: right");
  }
  if (key === 'm') {
    //console.log("Move: right");
    connection.write("Say: HaHaHa 🐍🐍🐍🇨🇦🇨🇳");
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  
  return stdin;
};

module.exports = {setupInput};