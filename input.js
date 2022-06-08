// setup interface to handle user input from stdin
let connection;
const { MOVE_UP_KEY,MOVE_DOWN_KEY,MOVE_LEFT_KEY,MOVE_RIGHT_KEY,Exit_KEY,MESSAGE_KEY} = require("./constants");
const handleUserInput = function (key) {
  // your code here
  if (key === Exit_KEY) {
    process.exit();
  }
  if (key === MOVE_UP_KEY) {
    //console.log("Move: up");
    connection.write("Move: up");
  }
  if (key === MOVE_LEFT_KEY) {
    //console.log("Move: left");
    connection.write("Move: left");
  }
  if (key === MOVE_DOWN_KEY) {
    //console.log("Move: down");
    connection.write("Move: down");
  }
  if (key === MOVE_RIGHT_KEY) {
    //console.log("Move: right");
    connection.write("Move: right");
  }
  if (MESSAGE_KEY[key]) {
    //console.log("Move: right");
    connection.write(MESSAGE_KEY[key]);
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