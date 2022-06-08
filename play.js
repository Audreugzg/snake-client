// const net = require("net");
//const connect = require("./clients.js");
const {conn,textEncoding,connData,connect,connect1} = require('./clients');

console.log("Connecting ...");

conn;
textEncoding;
connData;
connect;
connect1;

// setup interface to handle user input from stdin
const handleUserInput = function (key) {
  // your code here
  if (key === '\u0003') {
    process.exit();
  }
};
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

setupInput();