// setup interface to handle user input from stdin
const handleUserInput = function (key) {
  // your code here
  if (key === '\u0003') {
    process.exit();
  }
};
// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on("data", handleUserInput);
//   return stdin;
// };

const stdin = process.stdin;
const setRawMode = stdin.setRawMode(true);
const  setEncoding = stdin.setEncoding("utf8");
const resume = stdin.resume();
const on =  stdin.on("data", handleUserInput);


module.exports = {stdin,setRawMode,setEncoding,resume,on};